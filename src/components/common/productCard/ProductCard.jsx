
// import { Grid } from "@mui/material"
// import "./productCard.css"
// const ProductCard = (props) => {
//     const{title, description, price, img}=props
//   return (
//     <Grid item className="card_container" x={12}sm={4} md={2}>
//       <h2 className="card_title">{title}</h2>
//       <img className="card_img"
//             srcSet={`${img}?w=248&fit=crop&auto=format&dpr=2 2x`}
//             src={`${img}?w=248&fit=crop&auto=format`}
//             alt={title}
//             loading="lazy"
//           />
//       <p className="card_description">{description}</p>
//     <h4 className="card_price">${price}</h4>
//     </Grid>
//   );
// };

// export default ProductCard;

import {Card, CardActions, CardContent, CardMedia, Button, Typography} from '@mui/material';


const ProductCard = (props) => {
     const{id, title, description, price, img}=props
  return (
    <Card sx={{ maxWidth: 345 }} key={id}>
      <CardMedia
        component="img"
        alt={title}
        height="230"
        image={img}
      />
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
}
export default ProductCard;