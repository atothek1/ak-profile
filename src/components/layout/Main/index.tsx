import React from "react";
import { StyledMain } from "./styled";
import { MainProps } from "./types";

export function Main( props: MainProps ): JSX.Element {
    const {
        children,
        order
    } = props;

    return (
        <StyledMain
            forwardedAs="main"
            column
            order={ order }
        >
            { children }
        </StyledMain>
    );
}