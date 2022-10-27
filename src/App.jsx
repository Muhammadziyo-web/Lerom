import { useState } from 'react'
import { BrowserRouter } from "react-router-dom";

import reactLogo from './assets/react.svg'
import Article from './Components/Article'
import Aside from './Components/Aside'
import Navbar from './Components/Navbar'
import './index.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      
        <Navbar />
        <div className="containers container3">
          <Aside />
          <Article />
        </div>

      </BrowserRouter>
    </>
  )
}

export default App
