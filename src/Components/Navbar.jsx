import { useState } from 'react';
import '/src/Components/Styles/Common.css'
import '/src/Components/Styles/Navbar.css'
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
        <>
            <ul className={ Navbar.hNav}>
                <li className={Navbar.hNavButton}>
                    Button 1   
                </li>
            </ul>
        </>
    )

    }

    export default Navbar
