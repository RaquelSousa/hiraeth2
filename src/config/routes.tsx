import React, { FC, ReactNode } from "react";
import { Routes, Route } from "react-router-dom";
import CodeOfConduct from "../pages/codeofconduct/CodeOfConduct";
import Home from "../pages/home/Home";
import PeopleAltTwoToneIcon from "@mui/icons-material/PeopleAltTwoTone";
import ConnectWithoutContactTwoToneIcon from "@mui/icons-material/ConnectWithoutContactTwoTone";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import EventRepeatIcon from "@mui/icons-material/EventRepeat";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import Layout from "../components/layout/Layout";
import RaiderRequirementsTimeline from "../pages/raiderrequirements/RaiderRequirements";
import Events from "../pages/events/Events";
import GuildBank from "../pages/guildbank/GuildBank";
import RaiderExpectationsTimeline from "../pages/raiderexpectations/RaiderExpectations";
import BookmarkAddedIcon from "@mui/icons-material/BookmarkAdded";
import RaiderAddons from "../pages/raideraddons/RaiderAddons";
import DownloadDoneTwoToneIcon from "@mui/icons-material/DownloadDoneTwoTone";
import Guidelines from "../pages/guidelines/Guidelines";
import ListAltIcon from "@mui/icons-material/ListAlt";
import LootProcess from "../pages/lootprocess/lootProcess";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import Ranks from "../pages/ranks/Ranks";
import CampaignTwoToneIcon from "@mui/icons-material/CampaignTwoTone";
import Discords from "../pages/discords/Discords";

export interface RouteItem {
  key: string;
  title?: string;
  tooltip?: string;
  path: string;
  component?: ReactNode | string;
  enabled: boolean;
  icon?: any;
  subRoutes?: Array<RouteItem>;
  isApp?: boolean;
  isIndex?: boolean;
  themeName?: string;
  description?: string;
  color?: string;
}

const ComingSoon: React.FC = () => <div>Coming Soon</div>;

export const ContainerRouter = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      {moduleRoutes.map((route) => (
        <Route
          key={route.key}
          path={`${route.path}`}
          element={route.component}
        />
      ))}
      {raiderRoutes.map((route) => (
        <Route
          key={route.key}
          path={`${route.path}`}
          element={route.component}
        />
      ))}
      {resourcesRoutes.map((route) => (
        <Route
          key={route.key}
          path={`${route.path}`}
          element={route.component}
        />
      ))}
    </Route>
  </Routes>
);

export const moduleRoutes: Array<RouteItem> = [
  {
    key: "Home",
    path: "/",
    enabled: true,
    component: <Home />,
    icon: <HomeOutlinedIcon />,
    isIndex: true,
    description: "Home",
  },
  {
    key: "Events",
    path: "events",
    enabled: true,
    component: <Events />,
    icon: <EventRepeatIcon />,
    description: "Events",
  },
  {
    key: "Guild Bank",
    path: "guildBank",
    enabled: true,
    component: <GuildBank />,
    icon: <AccountBalanceIcon />,
    description: "Guild Bank",
  },
  {
    key: "Code of Conduct",
    path: "codeOfConduct",
    enabled: true,
    component: <CodeOfConduct />,
    icon: <ConnectWithoutContactTwoToneIcon />,
    description: "Code of Conduct",
  },
  {
    key: "Our Guidelines",
    path: "guidelines",
    enabled: true,
    component: <Guidelines />,
    icon: <ListAltIcon />,
    description: "Our Guidelines",
  },
  {
    key: "Ranks",
    path: "ranks",
    enabled: true,
    component: <Ranks />,
    icon: <StarOutlineIcon />,
    description: "Ranks",
  },
];

export const raiderRoutes: Array<RouteItem> = [
  {
    key: "Expectations",
    path: "raiderExpectations",
    enabled: true,
    component: <RaiderExpectationsTimeline />,
    icon: <PeopleAltTwoToneIcon />,
    description: "Raider Expectations",
  },
  {
    key: "Requirements",
    path: "raiderRequirements",
    enabled: true,
    component: <RaiderRequirementsTimeline />,
    icon: <BookmarkAddedIcon />,
    description: "Raider Requirements",
  },
  {
    key: "Required Addons",
    path: "raiderrequiredaddons",
    enabled: true,
    component: <RaiderAddons />,
    icon: <DownloadDoneTwoToneIcon />,
    description: "Raider Required Addons",
  },
  {
    key: "Loot Process",
    path: "lootProcess",
    enabled: true,
    component: <LootProcess />,
    icon: <BusinessCenterIcon />,
    description: "Loot Process",
  },
];

export const resourcesRoutes: Array<RouteItem> = [
  {
    key: "Discords",
    path: "discords",
    enabled: true,
    component: <Discords />,
    icon: <CampaignTwoToneIcon />,
    description: "Useful Discords",
  },
];
