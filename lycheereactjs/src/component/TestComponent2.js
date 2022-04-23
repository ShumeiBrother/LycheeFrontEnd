import { Button } from "@mui/material";
import { Fragment, useState } from "react";
import CommonModal from "./UIComponent/Common/CommonModal";

const TestComponent2 = () => {
  const [open, setOpen] = useState(false);
  return (
    <Fragment>
      <Button variant="outlined" color="success" onClick={()=>setOpen(true)}>
        Open modal
      </Button>
      <CommonModal open={open} onBackdropClick={()=>setOpen(false)}>abc</CommonModal>
    </Fragment>
  );
};
export default TestComponent2;
