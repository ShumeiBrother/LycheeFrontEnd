import { Button, Typography, styled, Avatar } from "@mui/material";
import { orange } from "@mui/material/colors";
import React, { useState } from "react";
import cumeoImage from "../../../static/images/avatar/cumeo.jpeg";

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
  const [isLogin, setLogin] = useState(false);
  return (
    <CustomerInfoBar>
      {isLogin && (
        <Avatar
          alt="Hoang Thang"
          src={cumeoImage}
          onClick={() => {
            setLogin(false);
          }}
        />
      )}
      {!isLogin && (
        <Button
          variant="outlined"
          color="success"
          onClick={() => {
            setLogin(true);
          }}
        >
          Login
        </Button>
      )}
    </CustomerInfoBar>
  );
}

export default CustomerInfo;
