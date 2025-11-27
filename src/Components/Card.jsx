import React from 'react'
import './Cricket.css'

export default function Card(props) {
  return (
   <>
    <div className='container'>
      <img src={props.image} alt="" />
      <div className="description">
        <h2>{props.name}</h2>
         <p className="price">{props.price} <span>{props.dis_price}</span></p>
        <button className="btn">Buy now</button>
      </div>
       </div>

   </>
  )
}
