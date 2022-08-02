import "./App.scss";
import * as React from "react";

import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter } from "react-router-dom";
import { ContainerRouter } from "./config/routes";

import { ThemeProvider, createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <BrowserRouter>
        <CssBaseline />
        <ContainerRouter />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
