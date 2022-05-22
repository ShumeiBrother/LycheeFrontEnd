import { Box } from "@mui/system";
import Cart from "./component/Cart";
import Navbar from "./component/Navbar/";
import MetaMessenger from "../src/component/UIComponent/Common/MetaMessenger";
function Layout(props) {
  return (
    <Box>
      <Navbar />
      <Cart />
      <MetaMessenger />
      {props.children}
    </Box>
  );
}
export default Layout;
