import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import BBC from './BBC.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BBC />
  </StrictMode>,
)
