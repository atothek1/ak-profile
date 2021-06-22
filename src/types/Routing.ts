import { RouteComponentProps, RouteProps } from "react-router";

export interface RouteConfig extends Pick<RouteProps, "path" | "exact" | "component" | "render"> {
    readonly id: string;
}

export interface PageProps extends RouteComponentProps {
    readonly id: string;
}