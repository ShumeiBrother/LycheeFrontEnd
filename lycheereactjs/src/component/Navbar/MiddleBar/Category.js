import styled from "@emotion/styled";
import { MenuItem, Select, Stack, Typography } from "@mui/material";
import SVGCloth from "../../UIComponent/SVG/SVGCloth";
import SVGDoKho from "../../UIComponent/SVG/SVGDoKho";
import SVGOrange from "../../UIComponent/SVG/SVGOrange";

const StyledSelect = styled(Select)({
  maxHeight: 50,
});

const StyledItem = styled(MenuItem)({});

function Category() {
  return (
    <StyledSelect
      value={"orange"}
      inputProps={{ "aria-label": "Without label" }}
    >
      <StyledItem value={"orange"}>
        <Stack direction="row" alignItems={"center"} spacing={1}>
          <SVGOrange size={20} color={"orange"} />
          <Typography variant="h6" textAlign={"center"}>
            Hoa Quả
          </Typography>
        </Stack>
      </StyledItem>
      <StyledItem>
        <Stack direction="row" alignItems={"center"} spacing={1}>
          <SVGCloth size={20} color={"violet"} />
          <Typography variant="h6" textAlign={"center"}>
            Quần Áo
          </Typography>
        </Stack>
      </StyledItem>
      <StyledItem>
        <Stack direction="row" alignItems={"center"} spacing={1}>
          <SVGDoKho size={20} color={"brown"} />
          <Typography variant="h6" textAlign={"center"}>
            Đồ Khô
          </Typography>
        </Stack>
      </StyledItem>
    </StyledSelect>
  );
}
export default Category;
