import { CircularProgress, Grid } from "@mui/material";
import { Box } from "@mui/system";
import { Fragment, useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroller";
import { useLocation } from "react-router-dom";
import productApi from "../../../HTTP_Request/ProductsAPI";
import ProductThumbnail from "./ProductThumbnail";
function ProductList() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const categoryId = queryParams.get("categoryId");
  const [page, setPage] = useState(0);
  const [hasMore, setHasmore] = useState(true);
  const [fetching, setFetching] = useState(false);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    setPage(0);
    setHasmore(true);
    setFetching(false);
    setProducts([]);
  }, [categoryId]);
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
    <Box height={700} overflow="auto">
      <InfiniteScroll
        pageStart={0}
        loadMore={loadMore}
        hasMore={hasMore}
        loader={<CircularProgress color="success" />}
        threshold={50}
        useWindow={false}
      >
        <Fragment>
          <Grid container spacing={2}>
            {products.map((product) => {
              return (
                <Grid item xs={12} sm={6} md={4} lg={3} key={product.productId}>
                  <ProductThumbnail product={product} />
                </Grid>
              );
            })}
          </Grid>
        </Fragment>
      </InfiniteScroll>
    </Box>
  );
}

export default ProductList;
