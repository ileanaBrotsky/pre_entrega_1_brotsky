import Cart from "./Cart"
import {useContext} from "react"
import { CartContext } from "../../../context/CartContex";


const cartContainer = () => {

  const {cart, clearCart, deleteById, getTotalPrice}= useContext(CartContext)
  let totalPrice=getTotalPrice()
  return ( <Cart cart={cart} clearCart={clearCart} deleteById={deleteById} totalPrice={totalPrice} />)
}

export default cartContainer