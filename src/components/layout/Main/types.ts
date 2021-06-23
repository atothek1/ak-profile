import { BoxProps } from "../Box/types";

export interface MainProps extends Readonly<Omit<BoxProps, "as">> {
    readonly order: number;
}

export interface StyledMainProps extends MainProps, BoxProps {
}
