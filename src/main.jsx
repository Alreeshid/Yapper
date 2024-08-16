import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Homepage from './Components/Homepage'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Homepage />
  </StrictMode>,
)
