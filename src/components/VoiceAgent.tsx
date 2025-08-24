import { useVoiceAgent } from "@/hooks/use-voice-agent";

// This component loads the voice agent globally
export function VoiceAgent() {
  useVoiceAgent();
  return null; // This component doesn't render anything
}
