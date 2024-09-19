import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Navbar from './Components/Navbar'
import Homepage from './Components/Homepage'
import '/src/Components/Styles/Homepage.css'
import '/src/Components/Styles/Common.css'



//this file takes the various components for the homepage and then attaches them to the homepage.
//
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <br></br>
    <Homepage />
  </StrictMode>,
)
