import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";

const ProductCard = ({id, title, description, price, img}) => {
  return (
    <Card sx={{ maxWidth: 345 }} key={id}>
      <CardMedia component="img" alt={title} height="230" image={img} />
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
        <Button size="small">Compartir</Button>
        <Button size="small">Ver Detalle</Button>
      </CardActions>
    </Card>
  );
};
export default ProductCard;
