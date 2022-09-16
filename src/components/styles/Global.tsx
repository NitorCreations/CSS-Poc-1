import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: flex;
    }
    
    h1 {
        padding: 0 2rem;
    }

    body {
        background: #ffffff;
        color: hsl(192, 100%, 9%);
        font-family: sans-serif;
        font-size: 1.15em;
        margin: 0;
    }

    p {
        opacity: 0.6;
        line-height: 1.5;
    }

    img {
        max-width: 100%;
    }
`;

export default GlobalStyles;
