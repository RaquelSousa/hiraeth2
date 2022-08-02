import { Stack, Typography } from "@mui/material";
import { FC } from "react";
import CodeOfConductTiles from "../../components/codeofconduct/CodeOfConductTiles";
import "./codeofconduct.scss";
import CodeOfConductImg from "../../assets/code_of_conduct.png";

const CodeOfConduct: FC = () => {
  return (
    <Stack direction="column" justifyContent="center" alignItems="center">
      <Stack spacing={2} direction="column" className="body">
        <div className="code-of-conduct-banner">
          <img src={CodeOfConductImg} alt="Code of Conduct" />
        </div>
        <Typography className="description" variant="h6">
          To make sure we maintain a healthy and welcoming environment, we need
          to make sure we keep certain common sense guidelines in mind.
        </Typography>
        <CodeOfConductTiles />
        <Typography className="endNote" variant="h6">
          All members of the guild, regardless of rank, are expected to adhere
          to this Code of Conduct. This governs all interactions between guild
          members and other people, either within the guild or outside, both
          Discord and in-game. It applies to all members and all means of
          communication without exception. Breaches of the Code of Conduct will
          result in disciplinary action from the Guild Leadership appropriate to
          the player's rank and the nature of the breach. Such punishments will
          include, in increasing order of severity: Demotion, Raid time-outs, or
          expulsion from the guild.
        </Typography>
      </Stack>
    </Stack>
  );
};

export default CodeOfConduct;
