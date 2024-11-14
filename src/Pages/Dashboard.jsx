//user dashboard

/*Imports*/
import { useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import { getUser } from "../api"
import jwt_decode from "jsonwebtoken"
/*Variables*/


export default function Dashboard(){
    //this should only be accessible to users that are signed in, and then display the data for ONLY that user.

    /*Functions for this component only*/
    const nav = useNavigate()
    const [creations, setCreations] = useState([])
    const [user, setUser] = useState({})//object vs array

    useEffect(() =>{
        async function loadUserData(){
            //loads the user's creations and other info by decoding the auth token
            const token = sessionStorage.getItem("User")
            const decodedUser = jwt_decode(token)
        }
        loadUserData()
    })

    function BaseUserMSG(){
        //checks if the user is signed in first, displays an error if not.
        if(!sessionStorage.getItem("User")){
            nav("/Login")
        }
    }

    return(
    <>
        <h1>decodedUser</h1>
    </>
    )
}