import { Box, Typography, styled } from "@mui/material";
import { Fragment } from "react";
import SVGOrange from "../UIComponent/SVG/SVGOrange";
const StyledTypography = styled(Typography)({
  color: "red",
  marginLeft: 10,
});

function Logo() {
  return (
    <Fragment>
      <Box sx={{ display: { sm: "none", xs: "block" } }}>
        <SVGOrange />
      </Box>
      <StyledTypography
        variant="h3"
        sx={{ display: { sm: "block", xs: "none" } }}
      >
        Lychee
      </StyledTypography>
    </Fragment>
  );
}

export default Logo;
