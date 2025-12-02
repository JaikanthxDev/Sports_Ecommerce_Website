import { useState } from 'react'
import './App.css'
import {Route,Routes,BrowserRouter} from 'react-router-dom'
import Home from './Components/Home'
import Volleyball from './Components/Volleyball'
import Football from './Components/Football'
import Cricket from './Components/Cricket'
import Navbar from './Components/Navbar'
import Cart from './Components/Cart'
import CartProvider from './Context/CartContext'

function App() {
  return (
    <>
    <CartProvider>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Cricket' element={<Cricket/>}/>
      <Route path='/Football'element={<Football/>}/>
      <Route path='/Volleyball' element={<Volleyball/>}/>
      <Route path='/Cart' element={<Cart/>}/>
    </Routes>
    </BrowserRouter>
    </CartProvider>
    </>
  )
}
export default App