import { useDispatch, useSelector } from "react-redux";
import { cartAction } from "../../Redux/CartSlice";
import CommonModal from "../UIComponent/Common/CommonModal";
import Footer from "./Footer";
import Items from "./Items";
function Cart() {
  const dispatch = useDispatch();
  const open = useSelector((redux) => redux.cart.open);
  const setOpen = (openState) => dispatch(cartAction.setOpen(openState));
  return (
    <CommonModal open={open} setOpen={setOpen} width={400}>
      <Items />
      <Footer />
    </CommonModal>
  );
}

export default Cart;
