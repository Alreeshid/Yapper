import { verifyUser } from "../api"
import { useState } from "react"
import { useNavigate } from "react-router-dom"


export function LoginComponent() {
    const [user, setUser] = useState({
        email: "",
        password: "",
    })
    
    const navigate = useNavigate()

    async function handleSubmit(e){
        e.preventDefault()
        let response = await verifyUser(user)//passes the created object that handleChange has been making
        //console.log(response)
        if(response){
            sessionStorage.setItem("User", response)
            navigate("/Home") //replace with the Landing Page once it's made, and put it in the router
        }
        else{
            alert("Login Failed")
        }
    }

    function handleChange(e){
        setUser({...user, [e.target.name]: e.target.value })
        //requires each input name to be exactly the same as the schema above
    }


    return(
        <>
        <form onSubmit={handleSubmit} className="w-auto m-auto place-self-center">
            <input name={"email"} placeholder={"Enter Your Email Address"} onChange={handleChange} required maxLength={40}/>
            <br></br>
            <input name={"password"} placeholder={"Password"} onChange={handleChange} required type="password" maxLength={30}/>

            <br></br>
            <button className="bg-slate-500"
             type="submit">Login</button>
        </form>
        </>
    )
}
