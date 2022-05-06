import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Rating,
  Stack,
  IconButton,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Box } from "@mui/system";

function ProductThumbnail(props) {
  const { product } = props;
  const linkImage = require("../../static/images/products/".concat(
    product.image
  ));
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
                sx={{fontSize:30}}
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
