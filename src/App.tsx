import "./App.scss";
import * as React from "react";

import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter } from "react-router-dom";
import { ContainerRouter } from "./config/routes";

function App() {
  return (
    <BrowserRouter>
      <CssBaseline />
      <ContainerRouter />
    </BrowserRouter>
  );
}

export default App;
