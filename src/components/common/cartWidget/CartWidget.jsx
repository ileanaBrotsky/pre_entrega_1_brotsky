import { ShoppingCart } from "@mui/icons-material";
import { Badge } from "@mui/material";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContex";
import {useContext} from "react"

const CartWidget = () => {
   const {getTotalProducts}= useContext(CartContext)
let totalItems=getTotalProducts()
  return (
   <Link to={"/cart"}>
         <Badge badgeContent={totalItems} showZero color="primary">
            <ShoppingCart color="action" />
         </Badge>
     </Link>
     )
}

export default CartWidget