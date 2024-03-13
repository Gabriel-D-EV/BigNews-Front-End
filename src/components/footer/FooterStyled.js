import styled from "styled-components";

export const FooterStyle = styled.footer`
    display: flex;
    align-items: end;
    justify-content: space-around;
    background-color: #121212;
    z-index: 99;

    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
    }
    p {
        text-align: center;
        padding: 50px;
    }
`;

export const Redes = styled.div`

    
    p {
        align-items: center;
        font-size: 1.3rem;
        font-weight: bold;
        color: white;
        margin: 0;
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

export const ImgDon = styled.img`
    position: absolute;
    width: 250px;
`;

export const ImgQR = styled.img`
    width: 200px;
    
`;
export const ImgLogo = styled.img`
    width: 200px;
`; 