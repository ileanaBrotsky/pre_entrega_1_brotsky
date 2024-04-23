import {
  ListItemIcon,
  ListItemText,
  MenuItem,
  MenuList,
} from "@mui/material";
import Menu from "@mui/material/Menu";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import { Category, AccountCircle, LocalOffer,} from "@mui/icons-material";
import CartWidget from "../../common/cartWidget/CartWidget";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <PopupState variant="popover" popupId="demo-popup-menu">
        {(popupState) => (
          <MenuList
            style={{ display: "flex", gap: 2 }}
            sx={{ position: "sticky" }}
          >
            <MenuItem>
            <Link to={"/"}>
              <img
                alt="logo PetPal"
                src="/petpal-logo.png"
                style={{ width: "100px" }}
              />
               </Link>
            </MenuItem>
            <MenuItem></MenuItem>

            {/* <MenuItem>
              <ListItemIcon>
                <Home fontSize="small" sx={{ paddingRight: "5px" }} />
                <ListItemText>Productos</ListItemText>
              </ListItemIcon>
            </MenuItem> */}
            <MenuItem>
              {" "}
              <ListItemIcon>
                <LocalOffer fontSize="small" sx={{ paddingRight: "5px" }} />
                <ListItemText>Ofertas</ListItemText>
              </ListItemIcon>
            </MenuItem>
            <MenuItem {...bindTrigger(popupState)}>
              {" "}
              <ListItemIcon>
                <Category fontSize="small" sx={{ paddingRight: "5px" }} />
                <ListItemText>Categorias</ListItemText>
              </ListItemIcon>
            </MenuItem>
            <Menu {...bindMenu(popupState)}>
             <Link to={"/category/juguetes-caninos"}><MenuItem onClick={popupState.close}>Perritos</MenuItem></Link>
             <Link to={"/category/juguetes-felinos"}><MenuItem onClick={popupState.close}>Gatitos</MenuItem></Link>
            </Menu>
            <MenuItem>
              {" "}
              <ListItemIcon>
                <AccountCircle fontSize="small" />
                <ListItemText sx={{ paddingRight: "5px" }}>Perfil</ListItemText>
              </ListItemIcon>
            </MenuItem>
            <MenuItem>
              {" "}
             <CartWidget/>
            </MenuItem>
          </MenuList>
        )}
      </PopupState>
    </>
  );
};

export default Navbar;
