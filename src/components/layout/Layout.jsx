import { Grid } from "@mui/material";
import Footer from "./footer/Footer";
import Navbar from "./navbar/Navbar";

export const Layout = ({ children }) => {
  return (
    <>
      <Grid container>
        <Grid sx={{ backgroundColor: "whitesmoke" }} item xs={12}>
          <Navbar />
        </Grid>
        {children}
        <Footer />
      </Grid>
    </>
  );
};
