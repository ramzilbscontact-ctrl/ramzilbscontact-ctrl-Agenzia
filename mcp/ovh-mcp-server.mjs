#!/usr/bin/env node
/**
 * Custom OVH MCP Server for Agenzia Blog Automation
 *
 * Provides tools to:
 * - Check OVH hosting status
 * - Upload built files to OVH web hosting via FTP
 * - Manage OVH Object Storage (blog media assets)
 * - Check domain DNS records for agenzia.uk
 *
 * Uses OVH API v1: https://api.ovh.com/
 * Install deps: npm install @modelcontextprotocol/sdk node-fetch basic-ftp
 */

import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";
import crypto from "crypto";
import https from "https";
import { createReadStream, readdirSync, statSync } from "fs";
import path from "path";

// ── OVH API helper ──────────────────────────────────────────────────────────
const OVH_ENDPOINT = process.env.OVH_ENDPOINT || "ovh-eu";
const OVH_APP_KEY = process.env.OVH_APP_KEY || "";
const OVH_APP_SECRET = process.env.OVH_APP_SECRET || "";
const OVH_CONSUMER_KEY = process.env.OVH_CONSUMER_KEY || "";

const ENDPOINTS = {
  "ovh-eu": "https://eu.api.ovh.com/1.0",
  "ovh-ca": "https://ca.api.ovh.com/1.0",
  "kimsufi-eu": "https://eu.api.kimsufi.com/1.0",
  "soyoustart-eu": "https://eu.api.soyoustart.com/1.0",
};

async function ovhRequest(method, path, body = null) {
  const baseUrl = ENDPOINTS[OVH_ENDPOINT] || ENDPOINTS["ovh-eu"];
  const url = `${baseUrl}${path}`;
  const timestamp = Math.floor(Date.now() / 1000).toString();
  const bodyStr = body ? JSON.stringify(body) : "";

  const sigBase = [
    OVH_APP_SECRET,
    OVH_CONSUMER_KEY,
    method.toUpperCase(),
    url,
    bodyStr,
    timestamp,
  ].join("+");
  const signature =
    "$1$" + crypto.createHash("sha1").update(sigBase).digest("hex");

  const headers = {
    "Content-Type": "application/json",
    "X-Ovh-Application": OVH_APP_KEY,
    "X-Ovh-Consumer": OVH_CONSUMER_KEY,
    "X-Ovh-Timestamp": timestamp,
    "X-Ovh-Signature": signature,
  };

  return new Promise((resolve, reject) => {
    const urlObj = new URL(url);
    const options = {
      hostname: urlObj.hostname,
      path: urlObj.pathname + urlObj.search,
      method: method.toUpperCase(),
      headers,
    };

    const req = https.request(options, (res) => {
      let data = "";
      res.on("data", (chunk) => (data += chunk));
      res.on("end", () => {
        try {
          resolve({ status: res.statusCode, body: JSON.parse(data) });
        } catch {
          resolve({ status: res.statusCode, body: data });
        }
      });
    });
    req.on("error", reject);
    if (bodyStr) req.write(bodyStr);
    req.end();
  });
}

// ── FTP upload helper ───────────────────────────────────────────────────────
async function ftpUploadDirectory(localDir, remoteDir) {
  // Dynamic import to allow running without the package if FTP not needed
  try {
    const { Client } = await import("basic-ftp");
    const client = new Client();
    await client.access({
      host: process.env.OVH_FTP_HOST,
      user: process.env.OVH_FTP_USER,
      password: process.env.OVH_FTP_PASSWORD,
      secure: false,
    });
    await client.ensureDir(remoteDir);
    await client.uploadFromDir(localDir, remoteDir);
    client.close();
    return { success: true, uploaded: localDir };
  } catch (err) {
    return { success: false, error: err.message };
  }
}

// ── MCP Server ──────────────────────────────────────────────────────────────
const server = new Server(
  { name: "ovh-agenzia", version: "1.0.0" },
  { capabilities: { tools: {} } }
);

server.setRequestHandler(ListToolsRequestSchema, async () => ({
  tools: [
    {
      name: "ovh_check_credentials",
      description: "Verify OVH API credentials are set and reachable.",
      inputSchema: { type: "object", properties: {} },
    },
    {
      name: "ovh_list_hosting",
      description: "List all OVH web hosting plans on the account.",
      inputSchema: { type: "object", properties: {} },
    },
    {
      name: "ovh_hosting_info",
      description: "Get details for a specific OVH hosting service.",
      inputSchema: {
        type: "object",
        properties: {
          serviceName: {
            type: "string",
            description: "OVH hosting service name (e.g. ftp123456-001)",
          },
        },
        required: ["serviceName"],
      },
    },
    {
      name: "ovh_list_domains",
      description: "List all domains registered on the OVH account.",
      inputSchema: { type: "object", properties: {} },
    },
    {
      name: "ovh_get_dns_records",
      description: "Get DNS zone records for a domain.",
      inputSchema: {
        type: "object",
        properties: {
          domain: { type: "string", description: "Domain name (e.g. agenzia.uk)" },
        },
        required: ["domain"],
      },
    },
    {
      name: "ovh_ftp_deploy",
      description:
        "Deploy the built React app (dist/ folder) to OVH web hosting via FTP. Requires OVH_FTP_* env vars.",
      inputSchema: {
        type: "object",
        properties: {
          localDistPath: {
            type: "string",
            description: "Absolute path to the dist/ directory to upload.",
          },
          remotePath: {
            type: "string",
            description:
              "Remote FTP directory (default: /www). Use / for root, /www for standard OVH hosting.",
            default: "/www",
          },
        },
        required: ["localDistPath"],
      },
    },
    {
      name: "ovh_object_storage_list",
      description: "List containers in OVH Object Storage (Swift/S3).",
      inputSchema: {
        type: "object",
        properties: {
          projectId: {
            type: "string",
            description: "OVH Public Cloud project ID.",
          },
          region: {
            type: "string",
            description: "Region (e.g. GRA, SBG, BHS)",
            default: "GRA",
          },
        },
        required: ["projectId"],
      },
    },
  ],
}));

server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const { name, arguments: args } = request.params;

  try {
    switch (name) {
      case "ovh_check_credentials": {
        const missing = [];
        if (!OVH_APP_KEY) missing.push("OVH_APP_KEY");
        if (!OVH_APP_SECRET) missing.push("OVH_APP_SECRET");
        if (!OVH_CONSUMER_KEY) missing.push("OVH_CONSUMER_KEY");
        if (missing.length > 0) {
          return {
            content: [
              {
                type: "text",
                text: `❌ Missing OVH credentials: ${missing.join(", ")}\n\nSet these env vars in .claude/settings.json under the ovh mcpServer.`,
              },
            ],
          };
        }
        const res = await ovhRequest("GET", "/me");
        return {
          content: [
            {
              type: "text",
              text:
                res.status === 200
                  ? `✅ OVH credentials valid. Account: ${JSON.stringify(res.body, null, 2)}`
                  : `⚠️ OVH API returned ${res.status}: ${JSON.stringify(res.body)}`,
            },
          ],
        };
      }

      case "ovh_list_hosting": {
        const res = await ovhRequest("GET", "/hosting/web");
        return {
          content: [
            {
              type: "text",
              text:
                res.status === 200
                  ? `Hosting plans: ${JSON.stringify(res.body, null, 2)}`
                  : `Error ${res.status}: ${JSON.stringify(res.body)}`,
            },
          ],
        };
      }

      case "ovh_hosting_info": {
        const res = await ovhRequest("GET", `/hosting/web/${args.serviceName}`);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify(res.body, null, 2),
            },
          ],
        };
      }

      case "ovh_list_domains": {
        const res = await ovhRequest("GET", "/domain");
        return {
          content: [
            {
              type: "text",
              text:
                res.status === 200
                  ? `Domains: ${JSON.stringify(res.body, null, 2)}`
                  : `Error ${res.status}: ${JSON.stringify(res.body)}`,
            },
          ],
        };
      }

      case "ovh_get_dns_records": {
        const res = await ovhRequest("GET", `/domain/zone/${args.domain}/record`);
        if (res.status !== 200) {
          return {
            content: [
              {
                type: "text",
                text: `Error ${res.status}: ${JSON.stringify(res.body)}`,
              },
            ],
          };
        }
        // Fetch details for each record
        const ids = res.body;
        const details = await Promise.all(
          ids.slice(0, 20).map((id) =>
            ovhRequest("GET", `/domain/zone/${args.domain}/record/${id}`)
          )
        );
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify(
                details.map((d) => d.body),
                null,
                2
              ),
            },
          ],
        };
      }

      case "ovh_ftp_deploy": {
        const remotePath = args.remotePath || "/www";
        const result = await ftpUploadDirectory(args.localDistPath, remotePath);
        return {
          content: [
            {
              type: "text",
              text: result.success
                ? `✅ Deployed ${args.localDistPath} → ${remotePath} via FTP`
                : `❌ FTP deploy failed: ${result.error}`,
            },
          ],
        };
      }

      case "ovh_object_storage_list": {
        const res = await ovhRequest(
          "GET",
          `/cloud/project/${args.projectId}/storage`
        );
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify(res.body, null, 2),
            },
          ],
        };
      }

      default:
        return {
          content: [{ type: "text", text: `Unknown tool: ${name}` }],
        };
    }
  } catch (err) {
    return {
      content: [{ type: "text", text: `Tool error: ${err.message}` }],
      isError: true,
    };
  }
});

const transport = new StdioServerTransport();
await server.connect(transport);
