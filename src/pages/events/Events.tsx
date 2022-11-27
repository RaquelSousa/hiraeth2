import { Stack, Typography } from "@mui/material";
import { FC } from "react";
import "./events.scss";
import EventsImg from "../../assets/events.png";
import MainRaidsImg from "../../assets/main_raids.png";
import SocialRaidsImg from "../../assets/social_events2.png";

const Events: FC = () => {
  return (
    <Stack direction="column" justifyContent="center" alignItems="center">
      <Stack spacing={2} direction="column" className="body">
        <img src={EventsImg} alt="Events" className="events-banner" />
        <img src={MainRaidsImg} alt="Events" className="main-raids-banner" />
        <Typography variant="h6" color="#ffa726">
          Mondays and Thursdays - 19:20 - 22:30
        </Typography>
        <img
          src={SocialRaidsImg}
          alt="Events"
          className="social-raids-banner"
        />
        <Typography variant="h6" color="#ffa726">
          Social Raids - Saturdays at 20:30
        </Typography>
        <Typography variant="h6" color="#ffa726">
          M+ Event - Tuesdays at 20:30
        </Typography>
      </Stack>
    </Stack>
  );
};

export default Events;
