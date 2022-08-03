import { FC } from "react";
import "./raideraddons.scss";
import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import { Chip, ListItemButton, Stack, Typography } from "@mui/material";
import MandatoryAddonsImg from "../../assets/mandatory_addons.png";
import raiderAddonsContent from "../../models/raideraddons/RaiderAddons.enum";

const RaiderAddons: FC = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => {
    setSelectedIndex(index);
  };

  return (
    <Stack direction="column" justifyContent="center" alignItems="center">
      <Stack spacing={2} direction="column" className="body">
        <img src={MandatoryAddonsImg} alt="mandatory addons" />
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
          {raiderAddonsContent.map((addons) => (
            <ListItem>
              <ListItemAvatar>{addons.icon}</ListItemAvatar>
              <ListItemButton
                selected={selectedIndex === 0}
                onClick={(event) => handleListItemClick(event, 0)}>
                <ListItemText
                  primary={<Chip label={addons.title} color="warning" />}
                  secondary={addons.link1}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Stack>
    </Stack>
  );
};

export default RaiderAddons;
