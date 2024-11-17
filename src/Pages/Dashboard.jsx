//user dashboard
/*Imports*/
import { useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import { getUser } from "../api"
import * as jwtdecode from "jwt-decode"

export default function Dashboard(){
    //this should only be accessible to users that are signed in, and then display the data for ONLY that user.

    /*Functions for this component only*/
    const nav = useNavigate()
    const [creations, setCreations] = useState([])
    const [user, setUser] = useState({})//object vs array
    const jwt_decode = jwtdecode.jwtDecode

    useEffect(() =>{
        async function loadUserData(){
            //loads the user's creations and other info by decoding the auth token
            const token = sessionStorage.getItem("User")
            const decodedUser = jwt_decode(token)
            console.log(JSON.stringify(decodedUser))
            setUser(decodedUser)
            //const allCreations = await getAllCreations
            // const filtered posts = allCreations.filter() //ep 10 29:55
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
        <h1>Welcome {user.userName}</h1>
    </>
    )
}