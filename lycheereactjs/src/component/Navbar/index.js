import { AppBar, styled, Toolbar } from "@mui/material";
import Cart from "./Cart";
import CustomerInfo from "./CustomerInfo";
import FunctionBar from "./FunctionBar";
import Logo from "./Logo";
import MiddleBar from "./MiddleBar";

const StyledToolbar = styled(Toolbar)({
  backgroundColor: "white",
  justifyContent: "space-around",
});

function Navbar() {
  return (
    <div>
      <AppBar position="sticky" sx={{ backgroundColor: "red" }}>
        <StyledToolbar>
          <Logo />
          <MiddleBar />
          <FunctionBar />
          {/* <Cart /> */}
          <CustomerInfo />
        </StyledToolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
