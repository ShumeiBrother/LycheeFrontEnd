import { IconButton, InputBase, styled } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { grey } from "@mui/material/colors";

const StyledSearchBar = styled("div")(({ theme }) => ({
  color: "red",
  marginLeft: 10,
  borderRadius: 30,
  borderColor: "green",
  backgroundColor: grey[100]
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