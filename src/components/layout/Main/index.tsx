import React from "react";
import { StyledMain } from "./styled";
import { MainProps } from "./types";

export function Main( props: MainProps ): JSX.Element {
    const {
        children,
        column = true,
        ...rest
    } = props;

    return (
        <StyledMain
            forwardedAs="main"
            column={ column }
            { ...rest }
        >
            { children }
        </StyledMain>
    );
}