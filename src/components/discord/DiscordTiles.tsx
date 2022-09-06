import { FC } from "react";
import "./discordtiles.scss";
import DiscordContent from "../../models/discord/Discord.enum";
import { Grid, Icon, Paper, Typography } from "@mui/material";

const DiscordTiles: FC = () => {
  return (
    <div>
      <Grid className="grid" container spacing={2}>
        {DiscordContent.map((content) => (
          <Grid item md={6}>
            <Paper className="paper">
              <Typography variant="h6" component="span" color="error">
                {content.title}
              </Typography>
              <Icon className="icon" color="warning">
                {content.icon}
              </Icon>
              {content.content}
            </Paper>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default DiscordTiles;
