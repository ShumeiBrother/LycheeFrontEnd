import { ButtonGroup, Button, styled } from "@mui/material";

const StyledFunctionBar = styled("div")({});

function FunctionBar() {
  return (
    <StyledFunctionBar sx={{ display: { md: "block", xs: "none" } }}>
      <ButtonGroup variant="text" aria-label="text button group">
        <Button>Shop</Button>
        <Button>FAQ</Button>
        <Button>Contact</Button>
      </ButtonGroup>
    </StyledFunctionBar>
  );
}

export default FunctionBar;
