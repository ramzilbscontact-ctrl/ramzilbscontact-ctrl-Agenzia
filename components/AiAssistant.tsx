
import React, { useState, useRef, useEffect } from 'react';
import type { Content } from '../types';

interface AiAssistantProps {
  content: Content['aiAssistant'];
}

interface Message {
  text: string;
  sender: 'user' | 'ai';
}

const ChatIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
  </svg>
);

const CloseIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
    </svg>
);

const SendIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" >
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
    </svg>
);

const BrandIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L3 22H6.5L8 18H16L17.5 22H21L12 2ZM9.5 15L12 8L14.5 15H9.5Z" fill="currentColor"/>
    </svg>
);

const CopyIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75" />
    </svg>
);

const CheckIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
    </svg>
);

const AiAssistant: React.FC<AiAssistantProps> = ({ content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [copiedMessageIndex, setCopiedMessageIndex] = useState<number | null>(null);
  const chatEndRef = useRef<HTMLDivElement>(null);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isOpen) {
        setMessages([{ text: content.greeting, sender: 'ai' }]);
    } else {
        setMessages([]);
        setIsTyping(false);
    }
  }, [isOpen, content.greeting]);

  useEffect(() => {
    // Only scroll if drawer is open AND we are past the initial greeting
    if (isOpen && (messages.length > 1 || isTyping)) {
        chatEndRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }, [messages, isTyping, isOpen]);

  const handleSend = () => {
    if (inputValue.trim() === '' || isTyping) return;
    const newMessages: Message[] = [...messages, { text: inputValue, sender: 'user' }];
    setMessages(newMessages);
    setInputValue('');
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      setMessages(currentMessages => [...currentMessages, { text: 'I am a demo assistant. For a real consultation, please schedule a call with our experts.', sender: 'ai' }]);
    }, 1500);
  };

  const handleCopy = (text: string, index: number) => {
    if (navigator.clipboard) {
        navigator.clipboard.writeText(text).then(() => {
            setCopiedMessageIndex(index);
            setTimeout(() => {
                setCopiedMessageIndex(null);
            }, 2000);
        }).catch(err => {
            console.error('Failed to copy text: ', err);
        });
    }
  };

  return (
    <>
      <div className={`fixed bottom-5 end-5 z-[100] transition-transform duration-300 ${isOpen ? 'scale-0' : 'scale-100'}`}>
        <button
          onClick={() => setIsOpen(true)}
          aria-label="Open AI Assistant"
          className="bg-brand-primary text-white w-16 h-16 rounded-full flex items-center justify-center shadow-tactile-lg hover:scale-105 transition-transform"
        >
          <ChatIcon className="w-8 h-8" />
        </button>
      </div>

      <div className={`fixed bottom-5 end-5 z-[100] w-[calc(100%-40px)] max-w-sm h-[70vh] max-h-[500px] bg-white/60 backdrop-blur-2xl border border-white/30 rounded-2xl shadow-tactile-md flex flex-col transition-all duration-500 ease-in-out ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}>
        <header className="flex items-center justify-between p-4 border-b border-white/30">
          <div className="flex items-center gap-2">
            <BrandIcon className="w-5 h-5 text-brand-primary" />
            <h3 className="font-bold text-brand-primary text-sm md:text-base">Agenzia Assistant</h3>
          </div>
          <button onClick={() => setIsOpen(false)} aria-label="Close AI Assistant" className="text-brand-secondary hover:text-brand-primary">
            <CloseIcon className="w-6 h-6" />
          </button>
        </header>

        <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, index) => (
                <div key={index} className={`flex items-start gap-3 ${msg.sender === 'user' ? 'justify-end' : ''}`}>
                    {msg.sender === 'ai' && (
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-50 to-gray-200 flex-shrink-0 flex items-center justify-center shadow-inner">
                           <BrandIcon className="w-4 h-4 text-brand-secondary/50" />
                        </div>
                    )}
                    <div className={`relative group px-4 py-2 rounded-2xl max-w-[80%] ${msg.sender === 'ai' ? 'bg-white shadow-sm text-brand-secondary rounded-ss-none' : 'bg-brand-primary text-white rounded-se-none shadow-md'}`}>
                        <p className="text-sm whitespace-pre-wrap">{msg.text}</p>
                        {msg.sender === 'ai' && (
                            <button 
                                onClick={() => handleCopy(msg.text, index)}
                                className="absolute top-1/2 -end-10 -translate-y-1/2 p-1.5 rounded-full bg-white/80 border border-gray-100 shadow-sm text-brand-secondary opacity-0 group-hover:opacity-100 transition-opacity"
                                aria-label="Copy message"
                            >
                                {copiedMessageIndex === index ? (
                                    <CheckIcon className="w-3.5 h-3.5 text-green-600" />
                                ) : (
                                    <CopyIcon className="w-3.5 h-3.5" />
                                )}
                            </button>
                        )}
                    </div>
                </div>
            ))}
            {isTyping && (
                <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-50 to-gray-200 flex-shrink-0 flex items-center justify-center shadow-inner">
                        <BrandIcon className="w-4 h-4 text-brand-secondary/50" />
                    </div>
                    <div className="px-4 py-2 rounded-2xl bg-white shadow-sm rounded-ss-none flex items-center gap-1">
                        <span className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce" style={{animationDelay: '0s'}}></span>
                        <span className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></span>
                        <span className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></span>
                    </div>
                </div>
            )}
            <div ref={chatEndRef} />
        </div>

        <footer className="p-4 border-t border-white/30">
            <form onSubmit={(e) => { e.preventDefault(); handleSend(); }} className="flex items-center gap-2">
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder={content.placeholder}
                    className="w-full bg-white/80 border border-gray-100 placeholder:text-brand-secondary/50 text-brand-primary focus:ring-2 focus:ring-brand-accent focus:border-transparent rounded-xl px-4 py-2.5 text-sm shadow-tactile-inset transition-all"
                    disabled={isTyping}
                />
                <button type="submit" aria-label="Send message" className="bg-brand-primary text-white p-2.5 rounded-xl flex-shrink-0 disabled:opacity-50 hover:scale-105 active:scale-95 transition-all shadow-md" disabled={isTyping}>
                    <SendIcon className="w-5 h-5"/>
                </button>
            </form>
        </footer>
      </div>
    </>
  );
};

export default AiAssistant;
