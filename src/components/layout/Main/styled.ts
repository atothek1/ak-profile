import { media } from "@utils/styled";
import styled from "styled-components";
import { Box } from "../Box";
import { StyledMainProps } from "./types";

export const StyledMain = styled( Box )<StyledMainProps>`
    ${ props => ( props.order !== undefined ? `order: ${ props.order };` : "" ) }
    flex: 1;
    padding: ${ ( { theme } ) => theme.spacings.padding1x };
    margin-top: ${ ( { theme } ) => theme.sizes.heightHeaderMobile };
  
    ${ media.greaterThan<StyledMainProps>( "tablet" )`
        margin-top: ${ ( { theme } ) => theme.sizes.heightHeaderTablet };
    ` };
  
    ${ media.greaterThan<StyledMainProps>( "desktop" )`
        max-width: 102.4rem;
        margin: 0 auto;
        margin-top: ${ ( { theme } ) => theme.sizes.heightHeaderDesktop };
        background-color: ${ ( { theme } ) => ( theme.colors.backgroundColorLight ) } 
    ` };
`;
