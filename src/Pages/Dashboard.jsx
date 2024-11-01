//user dashboard

/*Imports*/
import { useNavigate } from "react-router-dom"

/*Variables*/
const nav = useNavigate()


export default function Dashboard(){
    //this should only be accessible to users that are signed in, and then display the data for ONLY that user.

    /*Functions for this component only*/

    function BaseUserMSG(){
        //checks if the user is signed in first, displays an error if not.
        if(!sessionStorage.getItem("User")){
            nav("/LogIn")
        }
    }

    return(<>
    
    </>)
}