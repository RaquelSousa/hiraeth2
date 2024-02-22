import { Stack, Typography } from "@mui/material";
import { FC } from "react";
import DiscordTiles from "../../components/discord/DiscordTiles";
import "./discords.scss";
import Title from "../../components/title/Title";

const Discords: FC = () => {
  return (
    <Stack direction="column" justifyContent="center" alignItems="center">
      <Stack spacing={2} direction="column" className="discords-body">
        <Title label="Discords" />
        <Typography className="description" variant="h6">
          Here is a list of all discords we find useful.
        </Typography>
        <Typography variant="h3" color="#ffa726">
          Class Discords
        </Typography>
        <DiscordTiles />
      </Stack>
    </Stack>
  );
};

export default Discords;
