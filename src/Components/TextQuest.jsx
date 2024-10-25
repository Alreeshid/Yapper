import { useState } from 'react';



function TextBox({ question }) {
  //variables go here
  //var location = window.location.pathname;
  //location = location.split("/").pop();
  //console.log("var location= " + location);

  return (
    <>
      {/*alert(question)*/}
      <div key={question.qNum} className="dark:mx-auto items-center flex flex-col" id={question.qId}>
        <p className="dark:h-auto dark:text-center dark:font-bold dark:text-[1.7em] order-0 dark:w-[100%] break-words">
          {question.qNum + ": " + question.qQuest}
        </p>
        <textarea
          id={"qResponse" + question.qNum}
          name="textarea"
          className="dark:h-auto dark:w-[100%]"
          placeholder={question.qPlaceholder}
          rows="1"></textarea>
        
      </div>
      <br></br>
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