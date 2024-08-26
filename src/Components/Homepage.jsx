import { useState } from 'react'
import '/src/Components/Styles/Common.css'
import '/src/Components/Styles/Homepage.css'
import '/src/Components/Styles/Navbar.css'




function Homepage() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="navBarContainer">
        <ul className="navBarList">
          <li className="navBarItem">Button 1</li>
        </ul>
      </div>
      <div className="examples-landing">
        Hello!
      </div>
    </>
  )
}

export default Homepage
