import React, { useContext } from 'react'
import { CartContext } from '../Context/CartContext'
import './Cricket.css'

function cleanPrice(str){
  if(!str) return 0

const cleaned = String(str)
    .replace(/MRP:/gi, "")   //  MRP
    .replace(/₹/g, "")       //  ₹
    .replace(/,/g, "")       
    .replace(/\.00/g, "")    
    .trim();

    const number = parseFloat(cleaned);
  return isNaN(number) ? 0 : number;
}

export default function Cart() {

  const { cart , removeItem , increase , decrease } = useContext(CartContext)

  const totalPrice = cart.reduce((total , item)=>{
    const price = cleanPrice(item.price);
    return total + price * item.qty
  },0)

  return (
    <>
    <h1 className='side-head'>Your Cart</h1>
    <div className='cart-container'>
      
      {
        cart.length === 0 ? (
          <p>Your Cart is Empty</p>
        ) : (
          cart.map((item,index) => {
            const priceNum = cleanPrice(item.price)
            return(
              <div className='cart-card' key={index}>
                <button className='remove-btn' onClick={()=>removeItem(item.name)}>✖</button>
                <img src={item.image} alt="" />
                <div className='cart-details'>
              <h2>{item.name}</h2>
              <p className='price'>₹{priceNum.toLocaleString('en-IN')} <span>{item.dis_price}</span></p>
              <div className="qty-box">
                <button className='qty-btn' onClick={() => decrease (item.name)}>-</button>
                <span className='qty-number'>{item.qty}</span>
                <button className='qty-btn' onClick={()=>increase(item.name)}>+</button>
              </div>
              </div>
            </div>
            )
          })
        )
      }
      {
        cart.length > 0 && (
          <h2 className='total-price'>Total : {totalPrice.toLocaleString('en-IN')}</h2>
        )
      }
    </div>
    </>
  )
}
