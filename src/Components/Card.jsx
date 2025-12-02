import { useContext } from 'react'
import './Cricket.css'
import { CartContext } from '../Context/CartContext'

export default function Card(props) {
  const { addToCart } = useContext(CartContext);
  return (
   <>
    <div className='container'>
      <img src={props.image} alt="" />
      <div className="description">
        <h2>{props.name}</h2>
         <p className="price">{props.price} <span>{props.dis_price}</span></p>
        <button className="btn" onClick={() => addToCart(props)}>Buy now</button>
      </div>
     </div>

   </>
  )
}
