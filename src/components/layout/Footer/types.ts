import { BoxProps } from "../Box/types";

export interface FooterProps extends Readonly<Pick<BoxProps, "children">> {
    readonly order: number;
}

export interface StyledFooterProps extends FooterProps, BoxProps {
}
