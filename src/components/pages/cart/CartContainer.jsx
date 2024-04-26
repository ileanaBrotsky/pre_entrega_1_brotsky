import Cart from "./Cart"
import {useContext} from "react"
import { CartContext } from "../../../context/CartContex";
const cartContainer = () => {
  const {cart, x,y}= useContext(CartContext)
  return (
    <Cart cart={cart}/>
   
  )
}

export default cartContainer