import { ShoppingCart } from "@mui/icons-material";
import { Badge } from "@mui/material";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContex";
import {useContext} from "react"

const CartWidget = () => {
   const {cart}= useContext(CartContext)

  return (
   <Link to={"/cart"}>
         <Badge badgeContent={cart.length} showZero color="primary">
            <ShoppingCart color="action" />
         </Badge>
     </Link>
     )
}

export default CartWidget