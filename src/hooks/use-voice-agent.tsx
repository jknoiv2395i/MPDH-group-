export function useVoiceAgent() {
  // Chatbot/widget disabled — no-op implementation to prevent injection of third-party widget
  // This ensures the chatbot UI/overlay is removed without removing components that reference the hook.
  const voiceAgentLoaded = false
  const activateVoiceAgent = () => {
    console.log('Voice agent is disabled in this build.')
    return false
  }

  return {
    voiceAgentLoaded,
    activateVoiceAgent,
  }
}
