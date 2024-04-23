import ProductCard from "../../common/productCard/ProductCard.jsx";
import { Grid } from "@mui/material";
const ItemDetail = ({item,isOneProduct}) => {
  return (
    <Grid container sx={{ backgroundColor: "#D9D5CB", padding: "80px",  minHeight:"90vh"}}>
    <Grid item xs={12} sx={{display: "flex", justifyContent: "center",flexWrap: "wrap", gap: "20px" }}>
    <ProductCard
      price={item.price}
      title={item.title}
      description={item.description}
      img={item.img}
      id={item.id}
      isOneProduct={isOneProduct}
     />
    </Grid>
  </Grid>

  )
}

export default ItemDetail