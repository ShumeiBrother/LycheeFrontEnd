import { Badge, IconButton } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useDispatch } from "react-redux";
import { cartAction } from "../../../Redux/CartSlice";
function Cart() {
  const dispatch = useDispatch();
  function handleClick() {
    dispatch(cartAction.open());
  }
  return (
    <Badge badgeContent={4} color="error" sx={{ mx: 1,cursor:"pointer" }} onClick={handleClick}>
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
