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
    title: "Update your attendance accordingly in the discord bot",
    icon: <AddTaskIcon />,
    secondTitle: "Because we need to plan ahead!",
    oppositeContent: "You will get tagged when the bot goes up, make sure you update it if needed",
  },
  {
    id: "2",
    title: "Sleep, do other stuff, enjoy your life ",
    icon: <HotelIcon />,
    secondTitle: "Because everything should be taken in moderation!",
    oppositeContent: "",
  },
  {
    id: "3",
    title: "New week, repeat",
    icon: <RepeatIcon />,
    secondTitle: "Because this is the life you love!",
    oppositeContent: "",
  },
];

export default raiderExpectationsContent;
