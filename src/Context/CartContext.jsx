import { createContext, useState } from 'react'

export const CartContext = createContext()

export default function CartProvider({children}) {
    const [cart ,setCart] = useState([]);
    function addToCart(product){
        setCart(prev  => {
            const present = prev.find(item => item.name === product.name)
            if(present){
                return prev.map(item => item.name === product.name ?
                    {...item , qty : item.qty + 1} 
                    :  item
                )
            }
            return [...prev , {...product , qty :1}]
        })
    }

    function removeItem (name) {
        setCart (prev => prev.filter(item => item.name !== name))
    }

    function increase (name){
        setCart(prev => prev.map(
            item => item.name === name ? {...item,qty:item.qty+1} : item
        ))
    }

    function decrease (name){
        setCart(prev => prev.map(
            item => item.name === name && item.qty > 1 ? {...item,qty:item.qty-1}
        : item
    ))
    }
  return (
    <CartContext.Provider value = {{cart , addToCart , removeItem ,increase , decrease}}>
        {children}
    </CartContext.Provider>
  )
}
