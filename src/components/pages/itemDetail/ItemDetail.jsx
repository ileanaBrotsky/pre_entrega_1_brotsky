import { CounterContainer } from "../../common/counter/CounterContainer.jsx";
import ProductCard from "../../common/productCard/ProductCard.jsx";
import { Grid } from "@mui/material";
const ItemDetail = ({item,isItemDetail, onAdd, initial}) => {
  return (
    <Grid container spacing={2}>
    <Grid item  xs={3} sx={{margin:"auto"}}>
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