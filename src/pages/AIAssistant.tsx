import React, { useState } from "react";
import AIMessageBar from "@/components/ui/ai-assistant";
import { VoiceChat } from "@/components/ui/ia-siri-chat";
import { GradientBars } from "@/components/ui/bg-bars";
import { ArrowLeft, MessageCircle, Mic } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";

const AIAssistantPage = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<"text" | "voice">("text");

  return (
    <div className="min-h-screen relative p-4 flex flex-col bg-slate-900">
      <GradientBars
        bars={25}
        colors={['#4c1d95', '#1e1b4b', 'transparent']}
      />
      {/* Header */}
      <div className="max-w-4xl mx-auto w-full -mb-1 relative z-10">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center space-x-2 text-indigo-300 hover:text-white transition-colors mb-6"
        >
          <ArrowLeft className="h-5 w-5" />
          <span>Back</span>
        </button>

        <div className="text-center mb-8">
          {/* Tab Navigation */}
          <div className="flex justify-center mt-20 ml-1">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-1 flex space-x-1">
              <button
                onClick={() => setActiveTab("text")}
                className={cn(
                  "flex items-center space-x-2 px-6 py-3 rounded-md transition-all duration-200",
                  activeTab === "text"
                    ? "bg-[#441c88] text-white shadow-lg"
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
                    ? "bg-[#441c88] text-white shadow-lg"
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
