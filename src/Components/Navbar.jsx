import { useState } from 'react';
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
        <header className='navContainer'>
            <nav>
                <img className='navLogo'></img>
                <ul>
                    <li className=''><a href='./index.html'>Home</a></li>
                    <li className=''><a href='.\src\Components\demo.jsx'>Try a Demo</a></li>
                </ul>
            </nav>
            <br></br>
        </header>
    )

    }

    export default Navbar
