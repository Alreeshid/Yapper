//require("dotenv").config({path: ".../backend/config.env"})
import Navbar from "./Navbar";
import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Layout() 
{
    //This function should represent the skeleton of the site per the tutorial, may be unnecessary
/*
    To Do: Check if there is an Admin session token that matches the ENV key (need to make), 
        and redirect them to the cms if so.
*/
    const navigate = useNavigate()
    let user = sessionStorage.getItem("User")
    useEffect(() =>{
        if(!user){
            console.log("Oops!")
            navigate("/Login")
        }
    }, [user])

    if(sessionStorage.getItem("AdminKey")){
        //next, check if the key matches the value it should
    }
    else{
        //a admin key was not found or was invalid
        return(
            <>
            <Navbar />
            <Outlet />
            </>
        )
}
}

export default Layout