import { FC } from "react";
import "./home.scss";
import { Box, Typography } from "@mui/material";
import Menu from "../../components/drawer/Menu";
import Layout from "../../components/layout/Layout";

const Home: FC = () => {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <div className="body">
          <Typography variant="h1" align="center">
            HIRAETH
          </Typography>
          <Typography variant="h6" align="center">
            This is an information website, to direct current and new guildies
            to what they need to know related to the guild.
          </Typography>
        </div>
      </Box>
    </>
  );
};

export default Home;
