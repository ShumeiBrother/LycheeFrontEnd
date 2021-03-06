import { Divider, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Link, NavLink } from "react-router-dom";
import SVGCloth from "../UIComponent/SVG/SVGCloth";
import SVGDoKho from "../UIComponent/SVG/SVGDoKho";
import SVGOrange from "../UIComponent/SVG/SVGOrange";

function LeftBar() {
  return (
    <Box flex={1} sx={{ display: { xs: "none", sm: "block" } }}>
      <Stack direction={"column"} spacing={3} sx={{ padding: 3 }}>
        {/* <Link to="/product/" style={{ textDecoration: "none", color: "black" }}>
          <Stack direction="row" alignItems={"center"} spacing={1}>
            <SVGOrange size={40} color={"orange"} />
            <Typography
              variant="h5"
              textAlign={"center"}
              sx={{ display: { sm: "none", md: "block" } }}
            >
              Tất Cả
            </Typography>
          </Stack>
        </Link>
        <Divider /> */}
        <Link
          to="/products/category?categoryId=18000001"
          style={{ textDecoration: "none", color: "black" }}
        >
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
        </Link>
        <Divider />
        <Link
          to="/products/category?categoryId=18000002"
          style={{ textDecoration: "none", color: "black" }}
        >
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
        </Link>
        <Divider />

        <NavLink
          to="/products/category?categoryId=18000003"
          style={{ textDecoration: "none", color: "black" }}
        >
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
        </NavLink>
        <Divider />
      </Stack>
    </Box>
  );
}

export default LeftBar;
