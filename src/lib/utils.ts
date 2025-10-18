import { twMerge } from "tailwind-merge"

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
    const search = window.location.search.toLowerCase()
    return (
      href.includes("builder") ||
      href.includes("editor") ||
      href.includes("preview") ||
      search.includes("builder") ||
      search.includes("editor") ||
      search.includes("preview")
    )
  } catch (e) {
    return false
  }
}
