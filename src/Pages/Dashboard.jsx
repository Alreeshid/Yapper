//user dashboard
/*Imports*/
import { useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import { getUser } from "../api"
import * as jwtdecode from "jwt-decode"
import Sidebar from "@/Components/Sidebar"
import Changelog from "@/Components/Changelog"

import { shortList } from "@/Components/DataLists/ShortCharacterQuest"
import { CreateQuest } from "../api"

export default function Dashboard() {
    //this should only be accessible to users that are signed in, and then display the data for ONLY that user.

    /*Functions for this component only*/
    const nav = useNavigate()
    const [creations, setCreations] = useState([])
    const [user, setUser] = useState({})//object vs array
    const jwt_decode = jwtdecode.jwtDecode

    useEffect(() => {
        async function loadUserData() {
            //loads the user's creations and other info by decoding the auth token
            const token = sessionStorage.getItem("User")
            const decodedUser = jwt_decode(token)
            //alert(JSON.stringify(decodedUser))
            setUserData(decodedUser)
            //const allCreations = await getAllCreations
            // const filtered posts = allCreations.filter() //ep 10 29:55
        }
        loadUserData()
    }, []) //this empty array is important, as it prevents the function from looping infinitely

    function setUserData(userData) {
        setUser(userData)
    }

    const obj = {
        author: "Alec B.",
        questLength: 12-15,
        questType: "Character Creation",
        dateCreated: new Date(),
        questList: shortList,
        title: "Character Creation Questionnaire"
    }
    async function submit(){
        //should push the questionnaire to the DB
        let response = await CreateQuest(obj)
        console.log(JSON.stringify(response))
    }


    return (
        <>
            <Sidebar user={user} />
            <div id="dashContent" className="m-auto text-center h-max">
                <section className="py-6 h-auto">
                    <div className="container mx-auto flex flex-col items-center justify-center p-4 space-y-8 md:p-10 lg:space-y-0  lg:justify-between">
                        <h1 className="text-3xl font-semibold leading-tight text-center lg:text-left">Welcome back {user.userName}, ready to get writing?</h1><br></br>
                        <button className="px-8 py-3 text-lg font-semibold h-max rounded bg-violet-600 text-gray-300">Start Now</button>
                    </div>
                </section>
                
                <br></br><hr></hr>
                <Changelog />
            </div>
        </>
    )
}