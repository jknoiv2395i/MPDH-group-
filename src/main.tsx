import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { isBuilderEditor } from '@/lib/utils'

// Mark when inside Builder/Lovable editor for light, non-intrusive tweaks if needed
if (typeof window !== 'undefined' && isBuilderEditor()) {
  document.documentElement.classList.add('is-builder')
}

createRoot(document.getElementById("root")!).render(<App />);
