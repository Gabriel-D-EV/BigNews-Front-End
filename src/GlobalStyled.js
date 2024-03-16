import { createGlobalStyle } from "styled-components";
import images from "./images/animes-bg.jpg";

export const GlobalStyle = createGlobalStyle`
    *{
    margin: 0;
    padding: 0;
    font-family: "Roboto", "Fira Sans", Inter, Verdana, sans-serif;
    }

    html {
    width: auto;
    }

    body {
    max-width: 100vw;
    height: 100vh;
    color: white;
    background-image: url(${images});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-attachment: fixed;
    }

    ::-webkit-scrollbar {
        width: 8px;
        background: #0f0f0fe9;
    }

    ::-webkit-scrollbar-thumb {
        width: 8px;
        background: black;
    }

`;
