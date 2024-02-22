import { FC } from "react";
import "./raideraddons.scss";
import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import {
  Avatar,
  Button,
  Chip,
  ListItemButton,
  Stack,
  Typography,
} from "@mui/material";
import raiderAddonsContent from "../../models/raideraddons/RaiderAddons.enum";
import Title from "../../components/title/Title";

const RaiderAddons: FC = () => {
  const [selectedIndex] = React.useState(1);

  return (
    <Stack direction="column" justifyContent="center" alignItems="center">
      <Stack spacing={2} direction="column" className="raider-addons-body">
        <Title label="Required Addons" />
        <br />
        <Typography className="description" variant="h6">
          As a raider you are expected to have the following addons installed
          and enabled
        </Typography>
        <List sx={{ width: "100%" }}>
          {raiderAddonsContent.map((addons) => (
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt={addons.title} src={addons.icon} />
              </ListItemAvatar>
              <ListItemText
                primary={<Chip label={addons.title} color="warning" />}
                secondary={addons.description}
              ></ListItemText>
              <ListItemButton selected={selectedIndex === 0}>
                <Button variant="contained" color="error" href={addons.link}>
                  Download
                </Button>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Stack>
    </Stack>
  );
};

export default RaiderAddons;
