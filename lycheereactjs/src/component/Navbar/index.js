import { AppBar, styled, Toolbar } from "@mui/material";
import CustomerInfo from "./CustomerInfo";
import FunctionBar from "./FunctionBar";
import Logo from "./Logo";
import MiddleBar from "./MiddleBar";

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
          <MiddleBar />
          <FunctionBar />
          <CustomerInfo />
        </StyledToolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
