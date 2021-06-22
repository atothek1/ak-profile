import styled from "styled-components";
import { Box } from "../Box";
import { StyledHeaderProps } from "./types";
import { dropShadow, media } from "@utils/styled";

export const StyledHeader = styled( Box )<StyledHeaderProps>`
    ${ props => ( props.order !== undefined ? `order: ${ props.order };` : "" ) }

    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: ${ ( { theme } ) => theme.layers.zIndexAppFrame };

    padding: ${ ( { theme } ) => theme.spacings.padding1x };
    height: ${ ( { theme, shouldShrink } ) => shouldShrink ? theme.sizes.heightHeaderSmall : theme.sizes.heightHeaderMobile };
    background-color: ${ ( { theme } ) => theme.colors.backgroundColorDark };
    color: ${ ( { theme } ) => theme.colors.colorLight };

    transition: height 180ms ease-out;
  
    ${ dropShadow() };
  
    ${ media.between<StyledHeaderProps>( "tablet", "desktop" )`
        height: ${ ( { theme, shouldShrink } ) => shouldShrink ? theme.sizes.heightHeaderSmall : theme.sizes.heightHeaderTablet };
        justify-content: center;
        align-items: flex-end;
    ` };

    ${ media.greaterThan<StyledHeaderProps>( "desktop" )`
        height: ${ ( { theme, shouldShrink } ) => shouldShrink ? theme.sizes.heightHeaderSmall : theme.sizes.heightHeaderDesktop };
        justify-content: center;
        align-items: flex-end;
    ` };
`;
