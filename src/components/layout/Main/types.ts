import { BoxProps } from "../Box/types";

export interface MainProps extends Readonly<Pick<BoxProps, "children">> {
    readonly order: number;
}

export interface StyledMainProps extends MainProps, BoxProps {
    readonly column: boolean;
}
