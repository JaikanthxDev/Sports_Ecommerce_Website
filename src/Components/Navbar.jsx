import React from 'react'
import {Link} from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBasketShopping} from '@fortawesome/free-solid-svg-icons'


export default function Navbar() {
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
<<<<<<< HEAD
=======
      <hr />
      <h1>hi</h1>
>>>>>>> 209079d4637c8973f0fa702838290b68fc9b76b1
    </nav>
    </>
  )
}
