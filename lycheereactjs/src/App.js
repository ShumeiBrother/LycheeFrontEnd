import { Stack, ThemeProvider } from "@mui/material";
import ConfiguredTheme from "./theme";
import Navbar from "./component/Navbar/";
import LeftBar from "./component/LeftBar";
import ProductList from "./component/ProductList";
import { Box } from "@mui/system";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Fragment } from "react";
import ProductPage from "./page/ProductPage";

function App() {
  return (
    <ThemeProvider theme={ConfiguredTheme}>
      <Box>
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="/products/all" />} />
          <Route path="/products/*" element={<ProductPage />} />
        </Routes>
      </Box>
    </ThemeProvider>
  );
}

export default App;
