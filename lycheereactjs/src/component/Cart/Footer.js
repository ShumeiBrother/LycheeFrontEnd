import { Button, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
function Footer() {
  const items = useSelector((redux) => redux.cart.items);
  const totalQuantity = items.reduce(
    (prev, current) => prev.quantity + current.quantity
  );
  const totalPrice = items.reduce(
    (prev, current) =>
      prev.price * prev.quantity + current.price * current.quantity
  );
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
