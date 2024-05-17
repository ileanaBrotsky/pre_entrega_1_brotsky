import {Card,CardActions,CardContent,CardMedia,Button,Typography,} from "@mui/material";

import { Link } from "react-router-dom";
const ProductCard = ({id, title, description, price, img, stock, isItemDetail, quantity, deleteById, isProductInCart}) => {
  return (
    <>
    { isProductInCart &&  <Card sx={({height:450, width:250,margin:3, backgroundColor:"#FAEFDD"})} key={id}>
      <CardMedia sx={{ width:"100%", height:"100%",minWidth:200, maxHeight:150, objectFit:"cover"}} component="img" alt={title} height="300" image={img} />
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
      <Button onClick={()=>deleteById(id)} > ELiminar del carrito </Button>
      </CardActions>
    </Card>
      }     

{isItemDetail&&
    <Card sx={{height:600, width:700,margin:3, backgroundColor:"#FAEFDD"}} key={id}>
      <CardMedia sx={{ width:"100%", height:"100%", maxHeight:350, objectFit:"cover"}} component="img" alt={title} height="300" image={img} />
      <CardContent >
        <Typography gutterBottom variant="h5" component="div" >
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
      <Link to={`/`}>  <Button size="small"> Volver </Button>
        </Link>
      </CardActions>
     <Button ></Button> 
    </Card>
  }
  {!isItemDetail&& !isProductInCart&&
    <Card sx={({minHeight:450, maxWidth:300,margin:3, backgroundColor:"#FAEFDD"})} key={id}>
      <CardMedia sx={{ width:"100%", height:"100%", maxHeight:150, objectFit:"cover"}} component="img" alt={title} height="300" image={img} />
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
        <Link to={`/itemDetail/${id}`}>  <Button size="small"> Ver Detalle  </Button>
        </Link>
      </CardActions>
    </Card>
  }
    </>
   
  );
};
export default ProductCard;
