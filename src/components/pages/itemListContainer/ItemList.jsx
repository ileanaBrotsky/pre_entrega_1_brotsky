import { Grid } from "@mui/material";
import { products } from "../../../productsMock.js";
import ProductCard from "../../common/productCard/ProductCard.jsx";

export default function ItemList({ greeting }) {
  return (
    <Grid container sx={{ backgroundColor: "#D9D5CB", paddingBottom: "80px" }}>
      <Grid item xs={12} sx={{ paddingLeft: "20px" }}>
        {" "}
        <h3>{greeting}</h3>
      </Grid>
      <Grid
        item
        xs={12}
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        {products.map((item) => (
          <ProductCard
            key={item.id}
            id={item.id}
            price={item.price}
            title={item.title}
            description={item.description}
            img={item.img}
          />
        ))}
      </Grid>
    </Grid>
  );
}
