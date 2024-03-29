import { Divider, Stack, Typography } from "@mui/material";
import { FC } from "react";
import "./events.scss";
import Title from "../../components/title/Title";

const Events: FC = () => {
  return (
    <Stack direction="column" justifyContent="center" alignItems="center">
      <Stack spacing={2} direction="column" className="events-body">
        <Title label="Events" />
        <br />
        <Typography variant="h5">
          Progression Raids - People with Raider Rank only
        </Typography>
        <Typography variant="h6" color="#ffa726">
          Mondays and Thursdays - 19:20 - 22:30
        </Typography>
        <br />
        <Typography variant="h5">
          Social Events - Fun events for anyone to join! Bridge the gap between
          raiders and Socials
        </Typography>
        <Stack direction="row" justifyContent="center" alignItems="center">
          <Stack sx={{ width: "500px" }}>
            <Typography variant="h6" color="#ffa726">
              Social Raids - Saturdays at 20:30
            </Typography>
            <br />
            <Typography variant="h6">
              Have fun in a friendly environment, learn about the bosses, get
              some gear, or earn some achievements. We may do transmog or
              achievement runs too.
            </Typography>
          </Stack>
          <Divider
            sx={{ widht: "1px", height: "200px", marginRight: "5px" }}
            orientation="vertical"
            color="red"
          />
          <Stack sx={{ width: "500px" }}>
            <Typography variant="h6" color="#ffa726">
              M+ Event - Tuesdays at 20:30
            </Typography>
            <br />
            <Typography variant="h6">
              Meet in the Brewery Channel. An Officer will sort people into
              groups, attempting to keep it fair by splitting lower experienced
              people with better experienced ones
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Events;
