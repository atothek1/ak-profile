import { BoxProps } from "../Box/types";

export interface HeaderProps extends Readonly<Pick<BoxProps, "children">> {
    readonly order: number;
}

export interface StyledHeaderProps extends HeaderProps, BoxProps {
    readonly shouldShrink: boolean;
}