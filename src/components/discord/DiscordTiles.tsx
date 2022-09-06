import { FC } from "react";
import "./discordtiles.scss";
import ClassDiscords from "../../models/discord/Classes.enum";
import { Grid, Icon, Link, Paper, Typography } from "@mui/material";

const DiscordTiles: FC = () => {
  return (
    <div>
      <Grid className="grid" container spacing={1}>
        {ClassDiscords.map((content) => (
          <Grid item md={2}>
            <Paper className="paper">
              <Typography variant="h6" component="span" color="error">
                {content.title}
              </Typography>
              <Link href={content.main} color="#fc8c03">
                {content.mainName}
              </Link>
              <Link href={content.alternative} color="#fc8c03">
                {content.alternativeName}
              </Link>
              <Icon className="icon" color="warning">
                {content.icon}
              </Icon>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default DiscordTiles;
