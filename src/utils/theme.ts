import { Breakpoints, Colors, Layers, Sizes, Spacings, Theme, Typo } from "../types";

const minUnit = 8; // 8px based layout Grid

const colors: Colors = {
    backgroundColorDark: "#353D40",
    backgroundColorLight: "#D9D9D9",
    borderColor: "",
    colorDark: "#353D40",
    colorLight: "#D9D9D9",

    gray: "#A1A5A6",
    blue: "#003F63",
    yellow: "#F2B138"
}

// in px as media queries not properly working with rem and changed base font-size
const breakpoints: Breakpoints = {
    mobile: "375px",
    tablet: "768px",
    desktop: "1024px",
}

const typo: Typo = {
    fontFamily: "Roboto",
    fontSize: "1.6rem",
    fontWeight: "400",
    fontWeightBold: "700",
    lineHeight: "1.5",
};

const sizes: Sizes = {
    heightHeaderSmall: `${ minUnit * 4 / 10 }rem`, // 32 px
    heightHeaderMobile: `${ minUnit * 6 / 10 }rem`, // 48 px
    heightHeaderTablet: `${ minUnit * 8 / 10 }rem`, // 64px
    heightHeaderDesktop: `${ minUnit }rem`, // 80px
    heightFooterMobile: `${ minUnit * 6 / 10 }rem`, // 48 px
    heightFooterTablet: `${ minUnit * 8 / 10 }rem`, // 64px
    heightFooterDesktop: `${ minUnit }rem`, // 80px
}

const spacings: Spacings = {
    margin1x: `${ minUnit / 10 }rem`,
    margin2x: `${ minUnit * 2 / 10 }rem`,
    padding1x: `${ minUnit / 10 }rem`,
    padding2x: `${ minUnit * 2 / 10 }rem`,
};

const layers: Layers = {
    zIndexAppFrame: "1000",
    zIndexFloatingButton: "2000",
    zIndexModal: "10000",
};

export const theme: Theme = {
    colors,
    breakpoints,
    typo,
    sizes,
    spacings,
    layers
}