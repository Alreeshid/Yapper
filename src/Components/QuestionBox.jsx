import { useState } from 'react';
/*
    The nav-bar component - will have different style options depending on the user and if
    said user is logged in.
*/

function QuestionBox() {
    //variables go here
    //var location = window.location.pathname;
    //location = location.split("/").pop();
    //console.log("var location= " + location);

    return(
        <>
        <div className="dark:mx-auto items-center flex flex-col">
        <p className="dark:h-auto dark:text-center dark:font-bold dark:text-[1.7em] order-0 dark:w-[100%]">
          Question Text
        </p>
        <input
          id="pbhmdb"
          name="input"
          className="dark:w-[70%] dark:m-auto dark:mx-auto dark:p-[4px] dark:h-[2em] dark:text-left dark:text-[1.3em] order-1"
          type="text"
          placeholder="Placeholder"
        />
      </div>
        </>
    )

    }

    export default QuestionBox
/* 
<div className="dark:mx-auto items-center flex flex-col">
        <p className="dark:h-auto dark:text-center dark:font-bold dark:text-[1.7em] order-0 dark:w-[100%]">
          Question Text
        </p>
        <input
          id="pbhmdb"
          name="input"
          className="dark:w-[70%] dark:m-auto dark:mx-auto dark:p-[4px] dark:h-[2em] dark:text-left dark:text-[1.3em] order-1"
          type="text"
          placeholder="Placeholder"
        />
      </div>

*/