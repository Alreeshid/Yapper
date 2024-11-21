import { LoginComponent } from "../Components/LoginComponent"
import { CreateUser } from "../Components/CreateUser"
import { useState } from "react"
//import LoggedNavbar from "@/Components/LoggedNavbar"



function SignIn() {
    //if view = 1, return the createUser component. 
    //If instead it's 0, we assume they need to logins
    const [view, setView] = useState(0)

    function changeLoginType() {
        setView(!view)
    }


    return (
        
        <div
        className="flex m-auto justify-center items-center w-screen h-screen">
            <br></br>
            
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">

            {!view ?
                <div
                className="flex flex-col w-0.3"
                >

                    <LoginComponent />
                    <button className="px-6 text-sm text-center dark:text-gray-600"
                        onClick={changeLoginType}>Don't have an account? Create one now!
                    </button>
                </div>
                :
                <div
                className="flex flex-col w-0.3"
                >
                    <CreateUser />
                    <button
                    className="px-6 text-sm text-center dark:text-gray-600"
                    onClick={changeLoginType}>Already have an account? Click here to Login!
                    </button>

                </div>}

            </div>
    </div>
    )
}


export default SignIn