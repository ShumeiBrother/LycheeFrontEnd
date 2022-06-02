import styled from "@emotion/styled";
import { Box, Grid } from "@mui/material";
import { grey } from "@mui/material/colors";
import { Fragment, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import productApi from "../../../HTTP_Request/ProductsAPI";
import ProductThumbnail from "./ProductThumbnail";
import InfiniteScroll from "react-infinite-scroller";
import { Button, CircularProgress } from "@mui/material";

function ProductList() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const categoryId = queryParams.get("categoryId");
  console.log(categoryId);
  const [page, setPage] = useState(0);
  const [hasMore, setHasmore] = useState(true);
  const [fetching, setFetching] = useState(false);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function zyun() {
      const response = await productApi.getProductThumbnails({
        itemPerPage: 10,
        page: 0,
        categoryId: categoryId,
      });
      console.log(response);
      setPage(0);
      setProducts([...response]);
    }
    zyun();
  }, [categoryId]);
  async function loadMore() {
    const response = await productApi.getProductThumbnails({
      itemPerPage: 10,
      page: page,
      categoryId: categoryId,
    });
    console.log(response);
    setProducts([...products, ...response]);
    // setPage(page + 1);
  }
  return (
    // <InfiniteScroll
    //   pageStart={0}
    //   loadMore={loadMore}
    //   hasMore={hasMore}
    //   loader={<CircularProgress color="success" />}
    //   threshold={500}
    // >
    <Fragment>
      <Grid
        container
        spacing={2}
        height="100%"
        onScroll={() => {
          console.log("scrolling");
        }}
      >
        {products.map((product) => {
          return (
            <Grid item xs={12} sm={6} md={4} lg={3} key={product.productId}>
              <ProductThumbnail product={product} />
            </Grid>
          );
        })}
        <Grid item xs={12} sx={{ height: { xs: 200, sm: 150 } }}>
          <Button
            variant="outlined"
            width="100%"
            onClick={loadMore}
            size="large"
          >
            Xem Thêm
          </Button>
        </Grid>
        {/* <Box></Box> */}
      </Grid>
    </Fragment>
  );
}

export default ProductList;
