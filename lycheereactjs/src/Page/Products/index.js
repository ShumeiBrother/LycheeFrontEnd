import styled from "@emotion/styled";
import { Box, Stack } from "@mui/material";
import { grey } from "@mui/material/colors";
import { Route, Routes } from "react-router-dom";
import LeftBar from "../../Component/LeftBar";
import ProductDetail from "./ProductDetail";
import ProductList from "./ProductList";

const StyledBox = styled(Box)({
  display: "flex",
  paddingInline: 20,
  paddingBlock: 10,
  backgroundColor: grey[100],
  // flexWrap: "wrap",
  height: "100vh",
  overflow: "auto",
});

function ProductPage() {
  return (
    <Stack direction={"row"}>
      <LeftBar />
      <StyledBox
        flex={5}
        onScroll={(e) => {
          // console.log(e.target.scrollTop);
          // console.log(e.target.clientHeight);
          // console.log(e.target.offsetTop);
          // console.log(e.target.offsetHeight);
        }}
      >
        <Routes>
          {/* <Route exact path="/" element={<Navigate to="all" />} /> */}
          <Route path="/category/*" element={<ProductList />} />
          <Route path="/detail/*" element={<ProductDetail />} />
        </Routes>
      </StyledBox>
    </Stack>
  );
}
export default ProductPage;
