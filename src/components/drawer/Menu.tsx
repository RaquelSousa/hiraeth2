import React, { ReactNode } from "react";

import { Link, useLocation } from "react-router-dom";
import HiraethImg from "../../assets/hiraeth.png";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import { moduleRoutes, RouteItem } from "../../config/routes";
import ListItemIcon from "@mui/material/ListItemIcon";
import IconButton from "@mui/material/IconButton";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import { Typography } from "@mui/material";
import "./menu.scss";

// const SharedButton = React.lazy(() => import("shared/Button"));

const Menu = () => {
  return (
    <Stack
      sx={{ height: "100%" }}
      direction="column"
      className="hiraeth-nav"
      justifyContent="space-between">
      <Stack direction="column">
        <Stack direction="column" spacing={2} sx={{ padding: "16px" }}>
          <img src={HiraethImg} className="hiraeth-logo" alt="Hiraeth" />
        </Stack>
        <Divider />
        <MenuList>
          {moduleRoutes.map((route: RouteItem) => (
            <Link
              style={{ textDecoration: "none" }}
              key={route.key}
              to={route.path}
              state={{ title: route.key }}>
              <MenuItem
                sx={{
                  color: "text.primary",
                  ":hover": {
                    backgroundColor: "secondary.100",
                    color: "primary",
                  },
                }}>
                <ListItemIcon>
                  <img src={route.icon as string} />
                </ListItemIcon>
                <ListItemText sx={{ marginLeft: 3 }}>{route.key}</ListItemText>
              </MenuItem>
            </Link>
          ))}
        </MenuList>
      </Stack>
    </Stack>
  );
};

export default Menu;
