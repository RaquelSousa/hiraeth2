import { Stack, Typography } from "@mui/material";
import { FC } from "react";
import CodeOfConductTiles from "../../components/codeofconduct/CodeOfConductTiles";
import "./events.scss";
import EventsImg from "../../assets/events.png";

const Events: FC = () => {
  return (
    <Stack direction="column" justifyContent="center" alignItems="center">
      <Stack spacing={2} direction="column" className="body">
        <img src={EventsImg} alt="Events" className="events-banner" />
        <Typography className="description" variant="h2">
          Main Raids
        </Typography>
        <Typography className="endNote" variant="h6">
          Mondays and Thursdays - 19:30 - 22:30
        </Typography>
        <Typography className="description" variant="h2">
          Social Events
        </Typography>
        <Typography className="endNote" variant="h6">
          Social Raids - Saturdays at 20:30
        </Typography>
        <Typography className="endNote" variant="h6">
          M+ Event - Tuesdays at 20:30
        </Typography>
      </Stack>
    </Stack>
  );
};

export default Events;
