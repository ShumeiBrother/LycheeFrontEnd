import { IconButton, InputBase, Typography, styled } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Fragment } from "react";
import SVGOrange from "../UIComponent/SVG/SVGOrange";
import { grey } from "@mui/material/colors";

const StyledSearchBar = styled("div")(({ theme }) => ({
  color: "red",
  marginLeft: 10,
  borderRadius: 30,
  borderColor: "green",
  backgroundColor: grey[100]
  //borderRadius:5
}));

const StyledInput = styled(InputBase)((theme)=>({
  marginInline : 20,
}))

function SearchBar() {
  return (
    <StyledSearchBar>
      <StyledInput
        sx={{ width: { sm: 200, xs: 100 } }}
        placeholder="Search..."
        inputProps={{ "aria-label": "search products" }}
      />
      <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </StyledSearchBar>
  );
}

export default SearchBar;
