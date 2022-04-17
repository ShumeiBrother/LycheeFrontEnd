import {
  AppBar,
  Toolbar,
  styled,
} from "@mui/material";
import { Fragment } from "react";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import FunctionBar from "./FunctionBar";
import CustomerInfo from "./CustomerInfo";

const StyledToolbar = styled(Toolbar)({
  backgroundColor: "white",
  justifyContent: "space-between",
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
