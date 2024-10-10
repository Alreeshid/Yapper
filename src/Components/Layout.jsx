import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

function Layout() 
{
    //This function should represent the skeleton of the site per the tutorial, may be unnecessary
    return(
        <>
        <Navbar />
        <Outlet />
        </>
    )
}

export default Layout