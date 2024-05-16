import {Card,CardActions,CardContent,CardMedia,Button,Typography,} from "@mui/material";

import { Link } from "react-router-dom";
const ProductCard = ({id, title, description, price, img, stock, isItemDetail, quantity, deleteById, isProductInCart}) => {
  return (
    <Card sx={{ maxWidth: 300,}} key={id}>
      <CardMedia component="img" alt={title} height="300" image={img} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          ${price}
        </Typography>
        {quantity && <Typography  gutterBottom variant="h6" component="div">
          cantidad:{quantity}
        </Typography>}
      </CardContent>
      {/* revisar como quiero mostrarlo */}
      <CardActions>
      {isItemDetail && isProductInCart&& <Link to={`/`}>  <Button size="small"> Volver{isItemDetail?`Volver`:`Ver Detalle`}  </Button>
        </Link>}
        {!isItemDetail && !isProductInCart&& <Link to={`/itemDetail/${id}`}>  <Button size="small"> Ver Detalle  </Button>
        </Link>}
      { isProductInCart &&  <Button onClick={()=>deleteById(id)} > ELiminar del carrito </Button>}
      </CardActions>
     <Button ></Button> 
    </Card>
  );
};
export default ProductCard;
