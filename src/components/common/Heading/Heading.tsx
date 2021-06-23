import { StyledHeading } from "@components/common/Heading/styled";
import React from "react";
import { HeadingProps } from "./types";

export function Heading( props: HeadingProps ): JSX.Element {
    const {
        children,
        as = "h1",
        isSticky = false,
        ...rest
    } = props;

    return (
        <StyledHeading
            forwardedAs={ as }
            isSticky={ isSticky }
            { ...rest }
        >
            { children }
        </StyledHeading>
    );
}