import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Rating,
  Stack,
  IconButton,
  Fab,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Box } from "@mui/system";
import { useDispatch } from "react-redux";
import { cartAction } from "../../Redux/CartSlice";

function ProductThumbnail(props) {
  const dispatch = useDispatch();
  const { product } = props;
  const linkImage = require("../../static/images/products/".concat(
    product.image
  ));
  function handleAddItem(item) {
    dispatch(cartAction.addToCart({ item: item, quantity: 1 }));
  }
  return (
    <Card sx={{ maxWidth: 500, height: 310 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={linkImage}
          alt={product.category}
          onClick={() => alert("hello")}
        />
        <CardContent>
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
          >
            <Stack spacing={1}>
              <Rating
                value={product.rating}
                precision={0.1}
                sx={{ fontSize: 30 }}
                //   value={value}
                //   onChange={(event, newValue) => {
                //     setValue(newValue);
                //   }}
              />
              <Typography variant="h5" color="red">
                ¥{product.price}
              </Typography>
            </Stack>
            <Stack>
              <IconButton>
                <AddShoppingCartIcon
                  sx={{ width: 50, height: 50 }}
                  color="success"
                  onClick={() => handleAddItem(product)}
                />
              </IconButton>
            </Stack>
          </Box>
          <Typography gutterBottom variant="h5" component="div" color="#E8630A">
            {product.name}
          </Typography>
          <Typography variant="body2">{product.description}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default ProductThumbnail;
