import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Navbar from './Components/Navbar'
import Layout from './Components/Layout'

import Homepage from './Components/Homepage'
import '/src/Components/Styles/Common.css'

import { HashRouter as Router, Routes, Route } from "react-router-dom"
//Pages to route using Navbar/Buttons
import DemoPage from "./Pages/demo"
import About from './Pages/about'
import SignIn from './Pages/signIn'
import Contact from './Pages/contact'
//potential for the community page in the future, maybe only if logged in


//this file takes the various components for the homepage and then attaches them to the homepage.
// remember that <Router> represents <HashRouter>
//for paths that require ids, use /pathLoc:id - with pathLoc being th page, such as an individual post
createRoot(document.getElementById('root')).render(
  <Router>
    <Routes>
      <Route path="/" element={<Homepage />} />

      <Route element={<Layout />}>
        <Route path="/Demo" element={<DemoPage />} />
        <Route path="/About" element={<About />} />
        <Route path="/Login" element={<SignIn />} />
      </Route>

      <Route path='/DemoOutPut'></Route>


    </Routes>
  </Router>
)
