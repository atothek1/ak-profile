import {
    css,
    FlattenInterpolation,
    FlattenSimpleInterpolation,
    ThemeProps,
} from "styled-components";
import { Breakpoints, Theme } from "@type/Theme";
import { generateMedia, MediaGenerator } from "styled-media-query";
import { theme } from "@utils/theme";

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

export const media: MediaGenerator<Breakpoints, Theme> = generateMedia( { ...theme.breakpoints } );
