import { Fragment } from "react";
import LeftBar from "./component/LeftBar/LeftBar";
import Navbar from "./component/Navbar/Navbar";
import {
  Button,
  Drawer,
  Grid,
  Modal,
  ThemeProvider,
  Typography,
} from "@mui/material";
import ConfiguredTheme from "./theme";
import { Box } from "@mui/system";
import { Stack } from "@mui/material";
import ProductThumbnail from "./component/ProductThumbnail";
import TestComponent from "./component/TestComponent";
import TestComponent2 from "./component/TestComponent2";

function App() {
  return (
    <ThemeProvider theme={ConfiguredTheme}>
      <Navbar />
      {/* <LeftBar/> */}
      {/* <TestComponent/> */}
      <TestComponent2/>
    </ThemeProvider>
  );
}

export default App;
