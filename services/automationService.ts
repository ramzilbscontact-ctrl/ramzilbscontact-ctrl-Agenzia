
import { GoogleGenAI, Modality } from "@google/genai";
import type { Post } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || '' });

export const automationService = {
  /**
   * Simulates the "1=3" automation logic.
   * In a real scenario, this would be triggered by a backend hook when a post is saved.
   */
  async generateEcosystemAssets(post: Post): Promise<{ audioUrl: string; videoUrl: string }> {
    console.log(`Starting ecosystem generation for: ${post.title}`);
    
    try {
      // 1. Generate Audio (TTS)
      const audioUrl = await this.generatePodcast(post);
      
      // 2. Generate Video (Veo)
      const videoUrl = await this.generateEducationalVideo(post);
      
      return { audioUrl, videoUrl };
    } catch (error) {
      console.error("Automation failed:", error);
      // Return fallback mock URLs if API fails
      return {
        audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
        videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4'
      };
    }
  },

  async generatePodcast(post: Post): Promise<string> {
    const prompt = `Convert the following blog post into a professional podcast script and then synthesize it:
    Title: ${post.title}
    Content: ${post.excerpt}`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash-preview-tts",
      contents: [{ parts: [{ text: prompt }] }],
      config: {
        responseModalities: [Modality.AUDIO],
        speechConfig: {
          voiceConfig: {
            prebuiltVoiceConfig: { voiceName: 'Kore' },
          },
        },
      },
    });

    const base64Audio = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
    if (base64Audio) {
      // In a real app, we would upload this to a storage bucket (S3/GCS)
      // For this demo, we return a data URI or a mock URL
      return `data:audio/mp3;base64,${base64Audio}`;
    }
    throw new Error("TTS generation failed");
  },

  async generateEducationalVideo(post: Post): Promise<string> {
    // Note: Video generation takes time, so this would typically be an async operation with polling.
    // Here we simulate the initiation.
    
    const prompt = `Create a high-end educational video for C-Level executives based on this topic: ${post.title}. 
    Style: Minimalist, "White Pure Look", professional motion graphics.`;

    try {
      let operation = await ai.models.generateVideos({
        model: 'veo-3.1-fast-generate-preview',
        prompt: prompt,
        config: {
          numberOfVideos: 1,
          resolution: '720p',
          aspectRatio: '16:9'
        }
      });

      // Since we can't block the UI for minutes, we'd return a placeholder or handle polling elsewhere.
      // For the sake of this demo, we'll return a mock URL if the operation is started.
      if (operation) {
        return 'https://www.w3schools.com/html/mov_bbb.mp4';
      }
    } catch (e) {
      console.warn("Video generation not available or failed, using fallback.");
    }
    
    return 'https://www.w3schools.com/html/mov_bbb.mp4';
  }
};
