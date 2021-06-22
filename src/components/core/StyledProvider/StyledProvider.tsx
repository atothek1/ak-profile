import { GlobalStyle, Layout } from "@components/core";
import React from "react";
import { ThemeProvider } from "styled-components";
import { Provider } from "./context";
import { StyledProviderContextValue, StyledProviderProps } from "./types";

export function StyledProvider( props: StyledProviderProps ): JSX.Element {
    const { children, theme } = props;
    const value: StyledProviderContextValue = {};

    return (
        <ThemeProvider theme={ theme }>
            <Provider value={ value }>
                <GlobalStyle />
                <Layout>
                    { children}
                </Layout>
            </Provider>
        </ThemeProvider>
    );
}