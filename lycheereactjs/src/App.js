import { Stack, ThemeProvider, Typography } from "@mui/material";
import ConfiguredTheme from "./theme";
import Navbar from "./component/Navbar";
import LeftBar from "./component/LeftBar";
import ProductList from "./component/ProductList";
import { Box } from "@mui/system";
import CommonModal from "./component/UIComponent/Common/CommonModal";
import { Fragment } from "react";

function App() {
  return (
    <ThemeProvider theme={ConfiguredTheme}>
      <Box>
        <Navbar />
        <Stack direction={"row"}>
          <LeftBar />
          <ProductList />
        </Stack>
      </Box>
    </ThemeProvider>
  );
}

export default App;
