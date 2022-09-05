import GroupAddTwoToneIcon from "@mui/icons-material/GroupAddTwoTone";
import EscalatorWarningTwoToneIcon from "@mui/icons-material/EscalatorWarningTwoTone";
import GroupsTwoToneIcon from "@mui/icons-material/GroupsTwoTone";
import SchoolTwoToneIcon from "@mui/icons-material/SchoolTwoTone";
import SportsMartialArtsTwoToneIcon from "@mui/icons-material/SportsMartialArtsTwoTone";
import LocalPoliceTwoToneIcon from "@mui/icons-material/LocalPoliceTwoTone";
import AltRouteTwoToneIcon from "@mui/icons-material/AltRouteTwoTone";
import EventSeatTwoToneIcon from "@mui/icons-material/EventSeatTwoTone";

export const ranksContent = [
  {
    id: "0",
    title: "Social Trial",
    colour: "#00ffd9",
    content:
      "A social that just joined the guild. This person is going through a 2 week trial to see if there are any alarm bells.",
    icon: <GroupAddTwoToneIcon />,
    details: "No benefits.",
  },
  {
    id: "1",
    title: "Alt",
    colour: "#ffffff",
    content: "An alt character from a Raider or Social member.",
    icon: <EscalatorWarningTwoToneIcon />,
    details:
      "Benefits include the right to wirthdraw from Free Random and Free Materials tabs.",
  },
  {
    id: "2",
    title: "Social",
    colour: "#00ff33",
    content:
      "A regular member, not part of raiding team. The expectations vary but in general the rules and code of conduct must be observed by all members. ",
    icon: <GroupsTwoToneIcon />,
    details:
      "Benefits include 100g daily repairs, and the right to withdraw from Free Random, Free Materias and Cosmetics tabs.",
  },
  {
    id: "3",
    title: "Raid Trial AKA Trial",
    colour: "#4287f5",
    content:
      "Specifically assigned to raiders just joined and are undergoing a 2 week/4 raid trial period.",
    icon: <SchoolTwoToneIcon />,
    details:
      "Benefits include 200g daily repairs, and the right to withdraw from Free Random, Free Materias, Cosmetics, Raider supplies and Raider Supplies2 tabs.",
  },
  {
    id: "4",
    title: "Raider",
    colour: "#ffc400",
    content: "A member that is part of the raiding team.",
    icon: <SportsMartialArtsTwoToneIcon />,
    details:
      "Benefits include 300g daily repairs, and the right to withdraw extra stacks from Free Random, Free Materias, Cosmetics, Raider Supplies and Raider Supplies2 tabs.",
  },
  {
    id: "5",
    title: "Officer Alt",
    colour: "#ffffff",
    content:
      "Officers' alt characters. With the purpose of still being able to craft stuff on these alts for the guild bank, and access guild management options and read/write in officer chat.",
    icon: <AltRouteTwoToneIcon />,
    details:
      "Benefits exclude Guild Repairs. Include Guild invites, and the right to withdraw from all tabs in limited amounts.",
  },
  {
    id: "6",
    title: "Officer",
    colour: "#ff5900",
    content: "The guild staff. Raid leader and Officers all included.",
    icon: <LocalPoliceTwoToneIcon />,
    details:
      "Benefits exclude Guild Repairs. Include Guild invites, and the right to withdraw unlimited stacks from all tabs. Right to withdraw gold.",
  },
  {
    id: "7",
    title: "Lion Queen AKA GM",
    colour: "#ff0000",
    content: "The GM. Unlimited access.",
    icon: <EventSeatTwoToneIcon />,
    details: "",
  },
];
