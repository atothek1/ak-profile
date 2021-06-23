import { Heading } from "@components/common";
import React from "react";
import { Footer, Header, Main } from "@components/layout";
import { useTheme } from "styled-components";
import { LayoutProps } from "./types";
import { Navigation } from "@components/core/Navigation";

export function Layout( { children }: LayoutProps ): JSX.Element {
    const { colors } = useTheme();
    return (
        <>
            <Main order={ 1 }>
                {children}
            </Main>
            <Header order={ 0 }>
                <Heading color={ colors.colorLight }> Profile</Heading>
                <Navigation />
            </Header>
            <Footer order={ 2 }>
                Footer
            </Footer>
        </>
    );
}
