import { Button, Grid } from "@mui/material"
import ProductCard from "../../common/productCard/ProductCard.jsx";
import { Link } from "react-router-dom";
const Cart = ({cart, clearCart, deleteById,totalPrice}) => {
  return (
    <>
    <Grid container sx={{marginBottom:7}}>
    { cart.length==0 && <h3>No hay productos en tu carrito</h3>}
   { cart.length>0 && <h3>Tus productos son:</h3> }
   { cart.length>0 && cart.map(product=>(
     <Grid  item key={product.id} xs={3} ><ProductCard  
     price={product.price} 
     title={product.title} 
     description={product.description}  
     img={product.img}
     id={product.id} 
     quantity={product.quantity}
     isItemDetail={false}
     isProductInCart={true} 
     deleteById={deleteById}/>
     </Grid> 
      
))}
 </Grid >
 <Grid container sx={{display:"flex", flexDirection:"column", padding: 5, width:"auto"}}>
      <h2>Total a pagar: $ {totalPrice}</h2>
{ cart.length>0 && 
      <Button onClick={clearCart} variant="outlined">
        Limpiar carrito
      </Button>
}
      {cart.length > 0 && (
        <Link to="/checkout">
          <Button variant="contained">Finalizar compra</Button>
        </Link>
      )}
  </Grid > 
   </>
  )
}

export default Cart