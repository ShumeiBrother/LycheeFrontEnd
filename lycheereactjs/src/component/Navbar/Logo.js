import { Box, styled, Typography } from "@mui/material";
import { Fragment } from "react";
import lycheeLogo from "../../static/images/logo/lycheeLogo.png";
const StyledTypography = styled(Typography)({
  color: "red",
  marginLeft: 10,
});

function Logo() {
  return (
    <Fragment>
      <Box sx={{ display: { md: "none", xs: "block" }, padding: 0 }}>
        <img height={60} width={60} src={lycheeLogo}></img>
      </Box>
      <StyledTypography
        variant="h3"
        sx={{ display: { md: "block", xs: "none" } }}
      >
        Lychee
      </StyledTypography>
    </Fragment>
  );
}

export default Logo;
