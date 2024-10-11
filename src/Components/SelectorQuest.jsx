import { useState } from "react"
function SelectorQuest() {


  return (
    <>
      <div className="dark:mx-auto items-center flex flex-col">
        <p className="dark:h-auto dark:text-center dark:font-bold dark:text-[1.7em] order-0 dark:w-[100%] break-words">
          {question.qNum + ": " + question.qQuest}
        </p>
        <select id={question.qNum + "S"} name="select" defaultValue="Null">
          <option value="Null" disabled="" hidden="">
            {question.qPlaceholder}
          </option>
          {question.qChoices.map((choice) => {
            return (

              <option key={choice.id} value={choice.text.toString}>{choice.text}</option>

            )
          })
          }
        </select>
        <div className="dark:mx-[3em] dark:h-auto dark:w-auto">
          <button
            className="text-black bg-primary px-4 py-2 rounded-global flex items-center float-left dark:m-[1em] dark:bg-secondary-500"
            type="button">
            <span>Next Question</span>
          </button>
        </div>
      </div>
    </>
  )

}

export default SelectorQuest