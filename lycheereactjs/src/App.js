import { Fragment } from "react";
import LeftBar from "./component/LeftBar/LeftBar";
import Navbar from "./component/Navbar/Navbar";
import { Grid, ThemeProvider } from "@mui/material";
import ConfiguredTheme from "./theme";
import { Box } from "@mui/system";
import { Stack } from "@mui/material";
import ProductThumbnail from "./component/ProductThumbnail";

function App() {
  return (
    <ThemeProvider theme={ConfiguredTheme}>
      <Grid container>
        <Grid item xs={12}>
          {/* <Navbar /> */}
        </Grid>
        <Grid item xs={3}>
          <LeftBar />
        </Grid>
        <ProductThumbnail/>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
