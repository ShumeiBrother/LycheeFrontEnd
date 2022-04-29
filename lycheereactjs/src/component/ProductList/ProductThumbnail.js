import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Rating,
} from "@mui/material";

import avocado from "../../static/images/products/avocado.jpeg";

function ProductThumbnail() {
  return (
    <Card sx={{ maxWidth: 500, maxHeight: 500 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={avocado}
          alt="green avocado"
          onClick={() => alert("hello")}
        />
        <CardContent>
          <Rating
            name="simple-controlled"
            value={4.5}
            precision={0.1}
            //   value={value}
            //   onChange={(event, newValue) => {
            //     setValue(newValue);
            //   }}
          />
          <Typography variant="h6" color="red">
            ¥250
          </Typography>
          <Typography gutterBottom variant="h5" component="div" color="#E8630A">
            Avocado
          </Typography>
          <Typography variant="body2">
            Đây là quả bơ, dùng để làm sinh tố hoặc ghép vào với nhau để thành
            rapper.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default ProductThumbnail;
