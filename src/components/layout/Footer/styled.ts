import styled from "styled-components";
import { Box } from "../Box";
import { StyledFooterProps } from "./types";
import { media } from "@utils/styled";

export const StyledFooter = styled( Box )<StyledFooterProps>`
    ${ props => ( props.order !== undefined ? `order: ${ props.order };` : "" ) }
    
    background-color: ${ ( { theme } ) => theme.colors.backgroundColorDark };
    color: ${ ( { theme } ) => theme.colors.colorLight };
    padding: ${ ( { theme } ) => theme.spacings.padding1x };
    height: ${ ( { theme } ) => theme.sizes.heightFooterMobile };

    ${ media.greaterThan<StyledFooterProps>( "tablet" )`
        height: ${ ( { theme } ) => theme.sizes.heightFooterTablet };
    ` };
  
    ${ media.greaterThan<StyledFooterProps>( "desktop" )`
        height: ${ ( { theme } ) => theme.sizes.heightHeaderDesktop };
    ` };
`;
