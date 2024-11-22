import { useState, useEffect } from 'react'
import Navbar from "./Navbar"
import { getUsers } from '../api'

//import "Common.css"

//List of pages to make
/*
Home(landing page)
Demo before you make an account
Community page with lists of user pages, as well as an upvote system
User's dashboard/landing page
Create a character/setting/
An about me page
Contact page for support or inquiries
*/ 

function Homepage() {
//This functions as the landing page
//Has a section for recent community posts sorted by recency 

const [data, setPageData] = useState([])

/*
  useEffect(() =>{
      async function loadPageData(){
        const data = await getUsers()//placeholder for testing
        //alert(JSON.stringify(data))
        //Confirmed connection
        setPageData(data)
      }
      loadPageData()
  }, [])
*/
  return (
    <>
    <div className="bg-stone-300">
      <br></br>
      <header>
        <div className="lg:flex">
          <div className="flex w-full items-center justify-center px-6 py-8 lg:h-[32rem] lg:w-1/2">
            <div className="max-w-xl">
              <h2 className="text-3xl font-semibold text-gray-800 lg:text-4xl dark:text-white">
                Welcome to 
                <span className="text-primary-600 dark:text-primary-400">Yapper</span>
              </h2>
              <p className="mt-4 text-sm text-slate-800 lg:text-base">
                Yapper is a writing tool designed to help creatives come up with ideas for their writing, and to keep
                their ideas consistent. Whether you're an experienced writer or simply want  to build up loose ideas,
                Yapper is here to help!
                  
              </p>
              <div className="mt-6 flex flex-col space-y-3 lg:flex-row lg:space-y-0">
                <a
                  className="block transform rounded-md bg-gray-900 px-5 py-2 text-center text-sm font-medium tracking-wider text-white transition-colors duration-300 hover:bg-gray-700"
                  href="/#Login"
                  target="_self">
                  Make an Account
                </a>
                <a
                  className="block transform rounded-md bg-gray-900 px-5 py-2 text-center text-sm font-medium tracking-wider text-white transition-colors duration-300 hover:bg-gray-700"
                  href="/#Demo"
                  target="_self">
                  Try our Demo
                </a>
                <a
                  className="block transform rounded-md bg-gray-200 px-5 py-2 text-center text-sm font-medium tracking-wider text-gray-700 transition-colors duration-300 hover:bg-gray-300 lg:mx-4"
                  href="/#About"
                  target="_self">
                  Learn More About The Project Here
                </a>
              </div>
            </div>
          </div>
          <div className="h-64 w-full lg:h-auto lg:w-1/2">
            <div className="h-full w-full bg-cover">
              <div className="h-300 w-150 bg-black opacity-25"><img src='src\assets\freepik_MainPBanner.png'></img></div>
            </div>
          </div>
        </div>
      </header>
      <section>
        <div className="container mx-auto px-6 py-10">
          <h2 className="text-2xl font-semibold capitalize text-gray-800 lg:text-3xl dark:text-white">
            So, what does Yapper even do?
            <br />
            <span className="decoration-primary-500 underline"></span>
          </h2>
          <p className="mt-4 text-gray-500 xl:mt-6 dark:text-gray-300">
            Yapper asks you simple yet deep questions about your ideas, and then formats them together to give you a
            reference sheet for these ideas. This is especially important for settings and characters, as even minor
            discrepancies can throw off an audiences' enjoyment for your work.
          </p>
          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 xl:mt-12 xl:grid-cols-3 xl:gap-16">
            <div className="space-y-3">
              <span className="bg-primary-100 dark:bg-primary-500 text-primary-500 inline-block rounded-full p-3 dark:text-white">
                <span className="w-24px h-24px h-6 w-6">
                  <svg
                    className="w-[inherit] h-[inherit]"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
                  </svg>
                </span>
              </span>
              <h2 className="text-xl font-semibold capitalize text-gray-700 dark:text-white">
                
                Copy &amp; paste components
              </h2>
              <p className="text-gray-500 dark:text-gray-300">
                
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non
                corrupti doloribus voluptatum eveniet
              </p>
              <a
                href="#"
                className="text-primary-500 hover:text-primary-600 dark:text-primary-400 dark:hover:text-primary-500 -mx-1 inline-flex transform items-center text-sm capitalize transition-colors duration-300 hover:underline">
                <span className="mx-1">read more</span>
                <span className="w-24px h-24px mx-1 h-4 w-4 rtl:-scale-x-100">
                  <svg
                    className="w-[inherit] h-[inherit]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"></path>
                  </svg>
                </span>
              </a>
            </div>
            <div className="space-y-3">
              <span className="bg-primary-100 dark:bg-primary-500 text-primary-500 inline-block rounded-full p-3 dark:text-white">
                <span className="w-24px h-24px h-6 w-6">
                  <svg
                    className="w-[inherit] h-[inherit]"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
                  </svg>
                </span>
              </span>
              <h2 className="text-xl font-semibold capitalize text-gray-700 dark:text-white"> Zero Configuration </h2>
              <p className="text-gray-500 dark:text-gray-300">
                
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non
                corrupti doloribus voluptatum eveniet
              </p>
              <a
                href="#"
                className="text-primary-500 hover:text-primary-600 dark:text-primary-400 dark:hover:text-primary-500 -mx-1 inline-flex transform items-center text-sm capitalize transition-colors duration-300 hover:underline">
                <span className="mx-1">read more</span>
                <span className="w-24px h-24px mx-1 h-4 w-4 rtl:-scale-x-100">
                  <svg
                    className="w-[inherit] h-[inherit]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"></path>
                  </svg>
                </span>
              </a>
            </div>
            <div className="space-y-3">
              <span className="bg-primary-100 dark:bg-primary-500 text-primary-500 inline-block rounded-full p-3 dark:text-white">
                <span className="w-24px h-24px h-6 w-6">
                  <svg
                    className="w-[inherit] h-[inherit]"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                  </svg>
                </span>
              </span>
              <h2 className="text-xl font-semibold capitalize text-gray-700 dark:text-white">
                
                New Components Every month
              </h2>
              <p className="text-gray-500 dark:text-gray-300">
                
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non
                corrupti doloribus voluptatum eveniet
              </p>
              <a
                href="#"
                className="text-primary-500 hover:text-primary-600 dark:text-primary-400 dark:hover:text-primary-500 -mx-1 inline-flex transform items-center text-sm capitalize transition-colors duration-300 hover:underline">
                <span className="mx-1">read more</span>
                <span className="w-24px h-24px mx-1 h-4 w-4 rtl:-scale-x-100">
                  <svg
                    className="w-[inherit] h-[inherit]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"></path>
                  </svg>
                </span>
              </a>
            </div>
            <div className="space-y-3">
              <span className="bg-primary-100 dark:bg-primary-500 text-primary-500 inline-block rounded-full p-3 dark:text-white">
                <span className="w-24px h-24px h-6 w-6">
                  <svg
                    className="w-[inherit] h-[inherit]"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"></path>
                  </svg>
                </span>
              </span>
              <h2 className="text-xl font-semibold capitalize text-gray-700 dark:text-white"> elegant Dark Mode </h2>
              <p className="text-gray-500 dark:text-gray-300">
                
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non
                corrupti doloribus voluptatum eveniet
              </p>
              <a
                href="#"
                className="text-primary-500 hover:text-primary-600 dark:text-primary-400 dark:hover:text-primary-500 -mx-1 inline-flex transform items-center text-sm capitalize transition-colors duration-300 hover:underline">
                <span className="mx-1">read more</span>
                <span className="w-24px h-24px mx-1 h-4 w-4 rtl:-scale-x-100">
                  <svg
                    className="w-[inherit] h-[inherit]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"></path>
                  </svg>
                </span>
              </a>
            </div>
            <div className="space-y-3">
              <span className="bg-primary-100 dark:bg-primary-500 text-primary-500 inline-block rounded-full p-3 dark:text-white">
                <span className="w-24px h-24px h-6 w-6">
                  <svg
                    className="w-[inherit] h-[inherit]"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"></path>
                  </svg>
                </span>
              </span>
              <h2 className="text-xl font-semibold capitalize text-gray-700 dark:text-white">
                
                Easy to customiztions
              </h2>
              <p className="text-gray-500 dark:text-gray-300">
                
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non
                corrupti doloribus voluptatum eveniet
              </p>
              <a
                href="#"
                className="text-primary-500 hover:text-primary-600 dark:text-primary-400 dark:hover:text-primary-500 -mx-1 inline-flex transform items-center text-sm capitalize transition-colors duration-300 hover:underline">
                <span className="mx-1">read more</span>
                <span className="w-24px h-24px mx-1 h-4 w-4 rtl:-scale-x-100">
                  <svg
                    className="w-[inherit] h-[inherit]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"></path>
                  </svg>
                </span>
              </a>
            </div>
            <div className="space-y-3">
              <span className="bg-primary-100 dark:bg-primary-500 text-primary-500 inline-block rounded-full p-3 dark:text-white">
                <span className="w-24px h-24px h-6 w-6">
                  <svg
                    className="w-[inherit] h-[inherit]"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
                  </svg>
                </span>
              </span>
              <h2 className="text-xl font-semibold capitalize text-gray-700 dark:text-white">
                
                Simple &amp; clean designs
              </h2>
              <p className="text-gray-500 dark:text-gray-300">
                
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non
                corrupti doloribus voluptatum eveniet
              </p>
              <a
                href="#"
                className="text-primary-500 hover:text-primary-600 dark:text-primary-400 dark:hover:text-primary-500 -mx-1 inline-flex transform items-center text-sm capitalize transition-colors duration-300 hover:underline">
                <span className="mx-1">read more</span>
                <span className="w-24px h-24px mx-1 h-4 w-4 rtl:-scale-x-100">
                  <svg
                    className="w-[inherit] h-[inherit]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"></path>
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container mx-auto px-6 py-12">
          <h2 className="text-2xl font-semibold text-gray-800 lg:text-3xl dark:text-white">
            
            Frequently asked questions.
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:mt-16 xl:grid-cols-3">
            <div>
              <div className="bg-primary-600 inline-block rounded-lg p-3 text-white">
                <span className="w-24px h-24px h-6 w-6">
                  <svg
                    className="w-[inherit] h-[inherit]"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </span>
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-700 dark:text-white">How much does Yapper cost?</h2>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-300">
                  
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident placeat, consequatur eveniet
                  veritatis quos dignissimos beatae dolores exercitationem laboriosam officia magnam atque blanditiis
                  illum doloremque magni ex corrupti tempora quis.
                </p>
              </div>
            </div>
            <div>
              <div className="bg-primary-600 inline-block rounded-lg p-3 text-white">
                <span className="w-24px h-24px h-6 w-6">
                  <svg
                    className="w-[inherit] h-[inherit]"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </span>
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-700 dark:text-white">Q2</h2>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-300">
                  
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident placeat, consequatur eveniet
                  veritatis quos dignissimos beatae dolores exercitationem laboriosam officia magnam atque blanditiis
                  illum doloremque magni ex corrupti tempora quis.
                </p>
              </div>
            </div>
            <div>
              <div className="bg-primary-600 inline-block rounded-lg p-3 text-white">
                <span className="w-24px h-24px h-6 w-6">
                  <svg
                    className="w-[inherit] h-[inherit]"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </span>
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-700 dark:text-white">Q3</h2>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-300">
                  
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident placeat, consequatur eveniet
                  veritatis quos dignissimos beatae dolores exercitationem laboriosam officia magnam atque blanditiis
                  illum doloremque magni ex corrupti tempora quis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    
        <br></br><hr></hr>
        <div className="container mx-auto px-6 py-8">
      <hr className="my-10 border-gray-200 dark:border-gray-700" />
      <div className="flex flex-col items-center sm:flex-row sm:justify-between">
        <p className="text-sm text-gray-500">
          Logos created by Freepix, with core website components modified from Chai Studio.
        </p>
        <div className="-mx-2 mt-3 flex sm:mt-0">
          <a
            className="mx-2 text-sm text-gray-500 transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300"
            aria-label="Reddit"
            href="#"
            target="_self">
            
            Privacy
          </a>
          <a
            className="mx-2 text-sm text-gray-500 transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300"
            aria-label="Reddit"
            href="#"
            target="_self">
            
            Cookies
          </a>
        </div>
      </div>
    </div>
        </div>
        
        
    </>
  )
}

//now for some Backend fetching

export default Homepage
