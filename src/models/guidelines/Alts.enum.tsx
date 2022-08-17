import SendIcon from "@mui/icons-material/Send";

const alts = [
  {
    id: "0",
    title: "Members can have any number of alts in the guild.",
    icon: <SendIcon color="warning" />,
  },
  {
    id: "1",
    title:
      "Alts must be regularly used to remain in the guild. Inactive alts (6 months +) will be subject to sudden purges. They can be re-invited should the urge to play them again arise.",
    icon: <SendIcon color="warning" />,
  },
  {
    id: "2",
    title:
      "Members can have alts in other guilds, though we expect all Raiders to perform the expected amount of focus raiding within Hiraeth. Members who focus raiding elsewhere at the expense of Hiraeth raids will lose Raider status.",
    icon: <SendIcon color="warning" />,
  },
  {
    id: "3",
    title:
      "Bringing an alt for a social raid, gearing it up and leaving the guild will be frowned upon. For subsequent social raids, expect loot you receive to be limited. If a member is found to be abusing the guild by constantly gearing up characters and leaving, this may result in expulsion.",
    icon: <SendIcon color="warning" />,
  },
];

export default alts;
