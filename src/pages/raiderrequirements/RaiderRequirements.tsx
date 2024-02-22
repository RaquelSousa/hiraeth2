import { FC } from "react";
import "./raiderrequirements.scss";
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
import raiderRequirementsContent from "../../models/raiderrequirements/RaiderRequirements.enum";
import Title from "../../components/title/Title";

const RaiderRequirementsTimeline: FC = () => {
  return (
    <Stack direction="column" justifyContent="center" alignItems="center">
      <Stack
        spacing={2}
        direction="column"
        className="raider-requirements-body"
      >
        <Title label="Requirements" />
        <Timeline position="alternate">
          {raiderRequirementsContent.map((requirements) => (
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
                  {requirements.icon}
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: "12px", px: 2 }}>
                <Typography variant="h6" component="span" color="error">
                  {requirements.title}
                </Typography>
                <Typography>{requirements.secondTitle}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {requirements.oppositeContent}
                </Typography>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Stack>
    </Stack>
  );
};

export default RaiderRequirementsTimeline;
