import { createUser } from "../api"
import { useState } from "react"

export function CreateUser() {
    const [user, setUser] = useState({
        userName: "",
        email: "",
        password: "",
    })
    async function handleSubmit(e){
        e.preventDefault()
        let response = await createUser(user)//passes the created object that handleChange has been making
        console.log(response)
        if(response.status !== 201){
            alert("User account could not be created, Error: " + response.message)
        }
    }

    function handleChange(e){
        setUser({...user, [e.target.name]: e.target.value })
        //requires each input name to be exactly the same as the schema above
    }


    return(
        <>
        <form onSubmit={handleSubmit} className="w-auto m-auto place-self-center">
            <input name={"userName"} placeholder={"Username"} onChange={handleChange} required maxLength={20}/>
            <br></br>
            <input name={"email"} placeholder={"Email Address"} onChange={handleChange} required maxLength={40}/>
            <br></br>
            <input name={"password"} placeholder={"Password"} onChange={handleChange} required type="password" maxLength={30}/>

            <br></br>
            <button className="bg-slate-500"
             type="submit">Create Account!</button>
        </form>
        </>
    )
}