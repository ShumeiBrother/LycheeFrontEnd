import { Button, Typography, styled } from "@mui/material";
import { orange } from "@mui/material/colors";
import React, { useState } from "react";
import UserAvatar from "./UserAvatar";

const CustomerInfoBar = styled("div")({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
});

function CustomerInfo() {
  const [isLogin, setLogin] = useState(false);
  function HandlerLogOut() {
    setLogin(false);
  }
  return (
    <CustomerInfoBar>
      {isLogin && <UserAvatar LogOut={HandlerLogOut} />}
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
