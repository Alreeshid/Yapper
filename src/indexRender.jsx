//import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Navbar from './Components/Navbar'
import LoggedNavbar from './Components/LoggedNavbar'
import Layout from './Components/Layout'

import Homepage from './Components/Homepage'
import '/src/Components/Styles/Common.css'

import { HashRouter as Router, Routes, Route } from "react-router-dom"
//Pages to route using Navbar/Buttons
import DemoPage from "./Pages/demo"
import DemoOutput from "./Pages/OutputDemo"
import About from './Pages/about'
import SignIn from './Pages/signIn'
import Contact from './Pages/contact'
import { useEffect } from 'react'
import axios from 'axios'
import Dashboard from './Pages/Dashboard'
import ComCreations from './Pages/UserPages/ComCreations'
import Creations from './Pages/UserPages/Creations'
import Settings from './Pages/UserPages/Settings'
import Blog from './Pages/UserPages/Blog'

//potential for the community page in the future, maybe only if logged in


//this file takes the various components for the homepage and then attaches them to the homepage.
// remember that <Router> represents <HashRouter>
//for paths that require ids, use /pathLoc:id - with pathLoc being th page, such as an individual post

//check if user Auth headers already exist on page load:
let home = <Homepage />
let navBar = <Navbar />
if(sessionStorage.getItem("User")){
  home = <Dashboard />

}

createRoot(document.getElementById('root')).render(
/*
  useEffect(() =>{
    let token = sessionStorage.getItem("User")
    if(token){
      axios.defaults.headers.common["authorization"] = `Bearer ${token}`
    }
  }, [])*/


  <Router>
    <Routes>
      
      <Route path="/" element={home} />

      <Route element={<Layout />}>
      {/* 
        This part of the router represents the actual pages that can be rendered - the navbar overlays on top 
        as its own element, while the Layout component is then filled in with whatever component it's been
        redirected to. Elements linked in the pageRouteData file are the only ones that are rendered on the
        navbar, meaning that elements can be added to this for secretive use.
                <Route path='/Dashboard' element={<Dashboard />}></Route>
       */}
        <Route path="/Demo" element={<DemoPage />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Login" element={<SignIn />} />
        <Route path='/DemoOutput' element={<DemoOutput />}></Route>
        <Route path='/AccountSettings' element={<Settings />}></Route>
        <Route path='/CommunityCreations' element={<ComCreations />}></Route>
        <Route path='/Creations' element={<Creations />}></Route>
        <Route path='/Blog' element={<Blog />}></Route>
      </Route>



    </Routes>
  </Router>
)
//      
//this will b eused later