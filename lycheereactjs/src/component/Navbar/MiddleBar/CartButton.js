import { Badge, IconButton } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
function Cart() {
  return (
    <Badge badgeContent={4} color="error" sx={{mx:1}}>
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
