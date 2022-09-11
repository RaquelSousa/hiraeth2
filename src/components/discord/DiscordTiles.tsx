import { FC } from "react";
import "./discordtiles.scss";
import ClassDiscords from "../../models/discord/Classes.enum";
import {
  Avatar,
  Box,
  Grid,
  Link,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

const DiscordTiles: FC = () => {
  return (
    <div>
      <Grid
        className="grid"
        container
        spacing={1}
        justifyContent="center"
        alignItems="center">
        {ClassDiscords.map((content) => (
          <Grid item xs={2} md={2}>
            <Paper className="paper">
              <Stack direction="row" justifyContent="space-around" spacing={1}>
                <Box sx={{ flex: 0 }}>
                  <Avatar
                    alt={content.title}
                    src={content.icon}
                    sx={{ width: 70, height: 70 }}
                  />
                </Box>
                <Stack
                  sx={{ flex: 2 }}
                  direction="column"
                  justifyContent="center"
                  alignItems={"center"}>
                  <Typography variant="h6" component="span" color="error">
                    {content.title}
                  </Typography>
                  <Link href={content.main} color="#fc8c03">
                    {content.mainName}
                  </Link>
                  {content.alternative !== "" ? (
                    <Link href={content.alternative} color="#fc8c03">
                      {content.alternativeName}
                    </Link>
                  ) : (
                    <br />
                  )}
                </Stack>
              </Stack>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default DiscordTiles;
