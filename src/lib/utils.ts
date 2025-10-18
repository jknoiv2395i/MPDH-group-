import { twMerge } from "tailwind-merge"
import clsx, { ClassValue } from "clsx"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Detect if the app is being viewed inside Builder editor/preview.
// This is a best-effort check based on URL contents. It is safe to call
// during client-side rendering and returns false on the server.
export function isBuilderEditor(): boolean {
  if (typeof window === "undefined") return false
  try {
    const href = window.location.href.toLowerCase()
    const host = window.location.host.toLowerCase()
    const search = window.location.search.toLowerCase()

    // Only treat as Builder editor when URL explicitly indicates Builder context
    return (
      host.includes("builder.io") ||
      href.includes("builder.io") ||
      search.includes("builder") ||
      search.includes("builder_preview") ||
      search.includes("builder-editor") ||
      href.includes("builder-preview")
    )
  } catch (e) {
    return false
  }
}
