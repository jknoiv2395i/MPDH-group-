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
  const voiceAgentActiveRef = useRef(voiceAgentActive);

  // Keep ref in sync with state
  voiceAgentActiveRef.current = voiceAgentActive;

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
      // Toggle the voice agent
      const widget = document.querySelector('elevenlabs-convai') as any;
      if (widget) {
        if (voiceAgentActive) {
          // Try multiple methods to close the voice agent
          let closed = false;

          // Method 1: Try the close method
          if (widget.close && typeof widget.close === 'function') {
            try {
              widget.close();
              closed = true;
            } catch (e) {
              console.log('Close method failed:', e);
            }
          }

          // Method 2: Try hiding the widget
          if (!closed) {
            try {
              widget.style.display = 'none';
              widget.style.visibility = 'hidden';
              closed = true;
            } catch (e) {
              console.log('Hide method failed:', e);
            }
          }

          // Method 3: Dispatch close event
          if (!closed) {
            const closeEvent = new CustomEvent('elevenlabs-convai-close');
            document.dispatchEvent(closeEvent);
          }

          setVoiceAgentActive(false);
        } else {
          // Try multiple methods to open the voice agent
          let opened = false;

          // Method 1: Try the open method
          if (widget.open && typeof widget.open === 'function') {
            try {
              widget.open();
              opened = true;
            } catch (e) {
              console.log('Open method failed:', e);
            }
          }

          // Method 2: Try showing the widget and triggering click
          if (!opened) {
            try {
              widget.style.display = '';
              widget.style.visibility = 'visible';
              if (widget.click && typeof widget.click === 'function') {
                widget.click();
                opened = true;
              }
            } catch (e) {
              console.log('Show and click method failed:', e);
            }
          }

          // Method 3: Dispatch open event
          if (!opened) {
            const openEvent = new CustomEvent('elevenlabs-convai-open');
            document.dispatchEvent(openEvent);
          }

          setVoiceAgentActive(true);
        }

        // Double-check state after a short delay
        setTimeout(() => {
          const isVisible = widget.style.display !== 'none' &&
                           widget.style.visibility !== 'hidden' &&
                           widget.offsetParent !== null;
          if (isVisible !== voiceAgentActiveRef.current) {
            setVoiceAgentActive(isVisible);
          }
        }, 500);
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

        {/* Simplified indicator for mobile, full indicator for desktop */}
        {isMobile ? (
          // Simple green dot indicator for mobile
          voiceAgentActive && (
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse border border-white/20" />
          )
        ) : (
          // Full sparkles + dot indicator for desktop
          <>
            <Sparkles className={cn(
              "h-3 w-3 absolute -top-1 -right-1 text-indigo-300 transition-opacity",
              voiceAgentActive ? "opacity-100 animate-pulse" : voiceAgentLoaded ? "opacity-60" : "opacity-0 group-hover:opacity-100"
            )} />
            {voiceAgentActive && (
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            )}
          </>
        )}
      </div>

      {/* Text only shown on desktop */}
      {!isMobile && (
        <span className="hidden sm:inline text-sm">
          {voiceAgentActive ? "Voice Active" : voiceAgentLoaded ? "Start Voice" : "AI Assistant"}
        </span>
      )}

      {/* Mobile tooltip-like text (optional) */}
      {isMobile && voiceAgentActive && (
        <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-green-400 whitespace-nowrap">
          Voice Active
        </span>
      )}
    </button>
  );
}
