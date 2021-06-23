export type JustifyContent =
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around";

export type AlignItems =
    | "flex-start"
    | "flex-end"
    | "center"
    | "baseline"
    | "stretch";

export interface Colors {
    readonly backgroundColorLight: string;
    readonly backgroundColorDark: string;
    readonly colorLight: string;
    readonly colorDark: string;
    readonly borderColor: string;

    readonly gray: string;
    readonly blue: string;
    readonly yellow: string;
}

export interface Breakpoints {
    readonly mobile: string;
    readonly tablet: string;
    readonly desktop: string;
}

export interface Typo {
    readonly fontFamily: string;
    readonly fontSize: string;
    readonly fontWeight: string;
    readonly fontWeightBold: string;

    readonly lineHeight: string;
}

export interface Sizes {
    readonly heightHeaderSmall: string;

    readonly heightHeaderMobile: string;
    readonly heightHeaderTablet: string;
    readonly heightHeaderDesktop: string;

    readonly heightFooterMobile: string;
    readonly heightFooterTablet: string;
    readonly heightFooterDesktop: string;
}

export interface Layers {
    readonly zIndexAppFrame: string;
    readonly zIndexModal: string;
    readonly zIndexFloatingButton: string;
}

export interface Spacings {
    readonly margin1x: string;
    readonly margin2x: string;
    readonly margin4x: string;
    readonly margin8x: string;
    readonly padding1x: string;
    readonly padding2x: string;
    readonly padding4x: string;
    readonly padding8x: string;
}

export interface Theme {
    readonly colors: Colors;
    readonly breakpoints: Breakpoints;
    readonly typo: Typo;
    readonly sizes: Sizes;
    readonly spacings: Spacings;
    readonly layers: Layers;
}