import React, { useEffect, useState } from "react";
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

  useEffect(() => {
    // Add the ElevenLabs ConvAI voice agent script
    const script = document.createElement('script');
    script.id = 'elevenlabs-convai-widget';
    script.async = true;
    script.type = 'text/javascript';
    script.src = 'https://unpkg.com/@elevenlabs/convai-widget-embed';

    // Only add if not already present
    if (!document.getElementById('elevenlabs-convai-widget')) {
      document.head.appendChild(script);
    }

    // Add the ConvAI widget element
    let convaiWidget = document.getElementById('elevenlabs-convai-widget-element');
    if (!convaiWidget) {
      convaiWidget = document.createElement('elevenlabs-convai');
      convaiWidget.id = 'elevenlabs-convai-widget-element';
      convaiWidget.setAttribute('agent-id', 'agent_9601k3c0dph4eezaj7qxsf837x4z');
      convaiWidget.setAttribute('auto-start', 'true'); // Auto-start the voice agent
      document.body.appendChild(convaiWidget);
    }

    // Auto-trigger the voice agent after a short delay to ensure it's loaded
    const autoTriggerTimeout = setTimeout(() => {
      // Try to programmatically open the voice agent
      const widget = document.querySelector('elevenlabs-convai') as any;
      if (widget && widget.open) {
        widget.open();
        setVoiceAgentLoaded(true);
      } else {
        // Fallback: dispatch a custom event to trigger the widget
        const openEvent = new CustomEvent('elevenlabs-convai-open');
        document.dispatchEvent(openEvent);
        setVoiceAgentLoaded(true);
      }
    }, 2000); // 2 second delay to ensure widget is loaded

    return () => {
      clearTimeout(autoTriggerTimeout);
      // Cleanup on component unmount
      const existingScript = document.getElementById('elevenlabs-convai-widget');
      if (existingScript) {
        existingScript.remove();
      }
      const existingWidget = document.getElementById('elevenlabs-convai-widget-element');
      if (existingWidget) {
        existingWidget.remove();
      }
    };
  }, []);

  const handleClick = () => {
    navigate("/ai-assistant");
  };

  return (
    <button
      onClick={handleClick}
      className={cn(
        "flex items-center space-x-2 px-4 py-2 backdrop-blur-sm border rounded-full text-white transition-all duration-200 bg-white/10 border-white/20 hover:bg-white/20 group",
        voiceAgentLoaded && "ring-2 ring-green-400/50",
        className
      )}
    >
      <div className="relative">
        <MessageCircle className="h-5 w-5" />
        <Sparkles className={cn(
          "h-3 w-3 absolute -top-1 -right-1 text-indigo-300 transition-opacity",
          voiceAgentLoaded ? "opacity-100 animate-pulse" : "opacity-0 group-hover:opacity-100"
        )} />
        {voiceAgentLoaded && (
          <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-400 rounded-full animate-pulse" />
        )}
      </div>
      <span className="hidden sm:inline text-sm">
        {voiceAgentLoaded ? "Voice Active" : "AI Assistant"}
      </span>
    </button>
  );
}
