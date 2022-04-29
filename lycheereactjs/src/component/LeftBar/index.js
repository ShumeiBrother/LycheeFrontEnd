import styled from "@emotion/styled";
import {
  Drawer,
  Typography,
  Stack,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { Box } from "@mui/system";
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
          <SVGOrange />
          <Typography variant="h5" textAlign={"center"} sx={{display:{sm:"none",md:"block"}}}>
            Hoa Quả
          </Typography>
        </Stack>
        <Stack direction="row" alignItems={"center"} spacing={1}>
          <SVGOrange />
          <Typography variant="h5" textAlign={"center"} sx={{display:{sm:"none",md:"block"}}}>
            Đồ Khô
          </Typography>
        </Stack>
        <Stack direction="row" alignItems={"center"} spacing={1}>
          <SVGOrange />
          <Typography variant="h5" textAlign={"center"} sx={{display:{sm:"none",md:"block"}}}>
            Quần Áo
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
};

export default LeftBar;
