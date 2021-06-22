import React from "react";
import { Footer, Header, Main } from "@components/layout";
import { LayoutProps } from "./types";
import { Navigation } from "@components/core/Navigation";

export function Layout( { children }: LayoutProps ): JSX.Element {
    return (
        <>
            <Main order={ 1 }>
                {children}
            </Main>
            <Header order={ 0 }>
                <Navigation />
            </Header>
            <Footer order={ 2 }>
                Footer
            </Footer>
        </>
    );
}
