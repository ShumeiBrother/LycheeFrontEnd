import { ThemeProvider } from "@mui/material";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import ProductPage from "./Page/Products/";
import ConfiguredTheme from "./theme";

function App() {
  return (
    <ThemeProvider theme={ConfiguredTheme}>
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="/products" />}></Route>
          <Route path="/products/*" element={<ProductPage />} />
        </Routes>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
