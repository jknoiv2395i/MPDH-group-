import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { isBuilderEditor } from '@/lib/utils'

// When inside Builder editor/preview (iframe), disable pointer events on fixed overlays
if (typeof window !== 'undefined' && isBuilderEditor()) {
  const style = document.createElement('style')
  style.id = 'builder-editor-overlays'
  style.innerHTML = `
    /* Disable pointer events for fixed-position overlays so builder controls can be used */
    html.is-builder .fixed { pointer-events: none !important; }
    html.is-builder [style*="position:fixed"] { pointer-events: none !important; }
    /* Allow interactions on main content sections */
    html.is-builder main, html.is-builder section, html.is-builder header, html.is-builder nav { pointer-events: auto !important; }
  `
  document.head.appendChild(style)
  document.documentElement.classList.add('is-builder')
}

createRoot(document.getElementById("root")!).render(<App />);
