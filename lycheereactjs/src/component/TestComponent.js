import styled from "@emotion/styled";
import { Box, Button, Divider, Modal, Rating, Typography } from "@mui/material";
import { Fragment, useState } from "react";
import CommonModal from "./UIComponent/Common/CommonModal";


const TestComponent = () => {
  const [open, setOpen] = useState(false);
  return (
    <Fragment>
      <Button onClick={() => setOpen(true)}>abc</Button>
      <CommonModal
        open={open}
        onBackdropClick={() => setOpen(false)}
      >
          <Typography variant="h2" color={"red"} textAlign="center">
            Lychee
          </Typography>
          <Divider />
          <Box height={200} backgroundColor="pink"></Box>
      </CommonModal>
    </Fragment>
  );
};

export default TestComponent;
