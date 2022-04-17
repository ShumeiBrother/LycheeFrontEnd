import { ButtonGroup, Button, Typography, styled } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Fragment } from "react";
import SVGOrange from "../UIComponent/SVG/SVGOrange";
import { grey } from "@mui/material/colors";

const StyledFunctionBar = styled("div")({});

function FunctionBar() {
  return (
    <StyledFunctionBar sx={{ display: { sm: "block", xs: "none" } }}>
      <ButtonGroup variant="text" aria-label="text button group">
        <Button>Shop</Button>
        <Button>FAQ</Button>
        <Button>Contact</Button>
      </ButtonGroup>
    </StyledFunctionBar>
  );
}

export default FunctionBar;
