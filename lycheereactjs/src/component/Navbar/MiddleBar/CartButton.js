import { Badge, IconButton } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useDispatch, useSelector } from "react-redux";
import { cartAction } from "../../../Redux/CartSlice";
function Cart() {
  const dispatch = useDispatch();
  function handleClick() {
    dispatch(cartAction.open());
  }
  const totalQuantity = useSelector((redux) => redux.cart.totalQuantity);
  return (
    <Badge
      badgeContent={totalQuantity}
      color="error"
      sx={{ mx: 1, cursor: "pointer" }}
      onClick={handleClick}
    >
      <ShoppingCartOutlinedIcon
        sx={{
          color: "green",
          fontSize: 30,
        }}
      />
    </Badge>
  );
}
export default Cart;
