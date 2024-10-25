import { useState } from "react"
function SelectorQuest({ question }) {

  let selector = "";

  return (
    <>
<div id={question.qId} key={question.qNum} className="dark:mx-auto items-center flex flex-col">
                  <p className="dark:h-auto dark:text-center dark:font-bold dark:text-[1.7em] order-0 dark:w-[100%] break-words">
                    {question.qNum + ": " + question.qQuest}
                  </p>
                  <select onChange={function(e){
                    selector=e.target.value
                    document.getElementById(question.qNum+"Selected").innerHTML = selector
                  }}
                  id={question.qNum + "S"} name={selector} defaultValue="Null">
                    <option value="Null" disabled="" hidden="">
                      {question.qPlaceholder}
                    </option>
                    {question.qChoices.map((choice) => {
                      if(question.qResponse == choice){
                        return ( 
                          <option id={question.qResponse} key={choice.id} value={choice.text}>{choice.text}</option>
                        )
                      }
                      else{
                      return ( 
                        <option key={choice.id} value={choice.text}>{choice.text}</option>
                      )
                    }
                    })}
                  </select>
                  <div id={question.qNum+"Selected"} style={{opacity: 0}}></div>
                  
                </div>
    </>
  )

}

export default SelectorQuest