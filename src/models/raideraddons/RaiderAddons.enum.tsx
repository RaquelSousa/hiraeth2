import MarkEmailReadIcon from "@mui/icons-material/MarkEmailRead";
import AccessAlarmTwoToneIcon from "@mui/icons-material/AccessAlarmTwoTone";
import PoolTwoToneIcon from "@mui/icons-material/PoolTwoTone";
import VolunteerActivismTwoToneIcon from "@mui/icons-material/VolunteerActivismTwoTone";
import ConstructionTwoToneIcon from "@mui/icons-material/ConstructionTwoTone";
import PlaylistAddCheckCircleTwoToneIcon from "@mui/icons-material/PlaylistAddCheckCircleTwoTone";
import MilitaryTechTwoToneIcon from "@mui/icons-material/MilitaryTechTwoTone";
import NotListedLocationTwoToneIcon from "@mui/icons-material/NotListedLocationTwoTone";
import FortTwoToneIcon from "@mui/icons-material/FortTwoTone";
import RecordVoiceOverTwoToneIcon from "@mui/icons-material/RecordVoiceOverTwoTone";

const raiderAddonsContent = [
  {
    id: 0,
    title: "DBM or BigWigs",
    icon: <MarkEmailReadIcon />,
    link1: "https://www.curseforge.com/wow/addons/deadly-boss-mods",
    link2: "https://www.curseforge.com/wow/addons/big-wigs",
  },
  {
    id: 1,
    title: "Be Ponctual",
    icon: <AccessAlarmTwoToneIcon />,
    secondTitle:
      "We only raid twice a week so it's very important we make sure we are ready to start pulling at 19:30 sharp.",
    oppositeContent:
      "Ideally, everyone is ready to be invited into the raid at least 10 minues before the raid starts, so that everything can be prepared.",
  },
  {
    id: 4,
    title: "Be Active",
    icon: <PoolTwoToneIcon />,
    secondTitle:
      "Do the weekly stuff, keep up-to-date with everything that involves character progression. Play your character.",
    oppositeContent:
      "If you start to slack on the stuff you need to do to remain up-to-date, ask yourself if you really want to keep raiding. Logging in purely for the raid is not enough. Having mythic kills brings you no status in life. It's a game. So make sure you want to play it.",
  },
  {
    id: 5,
    title: "Trade BoEs",
    icon: <VolunteerActivismTwoToneIcon />,
    secondTitle: "Mythic Dropped BoEs are meant to be traded to Putri.",
    oppositeContent:
      "You will get 50% of the gold it yields. Te other 50% will go to the guild bank, to fund consumables, which we provide to be able to progress as smoothly as possible.",
  },
  {
    id: 6,
    title: "Use Item Enhancements",
    icon: <ConstructionTwoToneIcon />,
    secondTitle: "This includes enchants, gems, pots, flasks, armor kits, etc.",
    oppositeContent:
      "Everything is provided by the guild. And if anything is missing and you are low on gold, you can ask an officer or any willing guild member to sort you out. Coming to a raid unprepared is unacceptable.",
  },
  {
    id: 7,
    title: "Maintain The Wishlist",
    icon: <PlaylistAddCheckCircleTwoToneIcon />,
    secondTitle: "This includes enchants, gems, pots, flasks, armor kits, etc.",
    oppositeContent:
      "Everything is provided by the guild. And if anything is missing and you are low on gold, you can ask an officer or any willing guild member to sort you out. Coming to a raid unprepared is unacceptable.",
  },
  {
    id: 8,
    title: "Do Your Best",
    icon: <MilitaryTechTwoToneIcon />,
    secondTitle:
      "We are not a hardcore guild, but we intend to make the most of our raids.",
    oppositeContent:
      "Everyone should strive to give their best when raiding, and spend time researching how to improve outside of raids.",
  },
  {
    id: 9,
    title: "Raid Spots Are Not Guaranteed",
    icon: <NotListedLocationTwoToneIcon />,
    secondTitle:
      "Raids are composed using a fair and transparent system, giving preference to filling key roles first.",
    oppositeContent:
      "Consequently, all players should expect to be rotated based on kils and loot needed. Harbouring expectations of a guaranteed personal raid spot will only lead to disappointment.",
  },
  {
    id: 10,
    title: "The Raid Leader Is The Boss",
    icon: <FortTwoToneIcon />,
    secondTitle:
      "Follow their directions, and be quiet when they are speaking on Discord. Do not monopolise Discord or inundate the RL with whispers about your brilliant strategy ideas during the raid.",
    oppositeContent:
      "Feedback is welcome but make sure it's done in a orderly manner. If discussion is invited, then keep it brief and to the point. Preferably, major raid strategy discussion should be taken after the raid or on discord, outside of the heat of battle. Othewise 24 brilliant strategy ideas would bombar the Raid Leader senseless.",
  },
  {
    id: 11,
    title: "Positive Criticism Is A Good Thing",
    icon: <RecordVoiceOverTwoToneIcon />,
    secondTitle:
      "Members should feel free to give advice and suggestions to other players to improve their play.",
    oppositeContent:
      "Equally, Members should view any positive criticism as an opportunity to improve.",
  },
];
export default raiderAddonsContent;
