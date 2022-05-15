import { ThemeProvider } from "@mui/material";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import ProductPage from "./page/Product/";
import ConfiguredTheme from "./theme";

function App() {
  return (
    <ThemeProvider theme={ConfiguredTheme}>
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="/product" />}></Route>
          <Route path="/product/*" element={<ProductPage />} />
        </Routes>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
