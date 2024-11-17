import { LoginComponent } from "../Components/LoginComponent"
import { CreateUser } from "../Components/CreateUser"
import { useState } from "react"

import { Button } from "@/Components/ui/button"


function SignIn() {
    //if view = 1, return the createUser component. 
    //If instead it's 0, we assume they need to logins
    const [view, setView] = useState(0)

    function changeLoginType() {
        setView(!view)
    }


    return (
        <div
        className="flex justify-center items-center w-screen h-screen">
            <br></br>
            
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">

            {!view ?
                <div
                className="flex flex-col w-0.3"
                >

                    <LoginComponent />
                    <Button variant="outline"
                        onClick={changeLoginType}>Don't have an account? Create one now!
                    </Button>
                </div>
                :
                <div
                className="flex flex-col w-0.3"
                >
                    <CreateUser />
                    <Button
                    className=""
                    onClick={changeLoginType}>Already have an account? Click here to Login!
                    </Button>

                </div>}

            </div>
    </div>
    )
}


export default SignIn