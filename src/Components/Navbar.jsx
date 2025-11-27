import {useState} from 'react'
import {Link} from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBasketShopping} from '@fortawesome/free-solid-svg-icons'


export default function Navbar() {
  const[icon , setIcon] = useState(false);
  return (
    <>
    <nav>
      <div className='nav'>
      <Link to='/'>HOME</Link>
      <Link to='/Cricket'>CRICKET</Link>
      <Link to='/Football'>FOOTBALL</Link>
      <Link to='/Volleyball'>VOLLEYBALL</Link>
      <Link to='/Cart'><span className='nav-icon'><FontAwesomeIcon icon={faBasketShopping} /></span></Link>
      </div>
      <button className='btn' onClick={()=>setIcon(!icon)}>☰</button>
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
    </>
  )
}
