import { createUser } from "../api"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export function CreateUser() {
    const [user, setUser] = useState({
        userName: "",
        email: "",
        password: "",
    })
    const navigate = useNavigate()
    async function handleSubmit(e) {
        e.preventDefault()
        let response = await createUser(user)//passes the created object that handleChange has been making
        //alert(JSON.stringify(response))
        if (response.acknowledged != true) {
            alert("User account could not be created, Error: " + JSON.stringify(response))
        }
        else {
            alert("Your account has been created!")
            navigate("/")
        }
    }

    function handleChange(e) {
        setUser({ ...user, [e.target.name]: e.target.value })
        //requires each input name to be exactly the same as the schema above
    }


    return (
        <>
            
            <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 dark:bg-gray-50 dark:text-gray-800">
                <div className="mb-8 text-center">
                    <h1 className="my-3 text-4xl font-bold">Create an Account</h1>
                    <p className="text-sm dark:text-gray-600">Create an account with the following credentials</p>
                </div>
                <form onSubmit={handleSubmit} className="space-y-12">
                    <div className="space-y-3">
                        <div>
                            <label htmlFor="userName" className="block mb-2 text-sm">Username</label>
                            <input onChange={handleChange} required maxLength={40}
                                name="userName" id="userName" placeholder="Jacobi" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                        </div>
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm">Email address</label>
                            <input onChange={handleChange} required maxLength={40}
                                type="email" name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                        </div>
                        <div>
                            <div className="flex justify-between mb-2">
                                <label htmlFor="password" className="text-sm">Password</label>
                            </div>
                            <input onChange={handleChange} required maxLength={30}
                                type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div>
                            <button type="submit" className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50">Sign Up</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}