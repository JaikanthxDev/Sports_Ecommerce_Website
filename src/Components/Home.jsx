import React from 'react'
import {Link} from 'react-router-dom'
export default function Home() {
  return (
    <>
      <Link to='/'>Home</Link>
      <Link to='/Cricket'>CRICKET</Link>
      <Link to='/Football'>FOOTBALL</Link>
      <Link to='/Volleyball'>VOLLEYBALL</Link>
    </>
  )
}
