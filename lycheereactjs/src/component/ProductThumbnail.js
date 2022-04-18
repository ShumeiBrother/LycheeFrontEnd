import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Rating,
} from "@mui/material";

import avocado from "../static/images/products/avocado.jpeg";

const ProductThumbnail = () => {
  return (
    <Card sx={{ maxWidth: 300 ,maxHeight:300}}>
      <CardActionArea onClick={()=>alert("hello")}>
        <CardMedia
          component="img"
          height="140"
          image={avocado}
          alt="green avocado"
        />
        <CardContent>
          <Rating
            name="simple-controlled"
            //   value={value}
            //   onChange={(event, newValue) => {
            //     setValue(newValue);
            //   }}
          />
          <Typography variant="h6" color="red">¥250</Typography>
          <Typography gutterBottom variant="h5" component="div" color="#E8630A">
            Avocado
          </Typography>
          <Typography variant="body2">
            Đây là quả bơ, dùng để làm sinh tố hoặc ghép vào với nhau để thành rapper.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ProductThumbnail;
