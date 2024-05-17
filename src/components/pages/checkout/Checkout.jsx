import { Button, TextField, Grid  } from "@mui/material";
import { useContext, useState } from "react";
import { CartContext } from "../../../context/CartContex";
import { db } from "../../../firebaseConfig.js";
import { collection, addDoc, doc,updateDoc } from "firebase/firestore";
import { Link } from "react-router-dom";

export const Checkout = () => {
  
  const {cart, getTotalPrice, clearCart}=useContext(CartContext)
  const [orderId, setOrderId]= useState(null);
  const [info, setInfo] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const handleChange = (event) => {
    let { name, value } = event.target;
    setInfo({ ...info, [name]: value });
  };
  let total=getTotalPrice()

  const handleSubmit = (event) => {
    event.preventDefault();
   let order={
    buyer:info,
    items:cart,
    total   }
    
   let orderCollection= collection(db, "orders")
   addDoc(orderCollection, order).then(res=>{
    console.log(res)
    setOrderId(res.id);
  }).catch(e=>console.log("no se pudo cargar la orden, error:" ,e))
  cart.forEach((product) => {
    let refDoc = doc(db, "products", product.id);
    updateDoc(refDoc, { stock: product.stock - product.quantity });
  });
  clearCart();
};
  return (
    <Grid container  sx={{display:"flex", justifyContent:"center"}}>
     { orderId? (<div><h3>Su orden se cargó con éxito. Su identificador de orden es {orderId}</h3>
      <Link to={`/`}>  <Button size="small"> Seguir comprando </Button>
      </Link></div>): 
    ( <form onSubmit={handleSubmit}>
      <Grid item rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 3 }} xs={12} 
        sx={{display:'flex', flexDirection:"column", backgroundColor: "#FAEFDD", marginTop: 5}}>
        <TextField
          sx={{margin:2, backgroundColor:"#FFFFFF"}}
          variant="outlined"
          type="text"
          label="Nombre"
          onChange={handleChange}
          name="name"
        />
        <TextField
          sx={{margin:2, backgroundColor:"#FFFFFF"}}   
          variant="outlined"
          type="text"
          label="Teléfono"
          onChange={handleChange}
          name="phone"
        />
        <TextField
         sx={{margin:2, backgroundColor:"#FFFFFF"}}
          variant="outlined"
          type="text"
          label="Email"
          onChange={handleChange}
          name="email"
        />
        <Button 
        sx={{margin:2}}
        variant="contained" 
        color="success" type="submit">enviar</Button>
        </Grid>
    </form>)}
    </Grid>
  );
};