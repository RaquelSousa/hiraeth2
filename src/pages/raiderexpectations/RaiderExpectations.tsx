import { FC } from "react";
import "./raiderexpectations.scss";
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
import raiderExpectationsContent from "../../models/raiderexpectations/RaiderExpectations.enum";
import RaiderExpectationsImg from "../../assets/expectations.png";

const RaiderExpectationsTimeline: FC = () => {
  return (
    <div className="raider-expectations-body">
      <img src={RaiderExpectationsImg} alt="expectations" />
      <Timeline position="alternate">
        {raiderExpectationsContent.map((expectations) => (
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: "auto 0" }}
              align="right"
              variant="body2"
              color="text.secondary"></TimelineOppositeContent>
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
    </div>
  );
};

export default RaiderExpectationsTimeline;
