import {
  Badge,
  ListItemIcon,
  ListItemText,
  MenuItem,
  MenuList,
} from "@mui/material";
import Menu from '@mui/material/Menu';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { ShoppingCart, Sell, AccountCircle, Contactless, Home, LocalOffer } from "@mui/icons-material";

const Navbar = () => {
  return (
    <>
       <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (   
      <MenuList style={{ display: "flex", gap: 2 }}>
         <MenuItem>
         <img alt="logo PetPal" src="public/petpal-logo.png" style={{width:"100px"}}/>
        </MenuItem>
        <MenuItem>
        </MenuItem>
   
        <MenuItem>
          <ListItemIcon>
            <Home fontSize="small" sx={{paddingRight:"5px"}}/>
            <ListItemText >Productos</ListItemText>
          </ListItemIcon>
        </MenuItem>
        <MenuItem>
          {" "}
          <ListItemIcon>
            <LocalOffer fontSize="small"  sx={{paddingRight:"5px"}}/>
            <ListItemText>Ofertas</ListItemText>
          </ListItemIcon>
        </MenuItem>
        <MenuItem  {...bindTrigger(popupState)}>
          {" "}
          <ListItemIcon>
            <Contactless fontSize="small" sx={{paddingRight:"5px"}} />
            <ListItemText >Categorias</ListItemText>
          </ListItemIcon>
        </MenuItem>
        <Menu {...bindMenu(popupState)}>
            <MenuItem onClick={popupState.close}>Perritos</MenuItem>
            <MenuItem onClick={popupState.close}>Gatitos</MenuItem>
           
          </Menu>
        <MenuItem>
          {" "}
          <ListItemIcon>
            < AccountCircle fontSize="small" />
            <ListItemText sx={{paddingRight:"5px"}}>Perfil</ListItemText>
          </ListItemIcon>
        </MenuItem>
        <MenuItem>
          {" "}
          <Badge badgeContent={4} color="primary">
            <ShoppingCart color="action" />
          </Badge>
        </MenuItem>
      </MenuList>
      )}
    </PopupState>
    </>
  );
};

export default Navbar;
