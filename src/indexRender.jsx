import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Homepage from './Components/Homepage'
import Navbar from './Components/Navbar'
import '/src/Components/Styles/Homepage.css'
import '/src/Components/Styles/Common.css'

//this file takes the various components for the homepage and then attaches them to the homepage.
//
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <Homepage />
  </StrictMode>,
)