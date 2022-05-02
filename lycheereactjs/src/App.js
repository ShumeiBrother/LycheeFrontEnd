import { Stack, ThemeProvider } from "@mui/material";
import { Box } from "@mui/system";
import { Route, Routes } from "react-router-dom";
import LeftBar from "./component/LeftBar";
import Navbar from "./component/Navbar/";
import ProductList from "./component/ProductList";
import ConfiguredTheme from "./theme";

function App() {
  return (
    <ThemeProvider theme={ConfiguredTheme}>
      <Box>
        <Navbar />
        <Routes>
          <Route
            path="/products/*"
            element={
              <Stack direction={"row"}>
                <LeftBar />
                <ProductList />
              </Stack>
            }
          />
        </Routes>
      </Box>
    </ThemeProvider>
  );
}

export default App;
