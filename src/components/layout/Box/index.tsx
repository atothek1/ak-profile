import React, { ForwardedRef, forwardRef } from "react";
import { StyledBox } from "./styled";
import { BoxProps } from "./types";

function InnerBox( props: BoxProps, ref: ForwardedRef<unknown> ): JSX.Element {
    const {
        children,
        as = "div",
        column = false,
        width = "100%",
        height = "100%",
        ...rest
    } = props;

    return (
        <StyledBox
            ref={ ref as ForwardedRef<HTMLDivElement> }
            as={ as }
            column={ column }
            $width={ width }
            $height={ height }
            { ...rest }>
            {children}
        </StyledBox>
    );
}

export const Box = forwardRef( InnerBox );
