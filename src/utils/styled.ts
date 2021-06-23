import { Breakpoints, Theme } from "@type/Theme";
import { theme } from "@utils/theme";
import {
    css,
    DefaultTheme,
    FlattenInterpolation,
    FlattenSimpleInterpolation,
    ThemedStyledProps,
    ThemeProps,
} from "styled-components";
import { generateMedia, MediaGenerator } from "styled-media-query";

function textBase( color?: string, bold = false ): FlattenInterpolation<ThemedStyledProps<unknown, DefaultTheme>> {
    return css`
        font-size: ${ ( { theme } ) => theme.typo.fontSize };
        font-weight: ${ ( { theme } ) => ( bold ? theme.typo.fontWeightBold : theme.typo.fontWeight ) };
        color: ${ ( { theme } ) => ( color || theme.colors.colorDark ) };
        line-height: ${ ( { theme } ) => theme.typo.lineHeight };
        font-style: normal;
        font-stretch: normal;
        letter-spacing: normal;
    `;
}

export function textNormal( color?: string ): FlattenInterpolation<ThemedStyledProps<unknown, DefaultTheme>> {
    return css`
      ${ textBase( color, false ) };
    `;
}

export function textNormalBold( color?: string ): FlattenInterpolation<ThemedStyledProps<unknown, DefaultTheme>> {
    return css`
      ${ textBase( color, true ) };
    `;
}
export function listReset(): FlattenSimpleInterpolation {
    return css`
        list-style: none;
        margin: 0;
        padding: 0;
    `;
}

export function dropShadow( color?: string ): FlattenInterpolation<ThemeProps<Theme>> {
    return css`
        box-shadow: 0 2px 2px 2px ${ ( { theme } ) => ( color ? color : theme.colors.backgroundColorDark ) };
    `;
}

export function boxShadow( color?: string ): FlattenInterpolation<ThemeProps<Theme>> {
    return css`
        box-shadow: 0.2rem 0.2rem 0.2rem ${ ( { theme } ) => ( color ? color : theme.colors.backgroundColorDark ) };
    `;
}

type PropsWithClassName = { readonly className: string };
export function getClassName<TProps>( props: TProps ): string {
    return ( props as unknown as PropsWithClassName ).className ? ( props as unknown as PropsWithClassName ).className : "";
}

export const media: MediaGenerator<Breakpoints, Theme> = generateMedia( { ...theme.breakpoints } );
