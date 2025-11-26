import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Route,Routes,BrowserRouter} from 'react-router-dom'
import Home from '.Components/Home'
import Volleyball from './Components/Volleyball'
import Football from './Components/Football'
import Cricket from './Components/Cricket'
import Navbar from './Components/Navbar'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Cricket' element={<Cricket/>}/>
      <Route path='/Football'element={<Football/>}/>
      <Route path='/Volleyball' element={<Volleyball/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}
export default App