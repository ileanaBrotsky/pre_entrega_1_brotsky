import {Card,CardActions,CardContent,CardMedia,Button,Typography,} from "@mui/material";

import { Link } from "react-router-dom";
const ProductCard = ({id, title, description, price, img, stock, isOneProduct}) => {
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
      </CardContent>
      <CardActions>
        <Link to={isOneProduct?`/`:`ItemDetail/${id}`}> <Button size="small"> {isOneProduct?`Volver`:`Ver Detalle`}  </Button></Link>
      
        {/* <CounterContainer stock={stock} onAdd={onAdd} /> */}
      </CardActions>
    </Card>
  );
};
export default ProductCard;
