import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Rating,
} from "@mui/material";

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
          <Rating
            value={product.rating}
            precision={0.1}
            //   value={value}
            //   onChange={(event, newValue) => {
            //     setValue(newValue);
            //   }}
          />
          <Typography variant="h6" color="red">
            ¥{product.price}
          </Typography>
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
