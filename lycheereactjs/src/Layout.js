import { Box } from "@mui/system";
import Cart from "./Component/Cart";
import Navbar from "./Component/Navbar";
// import MetaMessenger from "./Component/UIComponent/Common/MetaMessenger";
function Layout(props) {
  return (
    <Box>
      <Navbar />
      <Cart />
      {/* <MetaMessenger /> */}
      {props.children}
    </Box>
  );
}
export default Layout;
