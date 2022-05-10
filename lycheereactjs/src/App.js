import { Stack, ThemeProvider } from "@mui/material";
import { Box } from "@mui/system";
import { Navigate, Route, Routes } from "react-router-dom";
import Cart from "./component/Cart";
import LeftBar from "./component/LeftBar";
import Navbar from "./component/Navbar/";
import ProductList from "./component/ProductList";
import MetaMessenger from "./page/MetaMessenger";
import ProductDetail from "./page/ProductDetail";
import ConfiguredTheme from "./theme";

function App() {
  return (
    <ThemeProvider theme={ConfiguredTheme}>
      <Box>
        <Navbar /> <Cart />
        {/* <MetaMessenger /> */}
        <Routes>
          <Route path="/" element={<Navigate to="/products" />}></Route>
          <Route
            path="/products/*"
            element={
              <Stack direction={"row"}>
                <LeftBar />
                <ProductList />
              </Stack>
            }
          />
          <Route path="/product/*" element={<ProductDetail />}></Route>
        </Routes>
      </Box>
    </ThemeProvider>
  );
}

export default App;
