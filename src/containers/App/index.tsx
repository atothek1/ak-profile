import { StyledProvider } from "@components/core";
import { Routes } from "@components/core/Routes";
import { RouteConfig } from "@type/Routing";
import { theme } from "@utils/theme";
import React, { StrictMode } from "react";
import { Helmet } from "react-helmet";
import { BrowserRouter, Redirect } from "react-router-dom";

interface AppProps {
    readonly name: string;
    readonly version: string;
    readonly environment: string;
    readonly routes: RouteConfig[];
}

export function App( props: AppProps ): JSX.Element {
    const { name, version, environment, routes } = props;

    console.log( `Starting app: "${ name }" v${ version }; env: ${ environment }` );

    return (
        <StrictMode>
            <Helmet>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet" />
            </Helmet>
            <BrowserRouter>
                <StyledProvider theme={ theme }>
                    <Routes routes={ routes }>
                        <Redirect to="/home" />
                    </Routes>
                </StyledProvider>
            </BrowserRouter>
        </StrictMode>
    );
}