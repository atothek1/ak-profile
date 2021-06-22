import React from "react";
import { Route } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import { RouteConfig } from "@type/Routing";

interface RoutesProps {
    readonly children?: React.ReactNode;
    readonly routes: RouteConfig[];
}

export function Routes( props: RoutesProps ): JSX.Element {
    const { children, routes } = props;
    const elements = routes.map( ( route ) => {
        const { id, path, exact, component, render } = route;
        return <Route key={ id } path={ path } exact={ exact } component={ component } render={ render } />
    } );

    return (
        <Router>
            { elements }
            { children }
        </Router>
    );
}