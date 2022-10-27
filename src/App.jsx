import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Article from './Components/Article'
import Aside from './Components/Aside'
import Navbar from './Components/Navbar'
import './index.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <div className="containers container3">
      <Aside />
      <Article/>
      </div>
      
    </>
  )
}

export default App
