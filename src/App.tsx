import "./App.scss";
import Home from "./pages/home/Home";
import * as React from "react";

import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <CssBaseline />
      <Home />
    </BrowserRouter>
  );
}

export default App;
