import { BoxProps } from "@components/layout/Box/types";
import React from "react";
import { Box } from "@components/layout";
import styled from "styled-components";

export const StyledPage = styled( Box )`
    margin-bottom: ${ props => props.theme.spacings.margin4x };
`;

type PageProps = Omit<BoxProps, "column">

export function Page( props: PageProps ): JSX.Element {
    const {
        children,
        as = "article",
        ...rest
    } = props;
    return (
        <StyledPage
            forwardedAs={ as }
            column
            { ...rest }
        >
            { children }
        </StyledPage>
    );
}
