import FastfoodIcon from "@mui/icons-material/Fastfood";
import AddTaskIcon from "@mui/icons-material/AddTask";
import SwitchAccessShortcutAddIcon from "@mui/icons-material/SwitchAccessShortcutAdd";

const guidelines = [
  {
    id: "0",
    title: "Application",
    icon: <FastfoodIcon />,
    secondTitle:
      "Prospective applicants complete their application form on the website. ",
    oppositeContent: "",
  },
  {
    id: "1",
    title: "Trial Period",
    icon: <SwitchAccessShortcutAddIcon />,
    secondTitle:
      " A Trial rank will be attributed for a period of 2 weeks (or 4 raids for Raiders). During the trial period, the Trial is expected to comply to all the requirements and rules.",
    oppositeContent: "",
  },
  {
    id: "2",
    title: "Final decision",
    icon: <AddTaskIcon />,
    secondTitle:
      "At the end of the trial period, a decision will be made on whether the trial was successful or not.",
    oppositeContent:
      "The possible outcomes are: Trial passed, promoted to Social or Raider; Trial failed, resulting in expulsion. Feedback provided; Trial extended due to lack of evidence, or second chance provided.",
  },
];

export default guidelines;
