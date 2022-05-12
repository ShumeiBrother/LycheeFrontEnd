import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import RemoveCircleOutlinedIcon from "@mui/icons-material/RemoveCircleOutlined";
import { Divider, Link, Rating, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Fragment } from "react";
import avocadoImage from "../../static/images/products/avocado.jpeg";
import { useDispatch, useSelector } from "react-redux";
import { cartAction } from "../../Redux/CartSlice";

function Items() {
  const dispatch = useDispatch();
  const items = useSelector((redux) => redux.cart.items);
  function handleAddItem(item) {
    dispatch(cartAction.addToCart({ item: item, quantity: 1 }));
  }
  function handleDecreaseItem(item) {
    dispatch(cartAction.decreaseFromCart({ item: item, quantity: 1 }));
  }
  function handleRemoveItem(item) {
    dispatch(cartAction.removeFromCart({ item: item }));
  }
  return items.map((item) => {
    const linkImage = require("../../static/images/products/".concat(
      item.image
    ));
    return (
      <Fragment key={item.id}>
        <Box display="flex" paddingInline={2}>
          <Stack>
            <img
              src={linkImage}
              width={120}
              height={120}
              style={{ borderRadius: 10 }}
            />
            <Rating
              value={item.rating}
              precision={0.5}
              sx={{ fontSize: 20 }}
              readOnly
              //   value={value}
              //   onChange={(event, newValue) => {
              //     setValue(newValue);
              //   }}
            />
          </Stack>
          <Stack marginInline={1}>
            <Typography variant="h4" color="#E8630A">
              {item.name}
            </Typography>
            <Stack>
              <Typography variant="h5" color="brown">
                ¥{item.price}
              </Typography>
              <Stack direction="row" spacing={1} mt={2}>
                <RemoveCircleOutlinedIcon
                  color="error"
                  sx={{ fontSize: 40 }}
                  onClick={() => {
                    handleDecreaseItem(item);
                  }}
                />
                <Typography variant="h4" textAlign="center">
                  {item.quantity}
                </Typography>
                <AddCircleOutlinedIcon
                  color="success"
                  sx={{ fontSize: 40 }}
                  onClick={() => {
                    handleAddItem(item);
                  }}
                />
              </Stack>
            </Stack>
          </Stack>
          <Stack justifyContent="center" alignItems="end" spacing={1}>
            <Link fontSize={20} color="primary" sx={{ cursor: "pointer" }}>
              Save Later
            </Link>
            <Link
              fontSize={20}
              color="error"
              sx={{ cursor: "pointer" }}
              onClick={() => handleRemoveItem(item)}
            >
              Remove
            </Link>
          </Stack>
        </Box>
        <Divider sx={{ my: 1 }} />
      </Fragment>
    );
  });
}

export default Items;
