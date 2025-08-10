import React, { useState } from "react";
import AIMessageBar from "@/components/ui/ai-assistant";
import { VoiceChat } from "@/components/ui/ia-siri-chat";
import { Component as BgGradient } from "@/components/ui/bg-gradient";
import { ArrowLeft, MessageCircle, Mic } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";

const AIAssistantPage = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<"text" | "voice">("text");

  return (
    <div className="min-h-screen relative p-4 flex flex-col">
      <BgGradient
        gradientFrom="#1e1b4b"
        gradientTo="#0f0a19"
        gradientSize="150% 150%"
        gradientPosition="50% 20%"
        gradientStop="30%"
      />
      {/* Header */}
      <div className="max-w-4xl mx-auto w-full mb-8 relative z-10">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center space-x-2 text-indigo-300 hover:text-white transition-colors mb-6"
        >
          <ArrowLeft className="h-5 w-5" />
          <span>Back</span>
        </button>

        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Smart AI Assistant
          </h1>
          <p className="text-indigo-200 text-lg max-w-2xl mx-auto mb-8">
            Interact with an intelligent assistant that understands your queries and provides instant responses.
          </p>

          {/* Tab Navigation */}
          <div className="flex justify-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-1 flex space-x-1">
              <button
                onClick={() => setActiveTab("text")}
                className={cn(
                  "flex items-center space-x-2 px-6 py-3 rounded-md transition-all duration-200",
                  activeTab === "text"
                    ? "bg-indigo-600 text-white shadow-lg"
                    : "text-indigo-200 hover:text-white hover:bg-white/10"
                )}
              >
                <MessageCircle className="h-5 w-5" />
                <span>Text Chat</span>
              </button>
              <button
                onClick={() => setActiveTab("voice")}
                className={cn(
                  "flex items-center space-x-2 px-6 py-3 rounded-md transition-all duration-200",
                  activeTab === "voice"
                    ? "bg-indigo-600 text-white shadow-lg"
                    : "text-indigo-200 hover:text-white hover:bg-white/10"
                )}
              >
                <Mic className="h-5 w-5" />
                <span>Voice Assistant</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="flex-1 relative z-10">
        {activeTab === "text" ? (
          <div className="flex items-center justify-center h-full">
            <AIMessageBar />
          </div>
        ) : (
          <VoiceChat
            className="bg-transparent relative z-10"
            demoMode={true}
            onStart={() => console.log("Voice recording started")}
            onStop={(duration) => console.log(`Voice recording stopped after ${duration}s`)}
            onVolumeChange={(volume) => console.log(`Volume: ${volume}%`)}
          />
        )}
      </div>
    </div>
  );
};

export default AIAssistantPage;
