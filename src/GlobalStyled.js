import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
    margin: 0;
    padding: 0;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }

    html {
    width: auto;
    }

    body {
    padding-top: 4%;
    max-width: 100vw;
    height: 100vh;
    color: white;
    background-color: #888;
    }
`;
