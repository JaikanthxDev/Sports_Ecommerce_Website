import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Route,Routes,BrowserRouter} from 'react-router-dom'
import Home from './Components/Home'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/'>{<Home/>}</Route>
      <Route path='/Cricket'></Route>
      <Route path='/Football'></Route>
      <Route path='/Volleyball'></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}
export default App