import { Stack } from "@mui/material";
import { Navigate, Route, Routes } from "react-router-dom";
import LeftBar from "../component/LeftBar";
import ProductList from "../component/ProductList";

function ProductPage() {
  return (
    <Stack direction={"row"}>
      <LeftBar />
      <Routes>
        <Route path="/" element={<Navigate to="all" />} />
        <Route path=":categoryName" element={<ProductList />} />
      </Routes>
    </Stack>
  );
}
export default ProductPage;
