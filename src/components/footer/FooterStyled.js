import styled from "styled-components";

export const FooterStyle = styled.footer`
    display: flex;
    align-items: end;
    justify-content: space-around;
    background-color: #121212;
    
    
    p {
        text-align: center;
        padding: 20px;
    }
`;

export const Redes = styled.div`
    
    p {
        align-items: center;
        font-size: 1.5rem;
        font-weight: bold;
        color: white;
        margin: 0;
        padding: 20px;
        padding: 5px;
    }
    
    a {
        margin: 10px;
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

export const Img = styled.img`
    position: absolute;
    width: 300px;
    
`;