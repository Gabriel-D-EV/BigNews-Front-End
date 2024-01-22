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
    background: #aaa;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    }

    ::-webkit-scrollbar {
        width: 8px;
    }

    ::-webkit-scrollbar-thumb {
        width: 8px;
        background: blueviolet;
    }

`;
