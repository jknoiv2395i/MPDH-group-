import { twMerge } from "tailwind-merge"
import clsx, { ClassValue } from "clsx"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Detect if the app is being viewed inside a visual editor/preview (Lovable/Builder).
// Best-effort, safe to call on client; returns false on server.
export function isBuilderEditor(): boolean {
  if (typeof window === "undefined") return false
  try {
    const href = window.location.href.toLowerCase()
    const host = window.location.host.toLowerCase()
    const search = window.location.search.toLowerCase()
    const referrer = (document.referrer || "").toLowerCase()

    // Heuristics: URL or query indicates Builder/Lovable editor
    const editorUrlMatch =
      host.includes("builder.io") ||
      href.includes("builder.io") ||
      search.includes("builder") ||
      search.includes("builder_preview") ||
      search.includes("builder-editor") ||
      href.includes("builder-preview") ||
      host.includes("lovable") ||
      href.includes("lovable") ||
      search.includes("lovable") ||
      referrer.includes("builder.io") ||
      referrer.includes("lovable")

    // Heuristic: running inside an iframe (visual editors embed the app)
    const inIframe = (() => {
      try { return window.self !== window.top } catch { return true }
    })()

    return editorUrlMatch || inIframe
  } catch {
    return false
  }
}
