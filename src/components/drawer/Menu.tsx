// import Drawer from "@mui/material/Drawer";
// import AppBar from "@mui/material/AppBar";
// import Toolbar from "@mui/material/Toolbar";
// import List from "@mui/material/List";
// import Typography from "@mui/material/Typography";
// import Divider from "@mui/material/Divider";
// import ListItem from "@mui/material/ListItem";
// import ListItemIcon from "@mui/material/ListItemIcon";
// import ListItemText from "@mui/material/ListItemText";
// import { routes } from "../../config/routes";
// import { Icon, IconButton, ListItemButton, MenuItem } from "@mui/material";
// import clsx from "clsx";
// import { ComponentType } from "react";
// import HiraethImg from "../../assets/hiraeth.png";

// export default function PermanentDrawerLeft() {
//   return (
//     <div className="menu-body">
//       <Drawer
//         sx={{
//           width: 240,
//           flexShrink: 0,
//           "& .MuiDrawer-paper": {
//             width: 240,
//             boxSizing: "border-box",
//           },
//         }}
//         variant="permanent"
//         anchor="left">
//         <img src={HiraethImg} alt="hiraeth" className="hiraeth-logo" />
//         <Divider />
//         <List>
//           {routes.map((route) => (
//             <ListItem button>
//               <ListItemIcon>
//                 <IconButton
//                   className={clsx({
//                     // eslint-disable-next-line no-restricted-globals
//                     selected: location.pathname === route.path,
//                   })}
//                   size="small">
//                   <Icon component={route.icon as ComponentType} />
//                 </IconButton>
//               </ListItemIcon>
//               <ListItemText primary={route.key} />
//             </ListItem>
//           ))}
//         </List>
//       </Drawer>
//     </div>
//   );
// }

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

// const SharedButton = React.lazy(() => import("shared/Button"));

const Menu = () => {
  return (
    <Stack
      sx={{ height: "100%" }}
      direction="column"
      justifyContent="space-between">
      <Stack direction="column">
        <Stack direction="column" spacing={2} sx={{ padding: "16px" }}>
          <img src={HiraethImg} className={"logo"} alt="Hiraeth" />
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
