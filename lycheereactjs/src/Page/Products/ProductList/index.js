import styled from "@emotion/styled";
import { Box, Grid } from "@mui/material";
import { grey } from "@mui/material/colors";
import { Fragment, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Products from "../../../DUMMY_DATA/Products";
import productApi from "../../../HTTP_Request/ProductsAPI";
import ProductThumbnail from "./ProductThumbnail";

const StyledBox = styled(Box)({
  display: "flex",
  paddingInline: 20,
  paddingBlock: 10,
  backgroundColor: grey[100],
  height: "100vh",
  overflow: "scroll",
});

function ProductList() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const category = queryParams.get("category");
  console.log(category);
  // let productsFiltered = [...Products];
  // if (category)
  //   productsFiltered = productsFiltered.filter(
  //     (product) => product.category === category
  //   );
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProduct = async () => {
      const response = await productApi.getAllProductThumbnails();
      setProducts(response);
    };
    fetchProduct();
  }, [category]);
  return (
    <Fragment>
      <StyledBox flex={5}>
        <Grid container spacing={2}>
          {products.map((product) => {
            return (
              <Grid item xs={12} sm={6} md={4} lg={3} key={product.productId}>
                <ProductThumbnail product={product} />
              </Grid>
            );
          })}
          <Box sx={{ height: { xs: 550, sm: 450 } }}></Box>
        </Grid>
      </StyledBox>
    </Fragment>
  );
}

export default ProductList;
