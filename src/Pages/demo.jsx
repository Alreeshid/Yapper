import { useState, useEffect } from 'react';

import Navbar from '../Components/Navbar';
import TextQuest from '../Components/TextQuest';
import YesNoQuest from '../Components/YesNo';
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

  const [quiz, setQuiz] = useState(0);
  const [questions, setQuestions] = useState([]);//array of question components
  const [questionData, setQuestionData] = useState([{
    Question: 0,
    Answer: "Test"
  }])// array of actual question data that will be exported to a new page when done
  //doesn't want to work, so modifying it here:
  let userInput = [{qNum: 0, Answer: "Testing!"}]
  let questList = []//selected questionnaire

  //const [tempData, setTempData] = useState([])//duplicates of questions to save progress when re-rendering

  let count = 0; //actual question number
  let isOver = false; //is the quiz at its end
  

  //let questNumList = []

  function handleQuizSelection(e) {
    //passes the type of quiz selectd by the user - now must set state
    //short, inter, or long
    console.log(e + " quiz selected")
    //console.log(shortList[0])

    setQuiz(e)
    if(e == "short"){setQuestions([<TextQuest question={shortList[0]}/>, <NextButton />])
      questList = shortList
    }
      else if(e.name == "inter"){}
      else if(e.name == "long"){}
    
    //alert(JSON.stringify(questions[0]))
    count = 1;
  }

  function NextButton(){
    return (
      <>
        <div className="dark:mx-[3em] dark:h-auto dark:w-auto">
            <button
              className="nextQuest text-black bg-green-600 px-4 py-2 rounded-global flex items-center float-left dark:m-[1em]"
              type="button"
              onClick={handleNextQuestion}>
              <br></br>
              <span>Next Question</span>
            </button>
            <button
              className="AIButton text-white bg-black px-4 py-2 rounded-global flex items-center float-right dark:p-[0.5em] dark:m-[1em] dark:bg-orange-500"
              type="button" >
              <span>AI Autofill</span>
            </button>
          </div>
      </>
    )
  }
  function EndOfQuizButton(){
      return (
        <>
          <div className="dark:mx-[3em] dark:h-auto dark:w-auto">
              <button
                className="nextQuest text-black bg-red-400 px-4 py-2 rounded-global flex items-center float-left dark:m-[1em] dark:bg-secondary-500"
                type="button"
                onClick={handleNextQuestion}>
                <br></br>
                <span>End Questionnaire</span>
              </button>
            </div>
        </>
      )
    }
  


  function handleNextQuestion() {
    /*
      First, check if the last question has been reached, then display an 
      end quiz button or continue with the next question
      User answers should be saves in each question's qResponse variable.
    */ 

    //check if dropdown selector: confirmed working
    if(questList[count-1].qType == "choice"){
      answer = document.getElementById(count +"Selected").innerText
    } 
    else if(questList[count-1].qType == "yesNo"){
      if(document.getElementById(count+"N").checked)
        answer = document.getElementById(count+"N").value
      else if(document.getElementById(count+"Y").checked)
        answer = document.getElementById(count+"Y").value
      else
        answer = "Chose not to Answer"
    }
    
    else{ var answer = document.getElementById("qResponse" + count).value}
    //console.log("Response: " + answer)

    //has a weird bud, can't find the actual output this makes
    userInput = userInput.concat({qNum: count, Answer: answer})
    
    console.log(count)
    console.log(userInput[count].Answer)
    if(questList[count].qType == "text"){
      setQuestions(
        [
          <>
          {...questions}
          <TextQuest question={questList[count]}/>
          <NextButton />
          </>
        ]
      )
    }
    else if(questList[count].qType == "choice"){
      setQuestions(
        [
          <>
          {...questions}
          <SelectorQuest question={questList[count]}/>,
          <NextButton />
          </>
        ]
      )
    }
    else if(questList[count].qType == "yesNo"){
      setQuestions(
        [
          <>
          {...questions}
          <YesNoQuest question={questList[count]}/>,
          <NextButton />
          </>
        ]
      )
    }
    
    
    count++
  }

  function CacheResponses(qNum, qValue) {
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
        <button onClick={() => { handleQuizSelection("short") }} id="shortChoice" className=
          "questChoose inline-flex h-12 items-center whitespace-nowrap rounded-t-md border border-b-0 border-gray-300 px-4 py-2 text-center text-sm text-gray-700 focus:outline-none sm:text-base dark:border-gray-500 dark:text-black" type="button">
          <span >Short(~15 Questions)</span></button>
        <button onClick={() => { handleQuizSelection("inter") }} id="medChoice"
          className="questChoose cursor-base inline-flex h-12 items-center whitespace-nowrap border-b border-gray-300 bg-transparent px-4 py-2 text-center text-sm text-gray-700 hover:border-gray-400 focus:outline-none sm:text-base dark:border-gray-500 dark:text-black dark:hover:border-gray-300" type="button">
          <span >Medium(~20 Questions)</span></button>
        <button onClick={() => { handleQuizSelection("long") }} id="longChoice"
          className="questChoose cursor-base inline-flex h-12 items-center whitespace-nowrap border-b border-gray-300 bg-transparent px-4 py-2 text-center text-sm text-gray-700 hover:border-gray-400 focus:outline-none sm:text-base dark:border-gray-500 dark:text-black dark:hover:border-gray-300" type="button">
          <span >Long(~30 questions)</span></button>
      </div><div className="max-w-full"><div   ><p>
        Select the number of questions you want - depending on how In-Depth you'd like to make your character!</p>
      </div></div><hr className="bg-gray-900 h-0.5 py-2 my-1" />

      <form id='questionnaire' method="post" action="/api/form/submit"
        className="dark:h-auto dark:w-[82%] dark:mx-auto"><div  >
        </div><input name="demoCharacter" type="hidden" value="Form" />
        <br></br>
        {questions}

      
      </form></>
      
    //{document.addEventListener('load')}


  );

}

export default DemoPage