import React from 'react'

const Cart = ({cart}) => {
  return (
    <div> <h1>Este es el carrito</h1> 
   { cart.map(product=>(<h3>{product.title}</h3>))}
    </div>
  )
}

export default Cart