import styled from "@emotion/styled";
import { Modal } from "@mui/material";
import { Box } from "@mui/system";

const CommonModal = (props) => {
  const StyledBox = styled(Box)({
    backgroundColor: "white",
    width: 700,
    height: "80vh",
    maxHeight: 900,
    borderRadius: 20,
    padding: 10,
    width: props.boxProps.width,
  });
  const { isOpen, setOpen } = props;
  return (
    <Modal
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      onBackdropClick={() => {
        setOpen(false);
      }}
      {...props}
    >
      <StyledBox>{props.children}</StyledBox>
    </Modal>
  );
};

export default CommonModal;
