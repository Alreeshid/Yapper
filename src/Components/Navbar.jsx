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
        <>
              <nav className="bg-white shadow dark:bg-gray-800 w-screen">
        <div className="container mx-auto flex items-center justify-center p-6 capitalize text-gray-600 dark:text-gray-300 xl:px-[40px]">
          <a
            href="#"
            className="hover:border-primary-500 mx-1.5 transform border-b-2 border-transparent transition-colors duration-300 hover:text-gray-800 sm:mx-6 dark:hover:text-gray-200 m-0">
            <span className="mr-[25%] w-24px h-24px h-4 w-4 fill-current xl:mr-[25%]">
              
            </span>
          </a>
          {pageData.map((page) => {
                    return(
                        <>
                            <Link to={page.path} className = "hover:border-primary-500 mx-1.5 transform border-b-2 text-gray-800 transition-colors duration-300 sm:mx-6 dark:text-gray-200">
                                <button> {page.name} </button>
                            </Link>
                        </>
                    )
                })}
          
        </div>
      </nav>

        </>
    )

    }

    export default Navbar
