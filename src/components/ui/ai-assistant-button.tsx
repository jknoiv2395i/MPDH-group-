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

        // Add event listeners for widget state changes
        const handleWidgetOpen = () => {
          setVoiceAgentActive(true);
        };

        const handleWidgetClose = () => {
          setVoiceAgentActive(false);
        };

        // Listen for custom events that the widget might dispatch
        document.addEventListener('elevenlabs-convai-open', handleWidgetOpen);
        document.addEventListener('elevenlabs-convai-close', handleWidgetClose);

        // Also listen for any changes to the widget's visibility/display
        const stateObserver = new MutationObserver(() => {
          // Check if widget is visible/active
          const isVisible = widget.style.display !== 'none' &&
                           widget.style.visibility !== 'hidden' &&
                           widget.offsetParent !== null;

          // If widget becomes hidden, update our state
          if (!isVisible && voiceAgentActive) {
            setVoiceAgentActive(false);
          }
        });

        stateObserver.observe(widget, {
          attributes: true,
          attributeFilter: ['style', 'class']
        });

        // Cleanup function for event listeners
        return () => {
          document.removeEventListener('elevenlabs-convai-open', handleWidgetOpen);
          document.removeEventListener('elevenlabs-convai-close', handleWidgetClose);
          stateObserver.disconnect();
        };
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

    // Poll voice agent state every second to keep our state in sync
    const statePolling = setInterval(() => {
      const widget = document.querySelector('elevenlabs-convai') as any;
      if (widget && voiceAgentLoaded) {
        // Check if widget is actually visible and active
        const isVisible = widget.style.display !== 'none' &&
                         widget.style.visibility !== 'hidden' &&
                         widget.offsetParent !== null;

        // Check for common indicators that the widget might be active
        const hasActiveClass = widget.classList.contains('active') ||
                              widget.classList.contains('open') ||
                              widget.classList.contains('visible');

        const hasActiveAttribute = widget.hasAttribute('open') ||
                                  widget.getAttribute('aria-expanded') === 'true';

        // Try to detect if the widget's internal state indicates it's active
        const isActive = isVisible || hasActiveClass || hasActiveAttribute;

        // Update our state if it doesn't match
        if (isActive !== voiceAgentActive) {
          setVoiceAgentActive(isActive);
        }
      }
    }, 1000);

    return () => {
      clearTimeout(loadTimeout);
      clearTimeout(observerTimeout);
      clearInterval(periodicCleanup);
      clearInterval(statePolling);
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
          if (isVisible !== voiceAgentActive) {
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
