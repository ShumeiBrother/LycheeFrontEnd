import styled from "@emotion/styled";
import { Modal } from "@mui/material";
import { Box } from "@mui/system";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

const CommonModal = (props) => {
  const width = props.width || 700;
  const StyledBox = styled(Box)({
    backgroundColor: "white",
    width: width,
    maxHeight: "80vh",
    borderRadius: 20,
    padding: 10,
    overflow: "scroll",
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
      <StyledBox>
        <Box display="flex" justifyContent="end">
          <CloseOutlinedIcon
            fontSize="large"
            onClick={() => {
              setOpen(false);
            }}
          />
        </Box>
        {props.children}
      </StyledBox>
    </Modal>
  );
};

export default CommonModal;
