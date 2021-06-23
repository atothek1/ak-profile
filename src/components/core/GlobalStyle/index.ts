import { media } from "@utils/styled";
import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

export const GlobalStyle = createGlobalStyle`
    ${ normalize };
    
    * {
        box-sizing: border-box;
    }
    html {
        font-size: 10px;
        background-color: ${ ( { theme } ) => theme.colors.backgroundColorLight };
        
        ${ media.greaterThan( "desktop" )`
            background-color: ${ ( { theme } ) => ( theme.colors.gray ) } 
        ` };
    }
    body {
        color: ${ ( { theme } ) => theme.colors.backgroundColorDark };
        font-family: ${ ( { theme } ) => theme.typo.fontFamily }, sans-serif;
        font-size: ${ ( { theme } ) => theme.typo.fontSize };
        line-height: ${ ( { theme } ) => theme.typo.lineHeight };
    }
    p, h1, h2, h3, h4, h5, h6, ul, li {
        padding: 0;
        margin: 0;
    }
    a, a:hover, a:focus, a:active {
      text-decoration: none;
      color: inherit;
    }
    #root {
      display: flex;
      flex-flow: row wrap;
    }
`;