import React, { ForwardedRef, forwardRef } from "react";
import { StyledText } from "./styled";
import { TextProps } from "./types";

function InnerText( props: TextProps, ref: ForwardedRef<HTMLElement> ): JSX.Element {
    const {
        children,
        as = "p",
        testId,
        bold = false,
        ...rest
    } = props;

    return (
        <StyledText
            ref={ ref as ForwardedRef<HTMLParagraphElement> }
            data-testid={ testId }
            as={ as }
            bold={ bold }
            { ...rest }
        >
            { children }
        </StyledText>
    );
}

export const Text = forwardRef( InnerText );