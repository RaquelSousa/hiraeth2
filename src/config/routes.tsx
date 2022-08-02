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
import RaiderRequirementsTimeline from "../pages/raiderexpectations/RaiderExpectations";

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
    component: <ComingSoon />,
    icon: <EventRepeatIcon />,
    description: "Events",
  },
  {
    key: "Guild Bank",
    path: "guidBank",
    enabled: true,
    component: <ComingSoon />,
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
];

export const raiderRoutes: Array<RouteItem> = [
  {
    key: "Expectations",
    path: "raiderExpectations",
    enabled: true,
    component: <RaiderRequirementsTimeline />,
    icon: <PeopleAltTwoToneIcon />,
    description: "Raider Rules",
  },
];
