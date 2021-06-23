import { BoxProps } from "../Box/types";

export interface FooterProps extends Readonly<Omit<BoxProps, "as" | "column">> {
    readonly order: number;
}

export interface StyledFooterProps extends FooterProps, BoxProps {
}
