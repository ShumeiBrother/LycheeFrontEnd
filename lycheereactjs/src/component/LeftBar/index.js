import styled from "@emotion/styled";
import { Divider } from "@mui/material";
import {
  Drawer,
  Typography,
  Stack,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { Box } from "@mui/system";
import SVGCloth from "../UIComponent/SVG/SVGCloth";
import SVGDoKho from "../UIComponent/SVG/SVGDoKho";
import SVGOrange from "../UIComponent/SVG/SVGOrange";

const StyledDrawer = styled(Drawer)({
  minWidth: 300,
  width: 500,
});
// sx={{display:{xs:"none",sm:"block"}}}

const LeftBar = () => {
  return (
    <Box flex={1} sx={{ display: { xs: "none", sm: "block" } }}>
      <Stack direction={"column"} spacing={3} sx={{ padding: 3 }}>
        <Stack direction="row" alignItems={"center"} spacing={1}>
          <SVGOrange size={40} color={"orange"} />
          <Typography
            variant="h5"
            textAlign={"center"}
            sx={{ display: { sm: "none", md: "block" } }}
          >
            Hoa Quả
          </Typography>
        </Stack>
        <Divider />
        <Stack direction="row" alignItems={"center"} spacing={1}>
          <SVGDoKho size={40} color={"brown"} />
          <Typography
            variant="h5"
            textAlign={"center"}
            sx={{ display: { sm: "none", md: "block" } }}
          >
            Đồ Khô
          </Typography>
        </Stack>
        <Divider />
        <Stack direction="row" alignItems={"center"} spacing={1}>
          <SVGCloth size={40} color={"red"} />
          <Typography
            variant="h5"
            textAlign={"center"}
            sx={{ display: { sm: "none", md: "block" } }}
          >
            Quần Áo
          </Typography>
        </Stack>
        <Divider />
      </Stack>
    </Box>
  );
};

export default LeftBar;
