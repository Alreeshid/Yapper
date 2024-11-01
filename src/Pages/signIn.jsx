import { LoginComponent } from "../Components/LoginComponent"
import { CreateUser } from "../Components/CreateUser"
import { useState } from "react"


function SignIn() {
    //if view = 1, return the createUser component. 
    //If instead it's 0, we assume they need to logins
    const [view, setView] = useState(0)

    function changeLoginType() {
        setView(!view)
    }


    return (
        <>
            <br></br>
            
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">

            {!view ?
                <>

                    <LoginComponent />
                    <button
                        onClick={changeLoginType}>Don't have an account? Create one now!</button>
                </>
                :
                <>
                    <CreateUser />
                    <button onClick={changeLoginType}>Already have an account? Click here to Login!</button>

                </>}

            </div>
    </>
    )
}


export default SignIn