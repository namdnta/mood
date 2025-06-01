import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import MoodApp from './Components/MoodApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MoodApp />
  </StrictMode>,
)
