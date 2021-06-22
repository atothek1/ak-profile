import { Home } from "@pages/Home";
import { Interests } from "@pages/Interests";
import { Resume } from "@pages/Resume";
import { Skills } from "@pages/Skills";
import { RouteConfig } from "@type/Routing";
import React from "react";

export const homeRoutes: RouteConfig[] = [
    {
        id: "resume",
        exact: false,
        // eslint-disable-next-line react/display-name
        render: props => ( <Resume id="resume" { ...props } /> )
    },
    {
        id: "skills",
        exact: false,
        // eslint-disable-next-line react/display-name
        render: props => ( <Skills id="skills" { ...props } /> )
    },
    {
        id: "interests",
        exact: false,
        // eslint-disable-next-line react/display-name
        render: props => ( <Interests id="interests" { ...props } /> )
    }
];

export const routes: RouteConfig[] = [
    {
        id: "home",
        path:"/home",
        exact: true,
        // eslint-disable-next-line react/display-name
        render: props => ( <Home id="home" routes={ homeRoutes } { ...props } /> )
    }
];
