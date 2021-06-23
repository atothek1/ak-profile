
import React from "react";
import { FlattenInterpolation } from "styled-components";

export type TextAllowedAsValues =
    | "span"
    | "p"
    | "q"
    | "kbd"
    | "code"
    | "data"
    | "time"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "blockquote";

export interface TextProps extends TestIdProps {
    readonly children: React.ReactNode;
    readonly as?: TextAllowedAsValues;
    readonly bold?: boolean;
    readonly color?: string;
    readonly css?: FlattenInterpolation<TextProps>;
}

export type StyledTextProps = TextProps;