import { Stack, Typography } from "@mui/material";
import { FC } from "react";
import DiscordTiles from "../../components/discord/DiscordTiles";
import "./discords.scss";
import DiscordsImg from "../../assets/discords.png";

const Discords: FC = () => {
  return (
    <Stack direction="column" justifyContent="center" alignItems="center">
      <Stack spacing={2} direction="column" className="body">
        <div className="discords-banner">
          <img src={DiscordsImg} alt="Discord" />
        </div>
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
