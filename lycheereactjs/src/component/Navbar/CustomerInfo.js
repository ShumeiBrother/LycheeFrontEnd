import { Button, Typography, styled } from "@mui/material";
import { orange } from "@mui/material/colors";
const CustomerInfoBar = styled("div")({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
});

const CustomerName = styled(Typography)({
  color: orange[700],
  marginRight: 20,
  fontSize: 20,
});

function CustomerInfo() {
  return (
    <CustomerInfoBar>
      <CustomerName sx={{ display: { sm: "block", xs: "none" } }}>Hoang Thang</CustomerName>
      <Button variant="outlined" color="success">
        Login
      </Button>
    </CustomerInfoBar>
  );
}

export default CustomerInfo;
