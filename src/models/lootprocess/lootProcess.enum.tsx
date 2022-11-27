import FastfoodIcon from "@mui/icons-material/Fastfood";
import SwitchAccessShortcutAddIcon from "@mui/icons-material/SwitchAccessShortcutAdd";

const LootProcessList = [
  {
    id: "0",
    title: "Raid Drops",
    icon: <FastfoodIcon />,
    secondTitle:
      "All loot is to be passed on then distributed by the officer team using RC Loot Council",
    oppositeContent: "",
  },
  {
    id: "1",
    title: "BoEs",
    icon: <SwitchAccessShortcutAddIcon />,
    secondTitle:
      "Within the Main Raids, all BoEs are expected to be traded to Putri.",
    oppositeContent:
      "If the player who looted the item would like to keep it, there's a possibility to pay 50% of the current AH value to Putri. If not, Putri will sell it. Upon sale, 50% of the profit goes to the Guild Bank, and 50% goes to the person who looted the item.",
  },
];

export default LootProcessList;
