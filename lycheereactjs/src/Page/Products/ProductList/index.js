import styled from "@emotion/styled";
import { Box, Grid } from "@mui/material";
import { grey } from "@mui/material/colors";
import { Fragment, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import productApi from "../../../HTTP_Request/ProductsAPI";
import ProductThumbnail from "./ProductThumbnail";
import InfiniteScroll from "react-infinite-scroller";
import { Button, CircularProgress } from "@mui/material";

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
  const categoryId = queryParams.get("categoryId");
  console.log(categoryId);
  // let productsFiltered = [...Products];
  // if (category)
  //   productsFiltered = productsFiltered.filter(
  //     (product) => product.category === category
  //   );
  const [page, setPage] = useState(1);
  const [hasMore, setHasmore] = useState(true);
  const [fetching, setFetching] = useState(false);
  const [products, setProducts] = useState([]);
  // useEffect(() => {
  //   const fetchProduct = async () => {
  //     setPage(1);
  //     const params = categoryId && {
  //       categoryId: categoryId,
  //       itemPerPage: 10,
  //       page: 1,
  //     };
  //     const response = await productApi.getProductThumbnails(params);
  //     setProducts(response);
  //   };
  //   fetchProduct();
  // }, [categoryId]);
  async function loadMore() {
    console.log("loadmore");
    if (fetching) return;
    setFetching(true);
    setPage(page + 1);
    const response = await productApi.getProductThumbnails({
      itemPerPage: 10,
      page: page,
      categoryId: categoryId,
    });
    console.log(response);
    if (response.length == 0) {
      console.log("no has more");
      setHasmore(false);
    }
    setProducts([...products, ...response]);
    setFetching(false);
  }
  return (
    // <Box height={700} overflow="auto">
    <InfiniteScroll
      pageStart={1}
      loadMore={loadMore}
      hasMore={hasMore}
      loader={<CircularProgress color="success" />}
    >
      <StyledBox flex={5}>
        <Grid container spacing={2}>
          {products.map((product) => {
            return (
              <Grid item xs={12} sm={6} md={4} lg={3} key={product.productId}>
                <ProductThumbnail product={product} />
              </Grid>
            );
          })}
          {/* <Box sx={{ height: { xs: 550, sm: 450 } }}></Box> */}
        </Grid>
      </StyledBox>
    </InfiniteScroll>
  );
}

export default ProductList;
