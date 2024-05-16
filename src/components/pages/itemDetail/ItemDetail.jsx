import { CounterContainer } from "../../common/counter/CounterContainer.jsx";
import ProductCard from "../../common/productCard/ProductCard.jsx";
import { Grid } from "@mui/material";
const ItemDetail = ({item,isItemDetail, onAdd, initial}) => {
  return (
    <Grid container sx={{padding: "80px",  minHeight:"100vh"}}>
    <Grid item xs={12} sx={{display: "flex", justifyContent: "center",flexWrap: "wrap", gap: "20px" }}>
    <ProductCard
      price={item.price}
      title={item.title}
      description={item.description}
      img={item.img}
      id={item.id}
      isItemDetail={isItemDetail}
     />
      <CounterContainer stock={item.stock} onAdd={onAdd} initial={initial}/>
    </Grid>
   
  </Grid>

  )
}

export default ItemDetail