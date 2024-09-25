import { useState, useEffect } from 'react'
import '/src/Components/Styles/Common.css'
import '/src/Components/Styles/Homepage.css'

import axios from 'axios'



function Homepage() {
  const [count, setCount] = useState(0)
  const [data, setData] = useState()

  useEffect(() => {
    async function grabData(){
      const response = await axios.get("http://localhost:3000/Users")
      if(response.status === 200){
        setData(response.data)
      }
      else{
        console.log("No good")
      }
    }

    grabData()
  }, [])

  return (
    <>
      <h1 className='welcomeBanner'>Welcome to Yapper</h1>
      {JSON.stringify(data)}
    </>
  )
}

//now for some Backend fetching

export default Homepage
