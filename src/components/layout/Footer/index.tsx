import React from "react";
import { StyledFooter } from "./styled";
import { FooterProps } from "./types";

export function Footer( props: FooterProps ): JSX.Element {
    const {
        children,
        ...rest
    } = props;

    return (
        <StyledFooter
            forwardedAs="footer"
            { ...rest }
        >
            { children }
        </StyledFooter>
    );
}
