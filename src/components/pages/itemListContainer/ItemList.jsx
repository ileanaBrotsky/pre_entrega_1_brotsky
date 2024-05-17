import { Grid } from "@mui/material";
import ProductCard from "../../common/productCard/ProductCard.jsx";

export default function ItemList({ items,error }) {
  return (
    <Grid container sx={{marginBottom:7}}>
    
        {items.map(({id, title,price,description,img}) => (
       <Grid  item key={id} xs={2} >
           <ProductCard
            price={price}
            title={title}
            description={description}
            img={img}
            id={id}
          />

          </Grid>
        ))}
        {
        error && <h2>{error.message}</h2>
        }
      </Grid>
  )
}
