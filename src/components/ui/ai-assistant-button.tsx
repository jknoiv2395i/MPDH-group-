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
    // Add CSS to hide ElevenLabs branding
    const hideBrandingCSS = `
      /* Hide ElevenLabs branding elements - comprehensive targeting */
      elevenlabs-convai [data-testid*="powered"],
      elevenlabs-convai [data-testid*="branding"],
      elevenlabs-convai [data-testid*="attribution"],
      elevenlabs-convai [data-testid*="footer"],
      elevenlabs-convai [class*="powered"],
      elevenlabs-convai [class*="branding"],
      elevenlabs-convai [class*="footer"],
      elevenlabs-convai [class*="attribution"],
      elevenlabs-convai [class*="credit"],
      elevenlabs-convai [class*="logo"],
      elevenlabs-convai [class*="eleven"],
      elevenlabs-convai .powered-by,
      elevenlabs-convai .branding,
      elevenlabs-convai .footer,
      elevenlabs-convai .attribution,
      elevenlabs-convai .credits,
      elevenlabs-convai .logo,
      elevenlabs-convai a[href*="elevenlabs"],
      elevenlabs-convai a[href*="11labs"],
      elevenlabs-convai *[innerHTML*="Powered by"],
      elevenlabs-convai *[innerHTML*="ElevenLabs"],
      elevenlabs-convai *[innerHTML*="11Labs"],
      elevenlabs-convai *[innerText*="Powered by"],
      elevenlabs-convai *[innerText*="ElevenLabs"],
      elevenlabs-convai *[innerText*="11Labs"],
      /* Target bottom positioned elements */
      elevenlabs-convai [style*="bottom"],
      elevenlabs-convai [style*="position: absolute"][style*="bottom"],
      elevenlabs-convai [style*="position: fixed"][style*="bottom"],
      /* Target small text elements commonly used for attribution */
      elevenlabs-convai div[style*="font-size: 12px"],
      elevenlabs-convai div[style*="font-size: 10px"],
      elevenlabs-convai span[style*="font-size: 12px"],
      elevenlabs-convai span[style*="font-size: 10px"],
      elevenlabs-convai p[style*="font-size: 12px"],
      elevenlabs-convai p[style*="font-size: 10px"],
      /* Target flex elements that might contain branding */
      elevenlabs-convai div[style*="justify-content: center"][style*="align-items: center"] {
        display: none !important;
        visibility: hidden !important;
        opacity: 0 !important;
        height: 0 !important;
        width: 0 !important;
        overflow: hidden !important;
        position: absolute !important;
        left: -9999px !important;
      }

      /* Additional targeting for shadow DOM elements */
      elevenlabs-convai * {
        --branding-display: none !important;
      }
    `;

    // Add custom styles if not already present
    if (!document.getElementById('hide-elevenlabs-branding')) {
      const style = document.createElement('style');
      style.id = 'hide-elevenlabs-branding';
      style.textContent = hideBrandingCSS;
      document.head.appendChild(style);
    }

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
      convaiWidget.setAttribute('auto-start', 'false'); // Don't auto-start, let user control it
      document.body.appendChild(convaiWidget);
    }

    // Function to remove branding elements
    const removeBrandingElements = () => {
      const brandingSelectors = [
        'elevenlabs-convai [data-testid*="powered"]',
        'elevenlabs-convai [data-testid*="branding"]',
        'elevenlabs-convai [data-testid*="attribution"]',
        'elevenlabs-convai [data-testid*="footer"]',
        'elevenlabs-convai [class*="powered"]',
        'elevenlabs-convai [class*="branding"]',
        'elevenlabs-convai [class*="footer"]',
        'elevenlabs-convai [class*="attribution"]',
        'elevenlabs-convai [class*="credit"]',
        'elevenlabs-convai [class*="logo"]',
        'elevenlabs-convai [class*="eleven"]',
        'elevenlabs-convai .powered-by',
        'elevenlabs-convai .branding',
        'elevenlabs-convai .footer',
        'elevenlabs-convai .attribution',
        'elevenlabs-convai .credits',
        'elevenlabs-convai .logo',
        'elevenlabs-convai a[href*="elevenlabs"]',
        'elevenlabs-convai a[href*="11labs"]'
      ];

      brandingSelectors.forEach(selector => {
        const elements = document.querySelectorAll(selector);
        elements.forEach(el => {
          (el as HTMLElement).style.display = 'none';
          (el as HTMLElement).remove();
        });
      });

      // Comprehensive text content check
      const allElements = document.querySelectorAll('elevenlabs-convai *');
      allElements.forEach(el => {
        const text = el.textContent?.toLowerCase() || '';
        const html = el.innerHTML?.toLowerCase() || '';

        // Check for various branding text combinations
        const brandingTexts = [
          'powered by',
          'elevenlabs',
          '11labs',
          'eleven labs',
          'made with',
          'created with',
          'built with'
        ];

        if (brandingTexts.some(brandText => text.includes(brandText) || html.includes(brandText))) {
          (el as HTMLElement).style.display = 'none';
          (el as HTMLElement).remove();
        }

        // Target small elements positioned at bottom (likely branding)
        const style = window.getComputedStyle(el as HTMLElement);
        if (style.position === 'absolute' || style.position === 'fixed') {
          const bottom = style.bottom;
          const fontSize = parseFloat(style.fontSize);
          if ((bottom === '0px' || bottom.includes('0')) && fontSize <= 14) {
            (el as HTMLElement).style.display = 'none';
            (el as HTMLElement).remove();
          }
        }
      });

      // Target shadow DOM elements if accessible
      const widget = document.querySelector('elevenlabs-convai');
      if (widget && (widget as any).shadowRoot) {
        const shadowElements = (widget as any).shadowRoot.querySelectorAll('*');
        shadowElements.forEach((el: HTMLElement) => {
          const text = el.textContent?.toLowerCase() || '';
          if (text.includes('powered by') || text.includes('elevenlabs') || text.includes('11labs')) {
            el.style.display = 'none';
            el.remove();
          }
        });
      }
    };

    // Wait for widget to load and mark as loaded
    const loadTimeout = setTimeout(() => {
      const widget = document.querySelector('elevenlabs-convai') as any;
      if (widget) {
        setVoiceAgentLoaded(true);

        // Remove branding multiple times after widget loads
        setTimeout(removeBrandingElements, 300);
        setTimeout(removeBrandingElements, 800);
        setTimeout(removeBrandingElements, 1500);
        setTimeout(removeBrandingElements, 3000);
      }
    }, 2000);

    // Set up observer to continuously remove branding
    const brandingObserver = new MutationObserver(() => {
      // Debounce the branding removal to avoid excessive calls
      setTimeout(removeBrandingElements, 100);
    });

    // Start observing when widget is added
    const observerTimeout = setTimeout(() => {
      const widget = document.querySelector('elevenlabs-convai');
      if (widget) {
        brandingObserver.observe(widget, {
          childList: true,
          subtree: true,
          attributes: true,
          characterData: true
        });

        // Also observe the document body for any new ElevenLabs elements
        brandingObserver.observe(document.body, {
          childList: true,
          subtree: true
        });

        // Run initial cleanup immediately
        removeBrandingElements();
      }
    }, 1000);

    // Additional periodic cleanup every 2 seconds
    const periodicCleanup = setInterval(removeBrandingElements, 2000);

    return () => {
      clearTimeout(loadTimeout);
      clearTimeout(observerTimeout);
      clearInterval(periodicCleanup);
      brandingObserver.disconnect();

      // Cleanup on component unmount
      const existingScript = document.getElementById('elevenlabs-convai-widget');
      if (existingScript) {
        existingScript.remove();
      }
      const existingWidget = document.getElementById('elevenlabs-convai-widget-element');
      if (existingWidget) {
        existingWidget.remove();
      }
      const existingStyle = document.getElementById('hide-elevenlabs-branding');
      if (existingStyle) {
        existingStyle.remove();
      }
    };
  }, []);

  const handleClick = () => {
    if (voiceAgentLoaded) {
      // Toggle the voice agent
      const widget = document.querySelector('elevenlabs-convai') as any;
      if (widget) {
        if (voiceAgentActive) {
          // Close the voice agent
          if (widget.close) {
            widget.close();
          }
          setVoiceAgentActive(false);
        } else {
          // Open the voice agent
          if (widget.open) {
            widget.open();
          } else {
            // Fallback: dispatch a custom event to trigger the widget
            const openEvent = new CustomEvent('elevenlabs-convai-open');
            document.dispatchEvent(openEvent);
          }
          setVoiceAgentActive(true);
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
        voiceAgentLoaded && !isMobile && "ring-2 ring-green-400/50",
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
          voiceAgentLoaded && (
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse border border-white/20" />
          )
        ) : (
          // Full sparkles + dot indicator for desktop
          <>
            <Sparkles className={cn(
              "h-3 w-3 absolute -top-1 -right-1 text-indigo-300 transition-opacity",
              voiceAgentLoaded ? "opacity-100 animate-pulse" : "opacity-0 group-hover:opacity-100"
            )} />
            {voiceAgentLoaded && (
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            )}
          </>
        )}
      </div>

      {/* Text only shown on desktop */}
      {!isMobile && (
        <span className="hidden sm:inline text-sm">
          {voiceAgentLoaded ? "Voice Active" : "AI Assistant"}
        </span>
      )}

      {/* Mobile tooltip-like text (optional) */}
      {isMobile && voiceAgentLoaded && (
        <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-green-400 whitespace-nowrap">
          Voice Active
        </span>
      )}
    </button>
  );
}
