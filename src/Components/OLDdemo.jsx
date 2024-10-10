import { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client'

import Navbar from './Navbar';
import QuestionBox from './TextQuest';

function DemoPage() {
    const [questType, SetQuestType] = useState(0)

    //const [saving, setSaving] = useState(false);

    //questType = "short";
    //other types = "inter" and "long"
 


    return (
        <><br></br>
            <h2 className="text-3xl dark:text-center dark:h-auto dark:my-[12px] dark:text-[2.6em]"  >
                In this Demo, You'll make a character using Yapper
            </h2>
            <div className="overflow-x-auto whitespace-nowrap dark:text-center dark:mx-auto">
                <button onClick={SetQuestType("short")} className=
                    "inline-flex h-12 items-center whitespace-nowrap rounded-t-md border border-b-0 border-gray-300 px-4 py-2 text-center text-sm text-gray-700 focus:outline-none sm:text-base dark:border-gray-500 dark:text-white" type="button">
                    <span >Short(~15 Questions)</span></button>
                <button onClick={SetQuestType("interm")} className="cursor-base inline-flex h-12 items-center whitespace-nowrap border-b border-gray-300 bg-transparent px-4 py-2 text-center text-sm text-gray-700 hover:border-gray-400 focus:outline-none sm:text-base dark:border-gray-500 dark:text-white dark:hover:border-gray-300" type="button">
                    <span >Medium(~25 Questions)</span></button>
                <button onClick={SetQuestType("long")} className="cursor-base inline-flex h-12 items-center whitespace-nowrap border-b border-gray-300 bg-transparent px-4 py-2 text-center text-sm text-gray-700 hover:border-gray-400 focus:outline-none sm:text-base dark:border-gray-500 dark:text-white dark:hover:border-gray-300" type="button">
                    <span >Long(~40 questions)</span></button>
            </div><div className="max-w-full"><div   ><p>
                Select the number of questions you want - depending on how In-Depth you'd like to make</p>
            </div></div><hr className="bg-gray-900 h-0.5 py-2 my-1" />

            <form method="post" action="/api/form/submit"
                className="dark:h-auto dark:w-[82%] dark:mx-auto"><div  >
                </div><input name="demoCharacter" type="hidden" value="Form" />

            </form></>

    );
}

createRoot(document.getElementById('root')).render(
    <>
        <Navbar />
        <br></br>
        <DemoPage />
    </>
)