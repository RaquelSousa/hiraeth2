import FastfoodIcon from "@mui/icons-material/Fastfood";
import AddTaskIcon from "@mui/icons-material/AddTask";
import SwitchAccessShortcutAddIcon from "@mui/icons-material/SwitchAccessShortcutAdd";
import UpgradeIcon from "@mui/icons-material/Upgrade";
import InterpreterModeIcon from "@mui/icons-material/InterpreterMode";
import RepeatIcon from "@mui/icons-material/Repeat";
import HotelIcon from "@mui/icons-material/Hotel";

const raiderExpectationsContent = [
  {
    id: "0",
    title: "Do 4x M+15 a week",
    icon: <FastfoodIcon />,
    secondTitle: "Because you need new clothes!",
    oppositeContent: "There's a M+ event on Tuesdays if you need help",
  },
  {
    id: "1",
    title: "Keep up-to-date with renown",
    icon: <SwitchAccessShortcutAddIcon />,
    secondTitle: "Because you need strength!",
    oppositeContent: "This is probably going away soon",
  },
  {
    id: "2",
    title: "Upgrade your main Leggo ASAP",
    icon: <UpgradeIcon />,
    secondTitle: "Because you need improved clothes!",
    oppositeContent: "This is probably going away soon",
  },
  {
    id: "3",
    title: "Signup/off to every raid in the discord bot",
    icon: <AddTaskIcon />,
    secondTitle: "Because we need to plan ahead!",
    oppositeContent: "You'll get tagged in discord when the signups are up",
  },
  {
    id: "4",
    title: "Maintain a monthly 80% attendance",
    icon: <InterpreterModeIcon />,
    secondTitle: "Because you need to be reliable!",
    oppositeContent: "You can miss about 2 raids a month",
  },
  {
    id: "5",
    title: "Sleep, do other stuff, enjoy your life ",
    icon: <HotelIcon />,
    secondTitle: "Because everything should be taken in moderation!",
    oppositeContent: "",
  },
  {
    id: "6",
    title: "New week, repeat",
    icon: <RepeatIcon />,
    secondTitle: "Because this is the life you love!",
    oppositeContent: "",
  },
];

export default raiderExpectationsContent;
