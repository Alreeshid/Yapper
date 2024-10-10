import { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client'

import Navbar from '../Components/Navbar';
import TextBox from '../Components/TextQuest';
import YesNoBox from '../Components/YesNo';
import SelectorQuest from '../Components/SelectorQuest';



function DemoPage() {

  //const [saving, setSaving] = useState(false);

  //questType = "short";
  //other types = "inter" and "long"
  const shortList =
    [
      {
        qNum: 1,
        qType: "text",
        qQuest: "Before we start, do you have a core idea for your character? This can be vague or incredibly specific.",
        qPlaceholder: "Example: Don Quixote with a gun, Harry Potter with Norse mythology, etc.",
        qNumFollowUp: 0,
        qResponse: "",
      },
      {
        qNum: 2,
        qType: "text",
        qQuest: "What's your character's birth name, and do they go by it? If not, why don't they",
        qPlaceholder: "Ron Johnson, goes by David Hachernoff. He was misplaced at birth alongside the real David Hachernoff",
        qNumFollowUp: 0,
        qResponse: "",
      },
      {
        qNum: 3,
        qType: "text",
        qQuest: "Where was your character born, and where do they currently live?",
        qPlaceholder: "Born in Nevada, but moved to New York City when they were 12.",
        qNumFollowUp: 0,
        qResponse: "",
      },
      {
        qNum: 4,
        qType: "text",
        qQuest: "Who are their birth parents?",
        qPlaceholder: "John and Mary Berkley - who run a traveling circus in Nevada.",
        qNumFollowUp: 0,
        qResponse: "",
      },
      {
        qNum: 5,
        qType: "choice",//make a dropdown selection
        qQuest: "Does your character consider their birth parents as their real parents, or do they look to someone else in that light? This can also apply if they do not know their real parents.",
        qChoices: [{
          id:1,
          text: "They know their birth parents - and see them as their real parents/mentors"
        },
        {
          id:2,
          text: "They know their birth parents but see someone else as their real parent(s)/mentor(s)"
        },
        {
          id:3,
          text: "They do not know their birth parents, but see their adopted (or otherwise) parents as real"
        },
        {
          id:4,
          text: "They do not know their birth parents, and do not feel that their adopted (or otherwise) parents are true parents/mentors"
        },
        {
          id:5,
          text: "Other: Please elaborate in the text box following this choice."
        }],
        qPlaceholder: "Consider how this will impact not just this relationship, but their worldview as well.",
        qNumFollowUp: 1,
        qResponse: "",
      },
      {
        qNum: 5.5,
        qType: "text",
        qQuest: "You selected 'Other' in the previous question - elaborate on that choice a little more:",
        qPlaceholder: "I.E. - My character knows that they were taken from their real parents as a child, but was convinced by their 'adopted' parents that this was for the best. They are not aware their birth parents are dead at the hands of their adopted parents.",
        qNumFollowUp: 0,
        qResponse: "",
      },
      {
        qNum: 6,
        qType: "text",
        qQuest: "Consider your previous choice - what was life like for them growing up with their parents(if they had any). Think about the positives and negatives.",
        qPlaceholder: "Their parents cared for them, but were unaware that they were bullied for most of their childhood. Even now they feel spite towards their family for not noticing.",
        qNumFollowUp: 0,
        qResponse: "",
      },
      {
        qNum: 7,
        qType: "text",
        qQuest: "Describe your character. You can keep it vague, but consider details that may have significance.",
        qPlaceholder: "Female, brown hair, blue eyes, has a meek personality but wears a scowl most days",
        qNumFollowUp: 0,
        qResponse: "",
      },
      {
        qNum: 8,
        qType: "yesNo",
        qQuest: "Does your character have any scars, debilitations, disabilities, etc.?",
        qPlaceholder: "",
        qNumFollowUp: 2,
        qResponse: "",
      },
      {
        qNum: 8.3,
        qType: "text",
        qQuest: "You answered 'Yes', describe them, vaguely or in detail",
        qPlaceholder: "Has a limp due to breaking their leg in a soccer game as a child.",
        qNumFollowUp: 1,
        qResponse: "",
      },
      {
        qNum: 8.6,
        qType: "text",
        qQuest: "How do these details define them, and how does it effect their day-to-day life? Consider also how this may play into scenes in your story.",
        qPlaceholder: "They got their scar from a bear attack then they were young. They fear camping, and even seeing bears in enclosures.",
        qNumFollowUp: 0,
        qResponse: "",
      },
      {
        qNum: 9,
        qType: "text",
        qQuest: "How old is your character, and how long do they expect to live? **This is often determined by the setting your character is in.",
        qPlaceholder: "80 years old, but as an elf they expect to live for several hundred years.",
        qNumFollowUp: 0,
        qResponse: "",
      },
      {
        qNum: 10,
        qType: "text",
        qQuest: "Most people have dreams or aspirations, even if they're small. What about your character?",
        qPlaceholder: "They just want to get by and live a peaceful life.",
        qNumFollowUp: 0,
        qResponse: "",
      },
      {
        qNum: 11,
        qType: "text",
        qQuest: "",
        qPlaceholder: "",
        qNumFollowUp: 0,
        qResponse: "",
      },
      {
        qNum: 12,
        qType: "text",
        qQuest: "",
        qPlaceholder: "",
        qNumFollowUp: 0,
        qResponse: "",
      },
    ]


  return (
    <><br></br>
      <h2 className="text-3xl dark:text-center dark:h-auto dark:my-[12px] dark:text-[2.6em] text-center"  >
        In this Demo, You'll make a character using Yapper
      </h2>
      <div className="overflow-x-auto whitespace-nowrap dark:text-center dark:mx-auto">
        <button className=
          "inline-flex h-12 items-center whitespace-nowrap rounded-t-md border border-b-0 border-gray-300 px-4 py-2 text-center text-sm text-gray-700 focus:outline-none sm:text-base dark:border-gray-500 dark:text-black" type="button">
          <span >Short(~15 Questions)</span></button>
        <button className="cursor-base inline-flex h-12 items-center whitespace-nowrap border-b border-gray-300 bg-transparent px-4 py-2 text-center text-sm text-gray-700 hover:border-gray-400 focus:outline-none sm:text-base dark:border-gray-500 dark:text-black dark:hover:border-gray-300" type="button">
          <span >Medium(~25 Questions)</span></button>
        <button className="cursor-base inline-flex h-12 items-center whitespace-nowrap border-b border-gray-300 bg-transparent px-4 py-2 text-center text-sm text-gray-700 hover:border-gray-400 focus:outline-none sm:text-base dark:border-gray-500 dark:text-black dark:hover:border-gray-300" type="button">
          <span >Long(~40 questions)</span></button>
      </div><div className="max-w-full"><div   ><p>
        Select the number of questions you want - depending on how In-Depth you'd like to make</p>
      </div></div><hr className="bg-gray-900 h-0.5 py-2 my-1" />

      <form method="post" action="/api/form/submit"
        className="dark:h-auto dark:w-[82%] dark:mx-auto"><div  >
        </div><input name="demoCharacter" type="hidden" value="Form" />
        <br></br>

        {shortList.map((question) => {
          if (question.qType === "text") {
            return (
              <>
                <div className="dark:mx-auto items-center flex flex-col" id={question.qNum}>
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
                      className="text-black bg-green-400 px-4 py-2 rounded-global flex items-center float-left dark:m-[1em] dark:bg-secondary-500"
                      type="button">
                      <br></br>
                      <span>Next Question</span>
                    </button>
                    <button
                      className="text-white bg-black px-4 py-2 rounded-global flex items-center float-right dark:p-[0.5em] dark:m-[1em] dark:bg-orange-500"
                      type="button">
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
                <div className="dark:mx-auto items-center flex flex-col">
                  <p className=" dark:h-auto dark:text-center dark:font-bold dark:text-[1.7em] order-0 dark:w-[100%] break-words">
                    {question.qNum +": " +question.qQuest}
                  </p>
                  <div className="dark:m-[0%] dark:mx-[20px] dark:p-[5px] dark:w-[20%]">
                    <div className="flex items-center w-max gap-x-2 float-left dark:mx-[20%]">
                      <input name="radioQ" id={question.qNum + "Y"} type="radio" />
                      <label htmlFor={question.qNum + "Y"}>Yes</label>
                    </div>
                    <div className="flex items-center w-max gap-x-2 dark:mx-[20%]">
                      <input name="radioQ" id={question.qNum + "Y"} type="radio" />
                      <label htmlFor={question.qNum + "Y"}>No</label>
                    </div>
                  </div>
                  <div className="dark:mx-[3em] dark:h-auto dark:w-auto">
                    <button
                      className="text-white bg-primary px-4 py-2 rounded-global flex items-center float-left dark:m-[1em] dark:bg-secondary-500"
                      type="button">
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
                <div className="dark:mx-auto items-center flex flex-col">
                  <p className="dark:h-auto dark:text-center dark:font-bold dark:text-[1.7em] order-0 dark:w-[100%] break-words">
                    {question.qNum + ": " + question.qQuest}
                  </p>
                  <select id={question.qNum+"S"} name="select" defaultValue="Null">
                    <option value="Null" disabled="" hidden="">
                      {question.qPlaceholder}
                    </option>
                    {question.qChoices.map((choice) => {
                      return(
                        
                          <option key={choice.id} value={choice.text.toString}>{choice.text}</option>
                        
                      )
                    })}
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
        })}
        {/* 
        <YesNoBox />
        <TextBox />
        <SelectorQuest />
 */}
      </form></>
      //{document.addEventListener('load')}

  );
}

export default DemoPage