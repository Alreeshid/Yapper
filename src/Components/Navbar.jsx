import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { pageData } from './DataLists/PageRouteData';
/*
    The nav-bar component - will have different style options depending on the user and if
    said user is logged in.
*/

function Navbar() {
    //variables go here
    //var location = window.location.pathname;
    //location = location.split("/").pop();
    //console.log("var location= " + location);
    const navigate = useNavigate()
    function HandleLogout(){
        sessionStorage.removeItem("User")
        navigate("/")
    }

    return(
            <div className="navBar">
                <img className='navLogo'></img>
                {pageData.map((page) => {
                    return(
                        <>
                            <Link to={page.path} className = "navItem">
                                <button> {page.name} </button>
                            </Link>
                        </>
                    )
                })}
                <button onClick={HandleLogout} className = "navItem">Log Out</button>
                    
            </div>
    )

    }

    export default Navbar
