import { AppBar, Toolbar, styled } from "@mui/material";
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
    <div>
      <AppBar position="sticky" sx={{ backgroundColor: "red" }}>
        <StyledToolbar>
          <Logo />
          <SearchBar />
          <FunctionBar />
          <CustomerInfo />
        </StyledToolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
