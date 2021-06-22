import React from "react";
import { StyledFooter } from "./styled";
import { FooterProps } from "./types";

export function Footer( props: FooterProps ): JSX.Element {
    const {
        children,
        order
    } = props;

    return (
        <StyledFooter
            forwardedAs="footer"
            order={ order }
        >
            { children }
        </StyledFooter>
    );
}
