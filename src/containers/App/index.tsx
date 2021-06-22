import React, { StrictMode } from "react";
import { BrowserRouter, Redirect } from "react-router-dom";
import { theme } from "@utils/theme";
import { StyledProvider } from "@components/core";
import { Routes } from "@components/core/Routes";
import { RouteConfig } from "@type/Routing";

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