import { FC } from "react";
import "./raiderrequirements.scss";
import { Typography } from "@mui/material";
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
import RaiderRequirementsImg from "../../assets/Requirements.png";

const RaiderRequirementsTimeline: FC = () => {
  return (
    <div className="raider-requirements-body">
      <img
        src={RaiderRequirementsImg}
        alt="Requirements"
        className="requirements-banner"
      />
      <Timeline position="alternate">
        {raiderRequirementsContent.map((requirements) => (
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: "auto 0" }}
              align="right"
              variant="body2"
              color="text.secondary">
              {requirements.oppositeContent}
            </TimelineOppositeContent>
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
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  );
};

export default RaiderRequirementsTimeline;
