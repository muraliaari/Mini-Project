import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Thali from './components/Thali'
import Checkout from './components/Checkout'
import { Outlet } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Thali/>
      
      <Outlet/>
    </div>
  )
}

export default App
