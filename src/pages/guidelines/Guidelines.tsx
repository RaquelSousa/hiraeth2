import { FC } from "react";
import "./guidelines.scss";
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
import guidelines from "../../models/guidelines/Guidelines.enum";
import alts from "../../models/guidelines/Alts.enum";
import leavingEasy from "../../models/guidelines/LeavingEasy.enum";
import GuidelinesImg from "../../assets/guidelines.png";
import SendIcon from "@mui/icons-material/Send";

const Guidelines: FC = () => {
  return (
    <Stack direction="column" justifyContent="center" alignItems="center">
      <Stack spacing={2} direction="column" className="body">
        <img src={GuidelinesImg} alt="Events" className="guidelines-banner" />
        <Typography variant="h6">
          When we take our decisions, we follow certain guidelines to make sure
          we're consistent, fair, and that everyone knows what we're expecting,
          and how we do things to manage the guild.
        </Typography>
        <Typography variant="h3">Recruitment and Trial</Typography>
        <Typography variant="h6">
          Note: Returning ex-members can skip any stage of this process at
          officers discretion.
        </Typography>
        <List
          sx={{ width: "80%", bgcolor: "background.paper" }}
          component="nav"
          aria-labelledby="nested-list-subheader"
          color="warning">
          <ListItem>
            <ListItemIcon>
              <SendIcon color="warning" />
            </ListItemIcon>
            <ListItemText primary="Socials interested in raiding that meet the current raiding requirements will be prioritised over external applicants." />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <SendIcon color="warning" />
            </ListItemIcon>
            <ListItemText primary="The recruitment process for a potential new guild member is as follows:" />
          </ListItem>
        </List>
        <Timeline position="alternate">
          {guidelines.map((record) => (
            <TimelineItem>
              <TimelineOppositeContent
                sx={{ m: "auto 0" }}
                align="right"
                variant="body2"
                color="text.secondary"></TimelineOppositeContent>
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
        <Typography variant="h3">Alts</Typography>
        <Typography variant="h6">
          These rules cover Alts. Guild Bank Access is explained within the
          Guild Ranks page.
        </Typography>
        <List>
          {alts.map((record) => (
            <>
              <ListItem>
                <ListItemIcon>{record.icon}</ListItemIcon>
                <ListItemText primary={record.title} />
              </ListItem>
            </>
          ))}
        </List>

        <Typography variant="h3">Leaving Easy</Typography>
        <List>
          {leavingEasy.map((record) => (
            <>
              <ListItem>
                <ListItemIcon>{record.icon}</ListItemIcon>
                <ListItemText primary={record.title} />
              </ListItem>
            </>
          ))}
        </List>
      </Stack>
    </Stack>
  );
};

export default Guidelines;
