import React, { useEffect, useState, useRef } from "react";
import { MessageCircle, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";

interface AIAssistantButtonProps {
  className?: string;
  isMobile?: boolean;
}

export function AIAssistantButton({ className, isMobile = false }: AIAssistantButtonProps) {
  const navigate = useNavigate();
  const [voiceAgentLoaded, setVoiceAgentLoaded] = useState(false);
  const [voiceAgentActive, setVoiceAgentActive] = useState(false);

  useEffect(() => {
    // Add the ElevenLabs ConvAI script exactly as provided
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/@elevenlabs/convai-widget-embed';
    script.async = true;
    script.type = 'text/javascript';
    script.id = 'elevenlabs-convai-script';

    // Only add if not already present
    if (!document.getElementById('elevenlabs-convai-script')) {
      document.head.appendChild(script);
    }

    // Add the ConvAI widget element exactly as provided
    let convaiWidget = document.getElementById('elevenlabs-convai-widget');
    if (!convaiWidget) {
      convaiWidget = document.createElement('elevenlabs-convai');
      convaiWidget.id = 'elevenlabs-convai-widget';
      convaiWidget.setAttribute('agent-id', 'agent_9601k3c0dph4eezaj7qxsf837x4z');
      document.body.appendChild(convaiWidget);
    }

    // Simple check for widget availability
    const checkWidget = setTimeout(() => {
      const widget = document.querySelector('elevenlabs-convai');
      if (widget) {
        setVoiceAgentLoaded(true);
      }
    }, 2000);

    return () => {
      clearTimeout(checkWidget);
      // Cleanup on component unmount
      const existingScript = document.getElementById('elevenlabs-convai-script');
      if (existingScript) {
        existingScript.remove();
      }
      const existingWidget = document.getElementById('elevenlabs-convai-widget');
      if (existingWidget) {
        existingWidget.remove();
      }
    };
  }, []);

  const handleClick = () => {
    if (voiceAgentLoaded) {
      // Try to activate the voice agent
      const widget = document.querySelector('elevenlabs-convai') as any;
      if (widget) {
        // Try to click the widget to activate it
        if (widget.click && typeof widget.click === 'function') {
          widget.click();
          setVoiceAgentActive(true);
        } else if (widget.open && typeof widget.open === 'function') {
          widget.open();
          setVoiceAgentActive(true);
        } else {
          // Fallback: Navigate to AI assistant page
          navigate("/ai-assistant");
        }
      }
    } else {
      // Fallback: navigate to AI assistant if voice agent not loaded
      navigate("/ai-assistant");
    }
  };

  return (
    <button
      onClick={handleClick}
      className={cn(
        // Base styles
        "flex items-center backdrop-blur-sm border rounded-full text-white transition-all duration-200 bg-white/10 border-white/20 hover:bg-white/20 group relative",
        // Mobile vs Desktop responsive styling
        isMobile
          ? "w-12 h-12 justify-center" // Compact circular button for mobile
          : "space-x-2 px-4 py-2", // Standard button with text for desktop
        // Voice agent indicator
        voiceAgentActive && !isMobile && "ring-2 ring-green-400/50",
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
        <span className="hidden sm:inline text-sm">
          {voiceAgentLoaded ? "Voice Assistant" : "AI Assistant"}
        </span>
      )}
    </button>
  );
}
