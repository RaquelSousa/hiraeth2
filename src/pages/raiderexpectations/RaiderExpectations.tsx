import { FC } from "react";
import "./raiderexpectations.scss";
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
import raiderExpectationsContent from "../../models/raiderexpectations/RaiderExpectations.enum";
import Title from "../../components/title/Title";

const RaiderExpectationsTimeline: FC = () => {
  return (
    <Stack direction="column" justifyContent="center" alignItems="center">
      <Stack
        spacing={2}
        direction="column"
        className="raider-expectations-body"
      >
        <Title label="Expectations" />
        <Timeline position="alternate">
          {raiderExpectationsContent.map((expectations) => (
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
                  {expectations.icon}
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: "12px", px: 2 }}>
                <Typography variant="h6" component="span" color="error">
                  {expectations.title}
                </Typography>
                <Typography>{expectations.secondTitle}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {expectations.oppositeContent}
                </Typography>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Stack>
    </Stack>
  );
};

export default RaiderExpectationsTimeline;
