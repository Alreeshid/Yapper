import { useState } from 'react'
import '/src/Components/Styles/Common.css'
import '/src/Components/Styles/Homepage.css'



function Homepage() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='welcomeBanner'>Welcome to Yapper</h1>
    </>
  )
}

export default Homepage
