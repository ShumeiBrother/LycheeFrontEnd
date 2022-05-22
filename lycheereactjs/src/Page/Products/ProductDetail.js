import styled from "@emotion/styled";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import RemoveCircleOutlinedIcon from "@mui/icons-material/RemoveCircleOutlined";
import { Rating, Stack, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { Box } from "@mui/system";
import { useLocation } from "react-router-dom";
import Products from "../../DUMMY_DATA/Products";

const StyledBox = styled(Box)({
  display: "flex",
  paddingInline: 20,
  paddingBlock: 10,
  backgroundColor: grey[100],
  height: "100vh",
  overflow: "scroll",
});

const StyledImage = styled("img")(({ theme }) => ({
  borderRadius: 30,
  width: "100%",
  height: "70%",
  [theme.breakpoints.up("sm")]: {
    height: "70%",
  },
  [theme.breakpoints.up("md")]: {
    height: "80%",
  },
}));

function ProductDetail() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const productId = queryParams.get("id");
  let products = [...Products];
  let product;
  if (productId)
    product = products.filter((product) => product.id === productId)[0];
  console.log(product);
  const linkImage = require("../../Static/Images/Products/".concat(
    product.image
  ));
  return (
    <StyledBox flex={5}>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        width="100%"
        spacing={{ xs: -10, sm: 3 }}
      >
        <Box flex={1}>
          <StyledImage src={linkImage} />
          <Rating
            value={4}
            precision={0.5}
            sx={{ fontSize: 30 }}
            //   value={value}
            //   onChange={(event, newValue) => {
            //     setValue(newValue);
            //   }}
          />
        </Box>
        <Box flex={1}>
          <Typography variant="h6" color="primary">
            {product.category}
          </Typography>
          <Stack
            direction={{ xs: "row", sm: "column" }}
            justifyContent="space-between"
          >
            <Typography variant="h4" color="#E8630A" my={1}>
              {product.name}
            </Typography>
            <Stack direction="row" spacing={2}>
              <RemoveCircleOutlinedIcon color="error" sx={{ fontSize: 40 }} />
              <Typography variant="h4" textAlign="center">
                3
              </Typography>
              <AddCircleOutlinedIcon color="success" sx={{ fontSize: 40 }} />
            </Stack>
          </Stack>
          <Typography variant="h5" color="brown">
            {product.price}
          </Typography>
          <Typography>{product.description}</Typography>
        </Box>
      </Stack>
      <Box sx={{ height: { xs: 550, sm: 450 } }}></Box>
    </StyledBox>
  );
}
export default ProductDetail;