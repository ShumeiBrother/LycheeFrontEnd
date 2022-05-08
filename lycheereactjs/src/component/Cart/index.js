import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import RemoveCircleOutlinedIcon from "@mui/icons-material/RemoveCircleOutlined";
import {
  Button,
  Divider,
  Link,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import avocadoImage from "../../static/images/products/avocado.jpeg";
import CommonModal from "../UIComponent/Common/CommonModal";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { cartAction } from "../../Redux/CartSlice";
function Cart() {
  const dispatch = useDispatch();
  const open = useSelector((redux) => redux.cart.open);
  const setOpen = (openState) => dispatch(cartAction.setOpen(openState));
  return (
    <CommonModal open={open} setOpen={setOpen} width={400}>
      <Box display="flex" paddingInline={2}>
        <Stack>
          <img
            src={avocadoImage}
            width={120}
            height={120}
            style={{ borderRadius: 10 }}
          />
          <Rating
            value={4}
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
            Bơ
          </Typography>
          <Stack>
            <Typography variant="h5" color="brown">
              ¥250
            </Typography>
            <Stack direction="row" spacing={2} mt={2}>
              <RemoveCircleOutlinedIcon color="error" sx={{ fontSize: 40 }} />
              <Typography variant="h4" textAlign="center">
                3
              </Typography>
              <AddCircleOutlinedIcon color="success" sx={{ fontSize: 40 }} />
            </Stack>
          </Stack>
        </Stack>
        <Stack justifyContent="center" alignItems="end" spacing={1}>
          <Link fontSize={20} color="primary">
            Save Later
          </Link>
          <Link fontSize={20} color="error">
            Remove
          </Link>
        </Stack>
      </Box>
      <Divider sx={{ my: 1 }} />

      <Box display="flex" paddingInline={2}>
        <Stack>
          <img
            src={avocadoImage}
            width={120}
            height={120}
            style={{ borderRadius: 10 }}
          />
          <Rating
            value={4}
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
            Bơ
          </Typography>
          <Stack>
            <Typography variant="h5" color="brown">
              ¥250
            </Typography>
            <Stack direction="row" spacing={2} mt={2}>
              <RemoveCircleOutlinedIcon color="error" sx={{ fontSize: 40 }} />
              <Typography variant="h4" textAlign="center">
                3
              </Typography>
              <AddCircleOutlinedIcon color="success" sx={{ fontSize: 40 }} />
            </Stack>
          </Stack>
        </Stack>
        <Stack justifyContent="center" alignItems="end" spacing={1}>
          <Link fontSize={20} color="primary">
            Save Later
          </Link>
          <Link fontSize={20} color="error">
            Remove
          </Link>
        </Stack>
      </Box>
      <Divider sx={{ my: 1 }} />

      <Box sx={{ position: "sticky", bottom: 0, backgroundColor: "white" }}>
        <Stack display="flex" justifyContent="flex-end" direction="row">
          <Stack mr={5}>
            <Typography variant="h5">Sub-Total</Typography>
            10 items
          </Stack>
          <Stack>
            <Typography variant="h3" color="brown">
              ¥6789
            </Typography>
          </Stack>
        </Stack>
        <Stack>
          <Button variant="outlined" size="large" color="success">
            Check Out
          </Button>
        </Stack>
      </Box>
    </CommonModal>
  );
}

export default Cart;
