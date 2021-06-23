import { BoxProps } from "../Box/types";

export interface HeaderProps extends Readonly<Omit<BoxProps, "as" | "column">> {
    readonly order: number;
}

export interface StyledHeaderProps extends HeaderProps, BoxProps {
    readonly shouldShrink: boolean;
}