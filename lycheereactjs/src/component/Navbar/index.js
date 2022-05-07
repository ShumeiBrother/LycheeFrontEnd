import { AppBar, styled, Toolbar } from "@mui/material";
import CustomerInfo from "./CustomerInfo";
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
          {/* <Cart /> */}
          <CustomerInfo />
        </StyledToolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
