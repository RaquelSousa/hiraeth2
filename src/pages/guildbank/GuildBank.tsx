import { Stack, Typography } from "@mui/material";
import { FC } from "react";
import "./guildbank.scss";
import GuildBankImg from "../../assets/guild_bank.png";
import Chip from "@mui/material/Chip";
import GroupsIcon from "@mui/icons-material/Groups";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import * as React from "react";

const Events: FC = () => {
  return (
    <Stack direction="column" justifyContent="center" alignItems="center">
      <Stack spacing={2} direction="column" className="body">
        <img src={GuildBankImg} alt="Events" className="guildbank-banner" />
        <Typography variant="h6">
          The general rule of thumb is: if you can take it out of the guild
          bank, you are allowed to do so for free.
        </Typography>
        <Typography variant="h6">
          We are here to support each other and we are not using the guild bank
          for storage purposes, but rather for sharing purposes. However, please
          use common sense, don't just go and sell stuff for you own profit.
          This is for you to use, mains and alts alike.
        </Typography>
        <Typography variant="h3">Short Version</Typography>
        <Stack spacing={1} alignItems="center">
          <Stack direction="row" spacing={1}>
            <Chip
              label="The first 3 tabs are for everyone to use"
              color="warning"
              icon={<GroupsIcon />}
              size="medium"
            />
            <Chip
              label="The last 2 tabs are for raiders to use"
              color="error"
              icon={<PeopleOutlineIcon />}
              size="medium"
            />
          </Stack>
        </Stack>
        <Typography variant="h3">Long Version</Typography>
        <List
          sx={{ width: "100%", maxWidth: 600, bgcolor: "background.paper" }}>
          <Typography variant="h5">First 3 tabs</Typography>
          <Typography variant="h6">
            For everyone, Socials and Raiders alike!
          </Typography>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Free Random"
                src="/static/images/avatar/1.jpg"
                sx={{ width: 50, height: 50 }}
              />
            </ListItemAvatar>
            <ListItemText
              primary={
                <Chip label="Free Random" color="warning" size="small" />
              }
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.secondary">
                    This is the first tab, with lots of stuff free for everyone,
                    ranging from food to enchants, gear, pots, bags... Random
                    stuff
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Free Materials"
                src="/static/images/avatar/2.jpg"
                sx={{ width: 50, height: 50 }}
              />
            </ListItemAvatar>
            <ListItemText
              primary={
                <Chip label="Free Materials" color="warning" size="small" />
              }
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.secondary">
                    This is the second tab, focused on materials for everyone.
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Cosmetics"
                src="/static/images/avatar/3.jpg"
                sx={{ width: 50, height: 50 }}
              />
            </ListItemAvatar>
            <ListItemText
              primary={<Chip label="Cosmetics" color="warning" size="small" />}
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.secondary">
                    This is the third tab, focused on cosmetics like transmogs,
                    glyps, pets, toys...
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
        <List
          sx={{ width: "100%", maxWidth: 600, bgcolor: "background.paper" }}>
          <Typography variant="h5">Last 2 tabs</Typography>
          <Typography variant="h6">For raiders</Typography>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Raider Supplies"
                src="/static/images/avatar/1.jpg"
                sx={{ width: 50, height: 50 }}
              />
            </ListItemAvatar>
            <ListItemText
              primary={
                <Chip label="Raider Supplies" color="error" size="small" />
              }
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.secondary">
                    This is the second to last tab. It has mostly food and
                    potions to be used. Feel free to use them for M+ pushing
                    too.
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Raider Supplies 2"
                src="/static/images/avatar/2.jpg"
                sx={{ width: 50, height: 50 }}
              />
            </ListItemAvatar>
            <ListItemText
              primary={
                <Chip label="Raider Supplies 2" color="error" size="small" />
              }
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.secondary">
                    This is the last tab. It will have Vantus Runes when we can
                    craft them. For now it contains Missives, Legendary gear and
                    enchants.
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
        <List
          sx={{ width: "100%", maxWidth: 600, bgcolor: "background.paper" }}>
          <Typography variant="h5">What about the other tabs?</Typography>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Consumable Mats"
                src="/static/images/avatar/1.jpg"
                sx={{ width: 50, height: 50 }}
              />
            </ListItemAvatar>
            <ListItemText
              primary={
                <Chip label="Consumable Mats" color="primary" size="small" />
              }
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.secondary">
                    This tab is for the guild management team to keep materials
                    and excess stuff, used for the other tabs. If you want to
                    donate food, enchants, feasts, flasks and so on for raiding,
                    dump them here.
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="There's a hidden tab..."
                src="/static/images/avatar/2.jpg"
                sx={{ width: 50, height: 50 }}
              />
            </ListItemAvatar>
            <ListItemText
              primary={
                <Chip
                  label="There's a hidden tab..."
                  color="primary"
                  size="small"
                />
              }
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.secondary">
                    Wouldn't you like to know!
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Stack>
    </Stack>
  );
};

export default Events;
