import { useEffect, useState, useRef } from 'react'
import {Link} from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBasketShopping} from '@fortawesome/free-solid-svg-icons'


export default function Navbar() {
  const[icon , setIcon] = useState(false);
  const [run, setRun] = useState(true)     
  const timerRef = useRef(null)              
  const isUnmounted = useRef(false)      

  useEffect(() => {                           
    const tick = () => {
      setRun(prev => !prev)
      timerRef.current = setTimeout(tick, 5000)
    };
    timerRef.current = setTimeout(tick, 5000)

    return () => {
      //  cleanup 
      isUnmounted.current = true             
      if (timerRef.current) {
        clearTimeout(timerRef.current)       
      }
    }
  }, [])
  return (
    <>
    <nav>
      <div className='nav'>
      <Link to='/'>HOME</Link>
      <Link to='/Cricket'>CRICKET</Link>
      <Link to='/Football'>FOOTBALL</Link>
      <Link to='/Volleyball'>VOLLEYBALL</Link>
      <Link to='/Cart' className='nav-icon'><FontAwesomeIcon icon={faBasketShopping} /></Link>
      </div>
      <button className='btn1' onClick={()=>setIcon(!icon)}>☰</button>
      {
        icon && (
          <ul className='mobile-nav'>
            <Link to='/'>HOME</Link>
            <Link to='/Cricket'>CRICKET</Link>
            <Link to='/Football'>FOOTBALL</Link>
            <Link to='/Volleyball'>VOLLEYBALL</Link>
            <Link to='/Cart'><span className='nav-icon'><FontAwesomeIcon icon={faBasketShopping} /></span></Link>
          </ul>
        )
          
      }
    </nav>
    <div style={{ backgroundColor: "#000" }}>
      <marquee style={{ color: "#fff" }}>
        {run ? "Enjoy Your Free Shipping" : "Discount upto 50%" }
      </marquee>
    </div>
    </>
  )
}
