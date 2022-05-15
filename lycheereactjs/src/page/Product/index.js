import { Stack } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import LeftBar from "../../component/LeftBar";
import ProductDetail from "./ProductDetail";
import ProductList from "./ProductList";

function ProductPage() {
  return (
    <Stack direction={"row"}>
      <LeftBar />
      <Routes>
        {/* <Route exact path="/" element={<Navigate to="all" />} /> */}
        <Route path="/" element={<ProductList />} />
        <Route path="/detail/*" element={<ProductDetail />} />
      </Routes>
    </Stack>
  );
}
export default ProductPage;
