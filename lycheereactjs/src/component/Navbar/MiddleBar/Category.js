import styled from "@emotion/styled";
import { MenuItem, Select, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import SVGCloth from "../../UIComponent/SVG/SVGCloth";
import SVGDoKho from "../../UIComponent/SVG/SVGDoKho";
import SVGOrange from "../../UIComponent/SVG/SVGOrange";

const StyledSelect = styled(Select)({
  maxHeight: 50,
});

const StyledItem = styled(MenuItem)({});

function Category() {
  const [category,setCategory] = useState("cloth");
  function handlerChange(event){
    setCategory(event.target.value);
  }
  return (
    <StyledSelect
      value={category}
      inputProps={{ "aria-label": "Without label" }}
      onChange={handlerChange}
    >
      <StyledItem value={"green"}>
        <Link
          to="/products/?category=green"
          style={{ textDecoration: "none", color: "black" }}
        >
          <Stack direction="row" alignItems={"center"} spacing={1}>
            <SVGOrange size={20} color={"orange"} />
            <Typography variant="h6" textAlign={"center"}>
              Hoa Quả
            </Typography>
          </Stack>
        </Link>
      </StyledItem>
      <StyledItem value={"cloth"}>
        <Link
          to="/products/?category=cloth"
          style={{ textDecoration: "none", color: "black" }}
        >
          <Stack direction="row" alignItems={"center"} spacing={1}>
            <SVGCloth size={20} color={"violet"} />
            <Typography variant="h6" textAlign={"center"}>
              Quần Áo
            </Typography>
          </Stack>
        </Link>
      </StyledItem>
      <StyledItem value={"dehydrated"}>
        <Link
          to="/products/?category=dehydrated"
          style={{ textDecoration: "none", color: "black" }}
        >
          <Stack direction="row" alignItems={"center"} spacing={1}>
            <SVGDoKho size={20} color={"brown"} />
            <Typography variant="h6" textAlign={"center"}>
              Đồ Khô
            </Typography>
          </Stack>
        </Link>
      </StyledItem>
    </StyledSelect>
  );
}
export default Category;
