import { Grid } from "@mui/material";
import { Outlet } from "react-router-dom";
import Footer from "./footer/Footer";
import Navbar from "./navbar/Navbar";

export const Layout = () => {
  return (

      <Grid container>
        <Grid sx={{ backgroundColor: "whitesmoke" }} item xs={12}>
          <Navbar />
        </Grid>
        <Outlet/>
        <Footer />
      </Grid>
  );
};
