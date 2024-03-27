import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";

const ProductCard = (props) => {
  const { id, title, description, price, img } = props;
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
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};
export default ProductCard;
