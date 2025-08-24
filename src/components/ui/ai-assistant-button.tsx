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

      // Wait for script to load before creating widget
      script.onload = () => {
        // Add the ConvAI widget element exactly as provided
        let convaiWidget = document.getElementById('elevenlabs-convai-widget');
        if (!convaiWidget) {
          convaiWidget = document.createElement('elevenlabs-convai');
          convaiWidget.id = 'elevenlabs-convai-widget';
          convaiWidget.setAttribute('agent-id', 'agent_9601k3c0dph4eezaj7qxsf837x4z');

          // Apply styles to match the diff requirements
          Object.assign(convaiWidget.style, {
            bottom: '0px',
            color: 'rgb(0, 0, 0)',
            display: 'block',
            fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
            fontWeight: '400',
            left: '0px',
            pointerEvents: 'auto',
            position: 'fixed',
            right: '0px',
            scrollbarColor: 'rgb(229, 231, 235) rgba(0, 0, 0, 0)',
            top: '192px',
            zIndex: '1000'
          });

          document.body.appendChild(convaiWidget);

          console.log('ElevenLabs voice agent widget created');
          setVoiceAgentLoaded(true);
        }
      };
    } else {
      // Script already exists, check if widget exists
      let convaiWidget = document.getElementById('elevenlabs-convai-widget');
      if (!convaiWidget) {
        convaiWidget = document.createElement('elevenlabs-convai');
        convaiWidget.id = 'elevenlabs-convai-widget';
        convaiWidget.setAttribute('agent-id', 'agent_9601k3c0dph4eezaj7qxsf837x4z');

        // Apply styles to match the diff requirements
        Object.assign(convaiWidget.style, {
          bottom: '0px',
          color: 'rgb(0, 0, 0)',
          display: 'block',
          fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
          fontWeight: '400',
          left: '0px',
          pointerEvents: 'auto',
          position: 'fixed',
          right: '0px',
          scrollbarColor: 'rgb(229, 231, 235) rgba(0, 0, 0, 0)',
          top: '192px',
          zIndex: '1000'
        });

        document.body.appendChild(convaiWidget);
        console.log('ElevenLabs voice agent widget created (script existed)');
      }
      setVoiceAgentLoaded(true);
    }

    // Additional check for widget availability
    const checkWidget = setTimeout(() => {
      const widget = document.querySelector('elevenlabs-convai');
      if (widget) {
        console.log('ElevenLabs voice agent widget found:', widget);
        setVoiceAgentLoaded(true);
      } else {
        console.log('ElevenLabs voice agent widget not found');
      }
    }, 3000);

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
    console.log('AI Assistant button clicked, voiceAgentLoaded:', voiceAgentLoaded);

    if (voiceAgentLoaded) {
      // Try to activate the voice agent
      const widget = document.querySelector('elevenlabs-convai') as any;
      console.log('Found widget:', widget);

      if (widget) {
        // Try different methods to activate the widget
        let activated = false;

        // Method 1: Try the click method
        if (widget.click && typeof widget.click === 'function') {
          try {
            widget.click();
            activated = true;
            console.log('Widget activated via click method');
          } catch (e) {
            console.log('Click method failed:', e);
          }
        }

        // Method 2: Try the open method
        if (!activated && widget.open && typeof widget.open === 'function') {
          try {
            widget.open();
            activated = true;
            console.log('Widget activated via open method');
          } catch (e) {
            console.log('Open method failed:', e);
          }
        }

        // Method 3: Try triggering a mouse event
        if (!activated) {
          try {
            const event = new MouseEvent('click', {
              view: window,
              bubbles: true,
              cancelable: true
            });
            widget.dispatchEvent(event);
            activated = true;
            console.log('Widget activated via mouse event');
          } catch (e) {
            console.log('Mouse event method failed:', e);
          }
        }

        if (activated) {
          setVoiceAgentActive(true);
        } else {
          console.log('All activation methods failed, navigating to AI assistant page');
          navigate("/ai-assistant");
        }
      } else {
        console.log('Widget not found, navigating to AI assistant page');
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
        "backdrop-blur-sm border rounded-full text-white transition-all duration-200 bg-white/10 border-white/20 hover:bg-white/20 group relative flex flex-row overflow-auto",
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
        <span className="hidden sm:inline text-sm">
          {voiceAgentLoaded ? "Voice Assistant" : "AI Assistant"}
        </span>
      )}
    </button>
  );
}
