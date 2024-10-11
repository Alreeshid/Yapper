import { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client'

import Navbar from '../Components/Navbar';
import TextBox from '../Components/TextQuest';
import YesNoBox from '../Components/YesNo';
import SelectorQuest from '../Components/SelectorQuest';

import { shortList } from '../Components/DataLists/ShortCharacterQuest';
//import { defer } from 'react-router';



function DemoPage() {

  //const [saving, setSaving] = useState(false);

  //questType = "short";
  //other types = "inter" and "long"
  /* let children = document.querySelectorAll(".mightHide")
  let quizButtons = document.querySelectorAll(".questChoice")
  quizButtons.forEach(button =>{
    button.addEventListener("click", function(){
      children.forEach(child => {
        if (child.id === "1") {
          child.classList.toggle("mightHide", false) //hides all but the first
        }
    
      })
    })
  }) */

  let userTemplate = shortList
  const [quiz, setQuiz] = useState(0);
  const [questNum, setQuestNum] = useState(0);//handles the question the user is on
  let userInfo = [{}];//saves user's answers, ideally in cache

  let questNumList = []

  function handleQuizSelection(e){
    //passes the type of quiz selectd by the user - now must set state
    //short, inter, or long
    console.log(e + " quiz selected")
    setQuiz(e)
    setQuestNum(1)
    document.getElementById("1").classList.toggle("mightHide", false)
  }

  function handleNextQuestion(){
    /* if(quiz == "short"){
      //alert(shortList[questNum].qNum)
      if(shortList[questNum].qNumFollowUp > 0){
        //check if user put an answer that would require a followup
        if(shortList[questNum].qType == "yesNo"){
          //checks if the value of the selected button is equal to qResponse
          let button = document.getElementById(questNum).querySelector("input[type=radio]:checked").value
          alert(button)
          if(button == shortList[questNum].qResponse){
            alert("YES!")
            setQuestNum(shortList[questNum].qId)
          }
          else{
            //means should skip the questions
            setQuestNum(questNum+shortList[questNum].qNumFollowUp)
          }
        }
        else if(shortList[questNum].qType == "choice"){
          //checks if the returned value matches qResponse
          if(document.getElementById(shortList[questNum])){
            setQuestNum(shortList[questNum].qId)
          }
          else{
            //means should skip the questions
            setQuestNum(questNum+shortList[questNum].qNumFollowUp)
          }
        }
        
      }
      else{
        //no followups
        console.log(questNum)
        setQuestNum(shortList[questNum].qId)
      } */
      setQuestNum(shortList[questNum].qId)
      //setQuestNum(shortList[questNum].qId)
      document.getElementById(questNum).classList.toggle("mightHide", false)
      //alert(shortList[questNum].qId)
    
    
  }
  function CacheResponses(qNum, qValue){
    //takes user input onchange, and appends it to an array variable that grabs from cache as needed
    // https://blog.logrocket.com/using-localstorage-react-hooks/ 
    document.querySelectorAll("type=[input]")

  }

  return (
    <><br></br>
      <h2 className="text-3xl dark:text-center dark:h-auto dark:my-[12px] dark:text-[2.6em] text-center"  >
        In this Demo, You'll make a character using Yapper
      </h2>
      <div className="overflow-x-auto whitespace-nowrap dark:text-center dark:mx-auto">
        <button onClick={() =>{handleQuizSelection("short")}} id="shortChoice" className=
          "questChoose inline-flex h-12 items-center whitespace-nowrap rounded-t-md border border-b-0 border-gray-300 px-4 py-2 text-center text-sm text-gray-700 focus:outline-none sm:text-base dark:border-gray-500 dark:text-black" type="button">
          <span >Short(~15 Questions)</span></button>
        <button onClick={() =>{handleQuizSelection("inter")}} id="medChoice"
          className="questChoose cursor-base inline-flex h-12 items-center whitespace-nowrap border-b border-gray-300 bg-transparent px-4 py-2 text-center text-sm text-gray-700 hover:border-gray-400 focus:outline-none sm:text-base dark:border-gray-500 dark:text-black dark:hover:border-gray-300" type="button">
          <span >Medium(~20 Questions)</span></button>
        <button onClick={() =>{handleQuizSelection("long")}} id="longChoice"
          className="questChoose cursor-base inline-flex h-12 items-center whitespace-nowrap border-b border-gray-300 bg-transparent px-4 py-2 text-center text-sm text-gray-700 hover:border-gray-400 focus:outline-none sm:text-base dark:border-gray-500 dark:text-black dark:hover:border-gray-300" type="button">
          <span >Long(~30 questions)</span></button>
      </div><div className="max-w-full"><div   ><p>
        Select the number of questions you want - depending on how In-Depth you'd like to make your character!</p>
      </div></div><hr className="bg-gray-900 h-0.5 py-2 my-1" />

      <form method="post" action="/api/form/submit"
        className="dark:h-auto dark:w-[82%] dark:mx-auto"><div  >
        </div><input name="demoCharacter" type="hidden" value="Form" />
        <br></br>

        {shortList.map((question) => {
          //questNumList += {question}
          let count = 1;
          if(count+1 == shortList.length){
            alert("End of questionnaire")
          }
          else if (question.qType === "text") {
            return (
              <>
                <div key={question.qNum} className="mightHide dark:mx-auto items-center flex flex-col" id={question.qId}>
                  <p className="dark:h-auto dark:text-center dark:font-bold dark:text-[1.7em] order-0 dark:w-[100%] break-words">
                    {question.qNum + ": " + question.qQuest}
                  </p>
                  <textarea
                    id={"qResponse" + question.qNum}
                    name="textarea"
                    className="dark:h-auto dark:w-[100%]"
                    placeholder={question.qPlaceholder}
                    rows="1"></textarea>
                  <div className="dark:mx-[3em] dark:h-auto dark:w-auto">
                    <button
                      className="nextQuest text-black bg-green-400 px-4 py-2 rounded-global flex items-center float-left dark:m-[1em] dark:bg-secondary-500"
                      type="button"
                      onClick={handleNextQuestion}>
                      <br></br>
                      <span>Next Question</span>
                    </button>
                    <button
                      className=" text-white bg-black px-4 py-2 rounded-global flex items-center float-right dark:p-[0.5em] dark:m-[1em] dark:bg-orange-500"
                      type="button" >
                      <span>AI Autofill</span>
                    </button>
                  </div>
                </div>
                <br></br>

              </>
            )
          }
          else if (question.qType === "yesNo") {
            return (
              <>
                <div id={question.qId} key={question.qNum} className="mightHide dark:mx-auto items-center flex flex-col">
                  <p className=" dark:h-auto dark:text-center dark:font-bold dark:text-[1.7em] order-0 dark:w-[100%] break-words">
                    {question.qNum + ": " + question.qQuest}
                  </p>
                  <div className="dark:m-[0%] dark:mx-[20px] dark:p-[5px] dark:w-[20%]">
                    <div className="flex items-center w-max gap-x-2 float-left dark:mx-[20%]">
                      <input className={question.qNum + "Y"} name="radioQ" id={question.qNum + "Y"} value={"Yes"} type="radio" />
                      <label htmlFor={question.qNum + "Y"}>Yes</label>
                    </div>
                    <div className="flex items-center w-max gap-x-2 dark:mx-[20%]">
                      <input className={question.qNum + "N"} name="radioQ" id={question.qNum + "Y"} value={"No"} type="radio" />
                      <label htmlFor={question.qNum + "Y"}>No</label>
                    </div>
                  </div>
                  <div className="dark:mx-[3em] dark:h-auto dark:w-auto">
                    <button
                      className="nextQuest text-black bg-green-400 px-4 py-2 rounded-global flex items-center float-left dark:m-[1em] dark:bg-secondary-500"
                      type="button"
                      onClick={handleNextQuestion}>
                      <span>Next Question</span>
                    </button>
                  </div>
                </div>
              </>
            )
          }
          else if (question.qType === "choice") {
            //tricky, needs to have a followup loop
            return (
              <>
                <div id={question.qId} key={question.qNum} className="mightHide dark:mx-auto items-center flex flex-col">
                  <p className="dark:h-auto dark:text-center dark:font-bold dark:text-[1.7em] order-0 dark:w-[100%] break-words">
                    {question.qNum + ": " + question.qQuest}
                  </p>
                  <select id={question.qNum + "S"} name="select" defaultValue="Null">
                    <option value="Null" disabled="" hidden="">
                      {question.qPlaceholder}
                    </option>
                    {question.qChoices.map((choice) => {
                      if(question.qResponse == choice){
                        return ( 
                          <option id={question.qResponse} key={choice.id} value={choice.text.toString}>{choice.text}</option>
                        )
                      }
                      else{
                      return ( 
                        <option key={choice.id} value={choice.text.toString}>{choice.text}</option>
                      )
                    }
                    })}
                  </select>
                  <div className="dark:mx-[3em] dark:h-auto dark:w-auto">
                    <button
                      className="nextQuest text-black bg-green-400 px-4 py-2 rounded-global flex items-center float-left dark:m-[1em] dark:bg-secondary-500"
                      type="button"
                      onClick={handleNextQuestion}>
                      <span>Next Question</span>
                    </button>
                  </div>
                </div>
              </>
            )
          }
          count++
        })}

      </form></>
    //{document.addEventListener('load')}


  );

}

export default DemoPage