import { Button, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
function Footer() {
  const items = useSelector((redux) => redux.cart.items);
  const totalQuantity = useSelector((redux) => redux.cart.totalQuantity);
  const totalPrice = useSelector((redux) => redux.cart.totalPrice);
  // let totalQuantity = 0;
  // let totalPrice = 0;
  // items.forEach((item) => {
  //   totalQuantity += item.quantity;
  //   totalPrice += item.quantity * item.price;
  // });
  return (
    <Fragment>
      <Box sx={{ position: "sticky", bottom: 0, backgroundColor: "white" }}>
        <Stack display="flex" justifyContent="flex-end" direction="row">
          <Stack mr={5}>
            <Typography variant="h5">Sub-Total</Typography>
            {totalQuantity} items
          </Stack>
          <Stack>
            <Typography variant="h3" color="brown">
              ¥{totalPrice}
            </Typography>
          </Stack>
        </Stack>
        <Stack>
          <Button variant="outlined" size="large" color="success">
            Check Out
          </Button>
        </Stack>
      </Box>
    </Fragment>
  );
}
export default Footer;
