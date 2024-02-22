import { FC } from "react";
import "./lootprocess.scss";
import { Stack, Typography } from "@mui/material";
import {
  TimelineItem,
  Timeline,
  TimelineOppositeContent,
  TimelineSeparator,
  TimelineConnector,
  TimelineDot,
  TimelineContent,
} from "@mui/lab";
import LootProcessList from "../../models/lootprocess/lootProcess.enum";
import Title from "../../components/title/Title";

const LootProcess: FC = () => {
  return (
    <Stack direction="column" justifyContent="center" alignItems="center">
      <Stack spacing={2} direction="column" className="loot-body">
        <Title label="Loot" />
        <Typography variant="h6">
          We try to maintain a fair loot distribution, however no process is
          flawless.
        </Typography>
        <Timeline position="alternate">
          {LootProcessList.map((record) => (
            <TimelineItem>
              <TimelineOppositeContent
                sx={{ m: "auto 0" }}
                align="right"
                variant="body2"
                color="text.secondary"
              ></TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot color="warning" variant="outlined">
                  {record.icon}
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: "12px", px: 2 }}>
                <Typography variant="h6" component="span" color="error">
                  {record.title}
                </Typography>
                <Typography>{record.secondTitle}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {record.oppositeContent}
                </Typography>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
        <Typography variant="h3" color="#ffa726">
          Why Are We Stealing BoEs from you?
        </Typography>
        <Typography variant="h6">
          We provide our raiders with everything. Food, potions,
          flasks/cauldrons, repairs, missives... So this is one way we can make
          sure we don't reach 0g.
        </Typography>
      </Stack>
    </Stack>
  );
};

export default LootProcess;
