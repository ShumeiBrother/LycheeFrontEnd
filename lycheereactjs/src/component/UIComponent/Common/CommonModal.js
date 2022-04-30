import styled from "@emotion/styled";
import { Modal } from "@mui/material";
import { Box } from "@mui/system";

const StyledBox = styled(Box)({
  backgroundColor: "white",
  width: 700,
  height: "80vh",
  borderRadius: 20,
  padding: 10,
});

function CommonModal(props) {
  return (
    <Modal
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      {...props}
    >
      <StyledBox>{props.children}</StyledBox>
    </Modal>
  );
}

export default CommonModal;
