import { Grid } from "@mui/material";
import ProductCard from "../../common/productCard/ProductCard.jsx";

export default function ItemList({ items,error }) {
  return (
    <Grid container sx={{ backgroundColor: "#D9D5CB", paddingBottom: "80px" }}>
      <Grid item xs={12} sx={{ paddingLeft: "20px" }}>
        {" "}
        <h3>Bienvenido</h3>
      </Grid>
      <Grid item xs={12} sx={{display: "flex", justifyContent: "center",flexWrap: "wrap", gap: "20px" }}>
        {items.map(({id, title,price,description,img}) => (
          <ProductCard
            key={id}
            price={price}
            title={title}
            description={description}
            img={img}
            id={id}
          />
        ))}
        {
        error && <h2>{error.message}</h2>
        }
      </Grid>
    </Grid>
  );
}
