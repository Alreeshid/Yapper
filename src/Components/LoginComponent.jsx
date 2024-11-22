import { verifyUser } from "../api/api"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
//axios makes calls for backed routes

export function LoginComponent() {
    const [user, setUser] = useState({
        email: "",
        password: "",
    })

    const navigate = useNavigate()

    async function handleSubmit(e) {
        e.preventDefault()
        let response = await verifyUser(user)//passes the created object that handleChange has been making
        //console.log(response)
        if (response) {
            sessionStorage.setItem("User", response)
            //next, set the response token to authenticate future axios requests
            axios.defaults.headers.common["Authorization"] = `Bearer ${response}`
            navigate("/") //replace with the Landing Page once it's made, and put it in the router
            location.reload()
        }
        else {
            alert("Login Failed")
        }
    }

    function handleChange(e) {
        setUser({ ...user, [e.target.name]: e.target.value })
        //requires each input name to be exactly the same as the schema above
    }


    return (
        <>
            
            <div className="flex flex-col max-w-md p-3 rounded-md sm:p-10 dark:bg-gray-50 dark:text-gray-800">
                <div className="mb-8 text-center">
                    <h1 className="my-3 text-4xl font-bold">Sign in</h1>
                    <p className="text-sm dark:text-gray-600">Sign in to access your account</p>
                </div>
                <form onSubmit={handleSubmit} className="space-y-12">
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm">Email address</label>
                            <input onChange={handleChange} required maxLength={40}
                            type="email" name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                        </div>
                        <div>
                            <div className="flex justify-between">
                                <label htmlFor="password" className="text-sm">Password</label>
                            </div>
                            <input onChange={handleChange} required maxLength={30} 
                             type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                             <a rel="noopener noreferrer" href="#" className="text-xs hover:underline dark:text-gray-600">Forgot password?</a>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div>
                            <button type="submit" className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50">Sign in</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}
