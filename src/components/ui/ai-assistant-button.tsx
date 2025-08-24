import React from "react";
import { MessageCircle, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useVoiceAgent } from "@/hooks/use-voice-agent";

interface AIAssistantButtonProps {
  className?: string;
  isMobile?: boolean;
}

export function AIAssistantButton({ className, isMobile = false }: AIAssistantButtonProps) {
  const navigate = useNavigate();
  const { voiceAgentLoaded, activateVoiceAgent } = useVoiceAgent();

  const handleClick = () => {
    console.log('AI Assistant button clicked, voiceAgentLoaded:', voiceAgentLoaded);

    if (voiceAgentLoaded) {
      const activated = activateVoiceAgent();
      
      if (!activated) {
        console.log('Voice agent activation failed, navigating to AI assistant page');
        navigate("/ai-assistant");
      }
    } else {
      console.log('Voice agent not loaded, navigating to AI assistant page');
      navigate("/ai-assistant");
    }
  };

  return (
    <button
      onClick={handleClick}
      className={cn(
        // Base styles
        "hidden backdrop-blur-sm border rounded-full text-white transition-all duration-200 bg-white/10 border-white/20 hover:bg-white/20 group relative flex flex-row overflow-auto",
        // Mobile vs Desktop responsive styling
        isMobile
          ? "w-12 h-12 justify-center" // Compact circular button for mobile
          : "space-x-2 px-4 py-2", // Standard button with text for desktop
        className
      )}
    >
      <div className="relative">
        <MessageCircle className={cn(
          isMobile ? "h-6 w-6" : "h-5 w-5"
        )} />

        {/* Sparkles indicator for voice agent availability */}
        <Sparkles className={cn(
          "h-3 w-3 absolute -top-1 -right-1 text-indigo-300 transition-opacity",
          voiceAgentLoaded ? "opacity-60 group-hover:opacity-100" : "opacity-0"
        )} />
      </div>

      {/* Text only shown on desktop */}
      {!isMobile && (
        <span className="hidden">
          {voiceAgentLoaded ? "Voice Assistant" : "AI Assistant"}
        </span>
      )}
    </button>
  );
}
