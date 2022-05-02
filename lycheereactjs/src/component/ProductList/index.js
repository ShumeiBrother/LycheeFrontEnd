import { Box, Grid, Stack } from "@mui/material";
import ProductThumbnail from "./ProductThumbnail";
import { grey } from "@mui/material/colors";
import styled from "@emotion/styled";
import { Fragment } from "react";
import Products from "../../dummy_data/Products";

const StyledBox = styled(Box)({
  display: "flex",
  paddingInline: 20,
  paddingBlock: 10,
  backgroundColor: grey[100],
  height: "100vh",
  overflow: "scroll",
});

function ProductList() {
  return (
    <Fragment>
      <StyledBox flex={5}>
        <Grid container spacing={2}>
          {Products.map((product) => {
            return (
              <Grid item xs={12} sm={6} md={4}>
                <ProductThumbnail key={product.id} product={product} />
              </Grid>
            );
          })}
        </Grid>
      </StyledBox>
    </Fragment>
  );
}

export default ProductList;
