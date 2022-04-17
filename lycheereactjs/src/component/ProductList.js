import {
  Button,
  Grid,
  TextField,
  Typography,
  Container,
  AppBar,
  Toolbar,
} from "@mui/material";
import { Fragment } from "react";
import SVGOrange from "./UIComponent/SVG/SVGOrange";

function Navbar() {
  return (
    <Fragment>
      <AppBar>
        <Toolbar>
          <SVGOrange />
          <Typography variant="h3" sx={{ color: "pink" }}>
            Lychee
          </Typography>
        </Toolbar>
      </AppBar>
    </Fragment>
  );
}

export default Navbar;
