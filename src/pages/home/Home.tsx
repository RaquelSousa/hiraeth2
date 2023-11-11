import { FC } from "react";
import "./home.scss";
import { Typography } from "@mui/material";
import GuildLeadershipImg from "../../assets/guild_leadership.png";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Dalek from "../../assets/dalek.jpg";
import Arrow from "../../assets/arrow.jpg";
import Putri from "../../assets/putri.jpg";
import Kuga from "../../assets/kuga.jpg";
import WT from "../../assets/wt.jpg";
import Kion from "../../assets/kion.jpg";
import Unicorn from "../../assets/unicorn.png";

const Home: FC = () => {
  return (
    <Stack direction="column" justifyContent="center" alignItems="center">
      <Stack spacing={4} direction="column" className="body">
        <Typography variant="h6" align="center">
          This is an information website, to direct current and new guildies to
          what they need to know related to the guild. The main goal of this
          website is to clear out some Discord channels.
        </Typography>
        <img src={GuildLeadershipImg} alt="Guild Leadership" />
        <Stack
          direction="row"
          spacing={2}
          justifyContent="center"
          alignItems="center"
          className="guild-leadership"
        >
          <Typography variant="h6" color="error">
            Denadel/Kel
            <Avatar alt="Kel" src={WT} sx={{ width: 130, height: 130 }} />
            <Typography variant="h6" color="#ffa726">
              GM/Raid Leader
            </Typography>
          </Typography>
          <Typography variant="h6" color="error">
            Aideen
            <Avatar alt="Aideen" src={Kion} sx={{ width: 130, height: 130 }} />
            <Typography variant="h6" color="#ffa726">
              Tech
            </Typography>
          </Typography>
          <Typography variant="h6" color="error">
            Nubsva
            <Avatar alt="Nubsva" src={Dalek} sx={{ width: 130, height: 130 }} />
            <Typography variant="h6" color="#ffa726">
              Recruitment
            </Typography>
          </Typography>
          <Typography variant="h6" color="error">
            Myris
            <Avatar alt="Myris" src={Kuga} sx={{ width: 130, height: 130 }} />
            <Typography variant="h6" color="#ffa726">
              Co Raid Leader
            </Typography>
          </Typography>
          <Typography variant="h6" color="error">
            Putri
            <Avatar alt="Putri" src={Putri} sx={{ width: 130, height: 130 }} />
            <Typography variant="h6" color="#ffa726">
              Treasury
            </Typography>
          </Typography>
          <Typography variant="h6" color="error">
            Arrow
            <Avatar alt="Arrow" src={Arrow} sx={{ width: 130, height: 130 }} />
            <Typography variant="h6" color="#ffa726">
              HR
            </Typography>
          </Typography>
          <Typography variant="h6" color="error">
            Sumiltal
            <Avatar
              alt="Sumiltal"
              src={Unicorn}
              sx={{ width: 130, height: 130 }}
            />
            <Typography variant="h6" color="#ffa726">
              Healing
            </Typography>
          </Typography>
        </Stack>
      </Stack>
      <br />
      <iframe
        title="Hiraeth Discord"
        src="https://discord.com/widget?id=603232756868055050"
        width="400"
        height="300"
        allowTransparency={true}
        frameBorder="0"
        sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
      ></iframe>
    </Stack>
  );
};

export default Home;
