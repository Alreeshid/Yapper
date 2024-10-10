import { useState } from 'react';


function TextBox() {
    //variables go here
    //var location = window.location.pathname;
    //location = location.split("/").pop();
    //console.log("var location= " + location);

    return(
      <>
      <div className="dark:mx-auto items-center flex flex-col">
        <p className="dark:h-auto dark:text-center dark:font-bold dark:text-[1.7em] order-0 dark:w-[100%] break-words">
          Question
        </p>
        <textarea
          id="xsCxgC"
          name="textarea"
          className="dark:h-auto dark:w-[100%]"
          placeholder="Placeholder"
          rows="1"></textarea>
        <div className="dark:mx-[3em] dark:h-auto dark:w-auto">
          <button
            className="text-white bg-primary px-4 py-2 rounded-global flex items-center float-left dark:m-[1em] dark:bg-secondary-500"
            type="button">
            <span>Next Question</span>
          </button>
          <button
            className="text-white bg-primary px-4 py-2 rounded-global flex items-center float-right dark:p-[0.5em] dark:m-[1em] dark:bg-orange-500"
            type="button">
            <span>AI Autofill</span>
          </button>
        </div>
      </div>
    </>
    )

    }

    export default TextBox
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