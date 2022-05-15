import { Box } from "@mui/system";
import Cart from "./component/Cart";
import Navbar from "./component/Navbar/";
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
