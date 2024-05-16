import { Button, Link } from "@mui/material"
import ProductCard from "../../common/productCard/ProductCard.jsx";

const Cart = ({cart, clearCart, deleteById,totalPrice}) => {
  return (
    <div> <h1>Este es el carrito</h1> 
   { cart.map(product=>(
     <ProductCard  
     key={product.id} 
     price={product.price} 
     title={product.title} 
     description={product.description}  
     img={product.img}
     id={product.id} 
     quantity={product.quantity}
     isItemDetail={false}
     isProductInCart={true} 
     deleteById={deleteById}/>
))}
<p>Total a pagar: $ {totalPrice}</p>
   <Button onClick={clearCart} variant="outlined">
        Limpiar carrito
      </Button>

      {cart.length > 0 && (
        <Link to="/checkout">
          <Button variant="contained">Finalizar compra</Button>
        </Link>
      )}
    </div>

  )
}

export default Cart