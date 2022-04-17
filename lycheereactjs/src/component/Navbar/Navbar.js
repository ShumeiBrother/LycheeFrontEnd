import {
  Button,
  Grid,
  TextField,
  Typography,
  Container,
  AppBar,
  Toolbar,
  styled,
  Box,
  InputBase,
  IconButton,
  ButtonGroup,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Fragment } from "react";
import SVGOrange from "../UIComponent/SVG/SVGOrange";
import SVGOrange2 from "../UIComponent/SVG/SVGOrange2";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import FunctionBar from "./FunctionBar";
import CustomerInfo from "./CustomerInfo";

const StyledToolbar = styled(Toolbar)({
  backgroundColor: "white",
  justifyContent: "space-between",
});

const StyledTypography = styled(Typography)({
  color: "red",
  marginLeft: 10,
});

function Navbar() {
  return (
    <Fragment>
      <AppBar>
        <StyledToolbar>
          <Logo />
          <SearchBar />
          <FunctionBar/>
          <CustomerInfo/>
        </StyledToolbar>
      </AppBar>
    </Fragment>
  );
}

export default Navbar;
