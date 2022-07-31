import React from "react";

import { Outlet } from "react-router-dom";
import Menu from "../drawer/Menu";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import "./layout.scss";

// const SharedButton = React.lazy(() => import("shared/Button"));

const Layout = () => {
  return (
    <Box sx={{ height: "100%" }}>
      <Grid container spacing={2} sx={{ padding: "15px" }}>
        <Grid item>
          <Paper sx={{ width: 220, maxWidth: "100%", height: "95vh" }}>
            <Menu />
          </Paper>
        </Grid>
        <Grid item xs>
          <Box sx={{ height: "70px" }}></Box>
          <Outlet />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Layout;
