import { useEffect, useState } from "react";

export function useVoiceAgent() {
  const [voiceAgentLoaded, setVoiceAgentLoaded] = useState(false);

  useEffect(() => {
    // Add the ElevenLabs ConvAI script exactly as provided
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/@elevenlabs/convai-widget-embed';
    script.async = true;
    script.type = 'text/javascript';
    script.id = 'elevenlabs-convai-script';

    // Only add if not already present
    if (!document.getElementById('elevenlabs-convai-script')) {
      try {
        document.head.appendChild(script);
      } catch (e) {
        console.error('Failed to append convai script to head', e);
      }

      // Wait for script to load before creating widget
      script.onload = () => {
        try {
          // Add the ConvAI widget element exactly as provided
          let convaiWidget = document.getElementById('elevenlabs-convai-widget');
          if (!convaiWidget) {
            convaiWidget = document.createElement('elevenlabs-convai');
            convaiWidget.id = 'elevenlabs-convai-widget';
            // only set agent-id if available
            try {
              convaiWidget.setAttribute('agent-id', 'agent_9601k3c0dph4eezaj7qxsf837x4z');
            } catch (e) {
              console.warn('Failed to set agent-id on convai widget', e);
            }

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
        } catch (e) {
          console.error('Error while creating convai widget after script load', e);
        }
      };

      script.onerror = (err) => {
        console.error('Failed to load convai script', err);
      };
    } else {
      // Script already exists, check if widget exists
      try {
        let convaiWidget = document.getElementById('elevenlabs-convai-widget');
        if (!convaiWidget) {
          convaiWidget = document.createElement('elevenlabs-convai');
          convaiWidget.id = 'elevenlabs-convai-widget';
          try {
            convaiWidget.setAttribute('agent-id', 'agent_9601k3c0dph4eezaj7qxsf837x4z');
          } catch (e) {
            console.warn('Failed to set agent-id on convai widget', e);
          }

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
      } catch (e) {
        console.error('Error while ensuring convai widget exists', e);
      }
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
      // Note: We don't cleanup the script and widget here anymore
      // since we want them to persist even if components using this hook unmount
    };
  }, []);

  const activateVoiceAgent = () => {
    console.log('Attempting to activate voice agent, loaded:', voiceAgentLoaded);

    if (voiceAgentLoaded) {
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

        return activated;
      }
    }
    
    return false;
  };

  return {
    voiceAgentLoaded,
    activateVoiceAgent
  };
}
