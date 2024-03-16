import styled from "styled-components";

export const FooterStyle = styled.footer`
    display: flex;
    align-items: end;
    justify-content: space-around;
    background-color: #121212;
    z-index: 99;
    padding: 10px;

    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;

        a {
        margin: 5px;
        display: flex;
        align-items: center;
        gap: 10px;
        text-decoration: none;
        color: white;
        font-size: 1rem;
        }
        a:hover {
            color: blueviolet;
        }
        
    }
    p {
        text-align: center;
    }
`;

export const Redes = styled.div`

    padding: 50px;

    p {
        align-items: center;
        text-align: center;
        font-size: 1.3rem;
        font-weight: bold;
        color: white;
        padding: 5px;
    }  
    a {
        margin: 5px;
        display: flex;
        align-items: center;
        gap: 10px;
        text-decoration: none;
        color: white;
        font-size: 1.5rem;
    }
    i {
        transition: all .2s ease-in-out;
    }
    a:hover {
        i {
            transform: scale(1.7);
            color: blueviolet;
        }
        p {
            color: blueviolet;
        }
    }
`;

export const ImgQR = styled.img`
    width: 200px;
    
`;
export const ImgLogo = styled.img`
    width: 280px;
`; 