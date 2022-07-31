import { Typography } from "@mui/material";
import { FC } from "react";
import CodeOfConductTiles from "../../components/codeofconduct/CodeOfConductTiles";
import "./codeofconduct.scss";

const CodeOfConduct: FC = () => {
  return (
    <div>
      <Typography className="title" variant="h1" component="h2">
        Code of Conduct
      </Typography>
      <Typography className="description" variant="h6">
        To make sure we maintain a healthy and welcoming environment, we need to
        make sure we keep certain common sense guidelines in mind.
      </Typography>
      <CodeOfConductTiles />
      <Typography className="endNote" variant="h6">
        All members of the guild, regardless of rank, are expected to adhere to
        this Code of Conduct. This governs all interactions between guild
        members and other people, either within the guild or outside. It applies
        to all members and all means of communication without exception.
        Breaches of the Code of Conduct will result in disciplinary action from
        the Guild Leadership appropriate to the player's rank and the nature of
        the breach. Such punishments will include, in increasing order of
        severity: Demotion, Raid time-outs, or expulsion from the guild.
      </Typography>
    </div>
  );
};

export default CodeOfConduct;
