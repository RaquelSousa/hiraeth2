import { FC } from "react";
import "./codeofconducttiles.scss";
import codeOfConductContent from "../../models/codeofconduct/CodeOfConduct.enum";
import { Grid, Icon, Paper } from "@mui/material";

const CodeOfConductTiles: FC = () => {
  return (
    <div>
      <Grid className="grid" container spacing={2}>
        {codeOfConductContent.map((codeofconduct) => (
          <Grid item md={6}>
            <Paper className="paper">
              <Icon className="icon" color="warning">
                {codeofconduct.icon}
              </Icon>
              {codeofconduct.content}
            </Paper>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default CodeOfConductTiles;
