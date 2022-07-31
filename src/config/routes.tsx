import React, { FC, ReactNode } from "react";
import { Routes, Route } from "react-router-dom";
import CodeOfConduct from "../pages/codeofconduct/CodeOfConduct";
import RaiderRules from "../pages/raiderrules/RaiderRules";
import Home from "../pages/home/Home";
import PeopleAltTwoToneIcon from "@mui/icons-material/PeopleAltTwoTone";
import ConnectWithoutContactTwoToneIcon from "@mui/icons-material/ConnectWithoutContactTwoTone";

export interface RouteItem {
  key: string;
  title?: string;
  tooltip?: string;
  path: string;
  component?: ReactNode | string;
  enabled: boolean;
  icon?: string;
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
    {/* <Route path="/" element={<Layout />}> */}
    <Route index element={<Home />} />
    {moduleRoutes.map((route) => (
      <Route key={route.key} path={`${route.path}`} element={route.component} />
    ))}
  </Routes>
);

export const moduleRoutes: Array<RouteItem> = [
  {
    key: "codeOfConduct",
    path: "codeOfConduct",
    enabled: true,
    component: <CodeOfConduct />,
    // icon: ConnectWithoutContactTwoToneIcon,
    description: "Code of Conduct",
  },
  {
    key: "raiderRules",
    path: "raiderRules",
    enabled: true,
    component: <RaiderRules />,
    // icon: PeopleAltTwoToneIcon,
    description: "Raider Rules",
  },
  {
    key: "events",
    path: "events",
    enabled: true,
    component: <ComingSoon />,
    // icon: projectsIcon,
    description: "Events",
  },
  {
    key: "guildBank",
    path: "guidBank",
    enabled: true,
    component: <ComingSoon />,
    // icon: projectsIcon,
    description: "Guild Bank",
  },
];
