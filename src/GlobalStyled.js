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
    padding-top: 5%;
    max-width: 100vw;
    height: 100vh;
    background-color: black;
    color: white;
    }
`;
