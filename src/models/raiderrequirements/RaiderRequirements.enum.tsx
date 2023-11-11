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
import LocalFireDepartmentTwoToneIcon from "@mui/icons-material/LocalFireDepartmentTwoTone";
import DirectionsRunTwoToneIcon from "@mui/icons-material/DirectionsRunTwoTone";
import Link from "@mui/material/Link";

const raiderRequirementsContent = [
  {
    id: "0",
    title: "Comply To The Guidelines",
    icon: <MarkEmailReadIcon />,
    secondTitle:
      "Includes the Code of Conduct, Expectations and Minimum Requirements.",
    oppositeContent:
      "It's important to have clear goals and guidelines, to maintain a community we can all feel safe in. Things can become a bit nastier when we're talking about progression. We just need to make sure we keep our heads straight and our goals clear.",
  },
  {
    id: "1",
    title: "Be Ponctual",
    icon: <AccessAlarmTwoToneIcon />,
    secondTitle:
      "We only raid twice a week so it's very important we make sure we are ready at 19:20 to start pulling asap",
    oppositeContent:
      "Ideally, everyone is ready to be invited and outside of the raid by then",
  },
  {
    id: "2",
    title: "Be Active",
    icon: <PoolTwoToneIcon />,
    secondTitle:
      "Do the weekly stuff, keep up-to-date with everything that involves character progression. Play your character.",
    oppositeContent:
      "If you start to slack on the stuff you need to do to remain up-to-date, ask yourself if you really want to keep raiding. Logging in purely for the raid is not enough. Having mythic kills brings you no status in life. It's a game. So make sure you want to play it.",
  },
  {
    id: "3",
    title: "Trade BoEs",
    icon: <VolunteerActivismTwoToneIcon />,
    secondTitle: "Mythic Dropped BoEs are meant to be traded to Putri.",
    oppositeContent:
      "You will get 50% of the gold it yields. The other 50% will go to the guild bank, to fund consumables, which we provide to be able to progress as smoothly as possible. If ",
  },
  {
    id: "4",
    title: "Use Item Enhancements",
    icon: <ConstructionTwoToneIcon />,
    secondTitle: "This includes enchants, gems, pots, flasks, etc.",
    oppositeContent:
      "Everything is provided by the guild. And if anything is missing and you are low on gold, you can ask an officer or any willing guild member to sort you out. Coming to a raid unprepared is unacceptable.",
  },
  {
    id: "5",
    title: "Maintain The Wishlist",
    icon: <PlaylistAddCheckCircleTwoToneIcon />,
    secondTitle: (
      <Link
        variant="body2"
        target="_blank"
        rel="noopener"
        href="https://wowaudit.com/eu/draenor/hiraeth/main-raid/wishlists/personal"
      >
        Keep it up-to-date here.
      </Link>
    ),
    oppositeContent:
      "This allows us to know who benefits more from each boss, and gauge when we can start extending. All you need to do is paste your raidbot simlink",
  },
  {
    id: "6",
    title: "Do Your Best",
    icon: <MilitaryTechTwoToneIcon />,
    secondTitle:
      "We are not a hardcore guild, but we intend to make the most of our raids.",
    oppositeContent:
      "Everyone should strive to give their best when raiding, and spend time researching how to improve outside of raids.",
  },
  {
    id: "7",
    title: "Raid Spots Are Not Guaranteed",
    icon: <NotListedLocationTwoToneIcon />,
    secondTitle:
      "Raids are composed using a fair and transparent system, giving preference to filling key roles first.",
    oppositeContent:
      "Consequently, all players should expect to be rotated based on kills and loot needed. Harbouring expectations of a guaranteed personal raid spot will only lead to disappointment.",
  },
  {
    id: "8",
    title: "The Raid Leader Is The Boss",
    icon: <FortTwoToneIcon />,
    secondTitle:
      "Follow their directions, and be quiet when they are speaking on Discord. Do not monopolise Discord or inundate the RL with whispers about your brilliant strategy ideas during the raid.",
    oppositeContent:
      "Feedback is welcome but make sure it's done in an orderly manner. If discussion is invited, then keep it brief and to the point. Preferably, major raid strategy discussion should be taken after the raid or on discord, outside of the heat of battle. Othewise 24 brilliant strategy ideas would bombard the Raid Leader senseless.",
  },
  {
    id: "9",
    title: "Positive Criticism Is A Good Thing",
    icon: <RecordVoiceOverTwoToneIcon />,
    secondTitle:
      "Members should feel free to give advice and suggestions to other players to improve their play.",
    oppositeContent:
      "Equally, Members should view any positive criticism as an opportunity to improve.",
  },
  {
    id: "10",
    title: "Don't Burn Out",
    icon: <LocalFireDepartmentTwoToneIcon />,
    secondTitle: "If you burn out, it's your fault.",
    oppositeContent:
      "If you wanna push M+, pug on your alts, join all guild events (even optional ones), boost, farm transmogs or mounts, that's completely fine. This is a game, meant to be enjoyed however you'd like. But if any of this causes you to burn out and quit playing before the tier ends, you are essentially letting your team down. You have wasted everyone's time. Please know your limits.",
  },
  {
    id: "11",
    title: "Don't Just Abandon Ship",
    icon: <DirectionsRunTwoToneIcon />,
    secondTitle: "If you leave us mid tier, you lose our trust.",
    oppositeContent:
      "Everyone has extremely valid reasons for wanting to quit the game, that are not related to burning out. However, if in the middle of the tier you suddenly quit without notice, and fail to give a good justification, we will be forced to not allow you to join again at the start of the next tier. Our trust in you will not be the same. Our consideration to give you loot or a spot over someone else will also not be the same. We cannot risk getting to the harder bosses and losing core players which will might set us back for several raids. If you have an issue with the way thing are run, or how other players play, it is advised to reach one of the officers about it. Maybe you are jumping ship because you are tired of Player A afking constantly. But maybe Player A has a very good reason for it, and this guild doesn't punish people for IRL issues. We are not gonna take away enjoyment, or an escape, from someone, because someone else doesn't like it. By quitting you might be causing a bigger issue for 20+ other people, than the one you are frustrated about. Either you give us a chance to explain that, or this guild isn't for you.",
  },
];
export default raiderRequirementsContent;
