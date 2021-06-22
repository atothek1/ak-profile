import { media } from "@utils/styled";
import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

export const GlobalStyle = createGlobalStyle`
    ${ normalize };
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
    * {
        box-sizing: border-box;
    }
    html {
        font-size: 10px;
        font-family: ${ ( { theme } ) => theme.typo.fontFamily }, sans-serif;
        background-color: ${ ( { theme } ) => theme.colors.backgroundColorLight };
        color: ${ ( { theme } ) => theme.colors.backgroundColorDark };
        ${ media.greaterThan( "desktop" )`
            background-color: ${ ( { theme } ) => ( theme.colors.gray ) } 
        ` };
    }
    body {
        font-size: ${ ( { theme } ) => theme.typo.fontSize };
    }
    p, h1, h2, h3, h4, h5, h6 {
        padding: 0;
        margin: 0;
    }
    #root {
        display: flex;
        flex-flow: row wrap;
    }
    a, a:hover, a:focus, a:active {
      text-decoration: none;
      color: inherit;
    }
`;