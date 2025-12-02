import React, { useContext } from 'react'
import { CartContext } from '../Context/CartContext'

export default function Cart() {

  const { cart } = useContext(CartContext)

  return (
    <>
    <div>
      <h1>Your Cart</h1>
      {
        cart.length === 0 ? (
          <p>Your Cart is Empty</p>
        ) : (
          cart.map((item,index) => (
            <div className='cart-item' key={index}>
              <img src={item.image} alt="" />
              <h3>{item.name}</h3>
              <p>{item.price}</p>
            </div>
          ))
        )
      }
    </div>
    </>
  )
}
