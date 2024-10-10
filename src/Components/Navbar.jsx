import { useState } from 'react';
import { Link } from 'react-router-dom';
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
                    
            </div>
    )

    }

    export default Navbar
