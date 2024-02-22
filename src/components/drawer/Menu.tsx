import React, { ReactNode } from "react";

import { Link } from "react-router-dom";
import HiraethImg from "../../assets/hiraeth.png";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import {
  moduleRoutes,
  raiderRoutes,
  resourcesRoutes,
  RouteItem,
} from "../../config/routes";
import ListItemIcon from "@mui/material/ListItemIcon";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import { Icon, Typography } from "@mui/material";
import "./menu.scss";

const Menu = () => {
  return (
    <Stack
      sx={{ height: "100%" }}
      direction="column"
      className="hiraeth-nav"
      justifyContent="space-between"
    >
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
              state={{ title: route.key }}
            >
              <MenuItem
                sx={{
                  color: "text.primary",
                  ":hover": {
                    backgroundColor: "secondary.100",
                    color: "primary",
                  },
                }}
              >
                <ListItemIcon>
                  <Icon color="warning">{route.icon as string}</Icon>
                </ListItemIcon>
                <ListItemText>{route.key}</ListItemText>
              </MenuItem>
            </Link>
          ))}
        </MenuList>
        <Divider />
        <br />
        <Typography
          color="#fa4343"
          variant="button"
          sx={{ fontSize: "15px", fontWeight: "700" }}
        >
          Raider Guidelines
        </Typography>
        <MenuList>
          {raiderRoutes.map((route: RouteItem) => (
            <Link
              style={{ textDecoration: "none" }}
              key={route.key}
              to={route.path}
              state={{ title: route.key }}
            >
              <MenuItem
                sx={{
                  color: "text.primary",
                  ":hover": {
                    backgroundColor: "secondary.100",
                    color: "primary",
                  },
                }}
              >
                <ListItemIcon>
                  <Icon color="warning">{route.icon as string}</Icon>
                </ListItemIcon>
                <ListItemText>{route.key}</ListItemText>
              </MenuItem>
            </Link>
          ))}
        </MenuList>
        <Divider />
        <br />
        <Typography
          color="#fa4343"
          variant="button"
          sx={{ fontSize: "15px", fontWeight: "700" }}
        >
          Resources
        </Typography>
        <MenuList>
          {resourcesRoutes.map((route: RouteItem) => (
            <Link
              style={{ textDecoration: "none" }}
              key={route.key}
              to={route.path}
              state={{ title: route.key }}
            >
              <MenuItem
                sx={{
                  color: "text.primary",
                  ":hover": {
                    backgroundColor: "secondary.100",
                    color: "primary",
                  },
                }}
              >
                <ListItemIcon>
                  <Icon color="warning">{route.icon as string}</Icon>
                </ListItemIcon>
                <ListItemText>{route.key}</ListItemText>
              </MenuItem>
            </Link>
          ))}
        </MenuList>
      </Stack>
    </Stack>
  );
};

export default Menu;
