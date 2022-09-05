import { FC } from "react";
import "./ranks.scss";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import {
  TimelineItem,
  Timeline,
  TimelineOppositeContent,
  TimelineSeparator,
  TimelineConnector,
  TimelineDot,
  TimelineContent,
} from "@mui/lab";
import { ranksContent } from "../../models/ranks/Ranks.enum";
import RanksImg from "../../assets/ranks.png";

const Ranks: FC = () => {
  return (
    <Stack direction="column" justifyContent="center" alignItems="center">
      <Stack spacing={2} direction="column" className="body">
        <img src={RanksImg} alt="Events" className="guidelines-banner" />
        <Typography variant="h6">
          Rank structure in Hiraeth aims to promote and reward individuals that
          dedicate time towards improving the guild and creating a better
          community.
        </Typography>
        <Timeline position="alternate">
          {ranksContent.map((record) => (
            <TimelineItem>
              <TimelineOppositeContent
                sx={{ m: "auto 0" }}
                align="right"
                variant="body2"
                color={record.colour}></TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot color="warning" variant="outlined">
                  {record.icon}
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: "12px", px: 2 }}>
                <Typography variant="h6" component="span" color={record.colour}>
                  {record.title}
                </Typography>
                <Typography>{record.content}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {record.details}
                </Typography>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Stack>
    </Stack>
  );
};

export default Ranks;
