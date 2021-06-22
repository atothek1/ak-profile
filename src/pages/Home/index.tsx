import { Routes } from "@components/core/Routes";
import { Page } from "@components/layout/Page";
import { PageProps, RouteConfig } from "@type/Routing";
import React from "react";

interface HomeProps extends PageProps {
    readonly routes: RouteConfig[];
}
export function Home( props: HomeProps ): JSX.Element {
    const { id, routes } = props;
    return (
        <>
            <Page id={ id } as="section" height="800px">
                Hello Home Page
            </Page>
            <Routes routes={ routes } />
        </>
    )
}