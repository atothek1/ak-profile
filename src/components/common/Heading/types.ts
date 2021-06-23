import { TextProps } from "../Text";

export type HeadingAllowedAsValues =
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6";

export interface HeadingProps extends TextProps {
    readonly as?: HeadingAllowedAsValues;
    readonly isSticky?: boolean;
}

export type StyledHeadingProps = HeadingProps