import { ShoppingCart } from "@mui/icons-material";
import { Badge } from "@mui/material";

const CartWidget = () => {
  return (
         <Badge badgeContent={4} color="primary">
            <ShoppingCart color="action" />
         </Badge>
     )
}

export default CartWidget