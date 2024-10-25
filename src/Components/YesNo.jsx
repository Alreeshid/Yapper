import { useState } from "react"
function YesNoBox({ question }) {


  return (
    <>
      <div id={question.qId} key={question.qNum} className="dark:mx-auto items-center flex flex-col">
        <p className=" dark:h-auto dark:text-center dark:font-bold dark:text-[1.7em] order-0 dark:w-[100%] break-words">
          {question.qNum + ": " + question.qQuest}
        </p>
        <div className="dark:m-[0%] dark:mx-[20px] dark:p-[5px] dark:w-[20%]">
          <div className="flex items-center w-max gap-x-2 float-left dark:mx-[20%]">
            <input className={question.qNum + "Y"} name="radioQ" id={question.qNum + "Y"} value={"Yes"} type="radio" />
            <label htmlFor={question.qNum + "Y"}>Yes</label>
          </div>
          <div className="flex items-center w-max gap-x-2 dark:mx-[20%]">
            <input className={question.qNum + "N"} name="radioQ" id={question.qNum + "N"} value={"No"} type="radio" />
            <label htmlFor={question.qNum + "Y"}>No</label>
          </div>
        </div>
        
      </div>
    </>
  )

}

export default YesNoBox