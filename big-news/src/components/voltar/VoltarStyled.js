import styled from "styled-components";


export const VoltarStyle = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    text-align: center;
    margin: 0 auto;
    position: relative;

    a {
        position: absolute;
        left: -8%;
        bottom: -15px;
        text-decoration: none;
        color: white;
        font-size: 2rem;
        font-weight: 600;
        margin: 1rem;
        transition: .2s ease-in-out;   
    }
    p {
        font-size: 1rem;
    }

    a:hover {
        color: blueviolet;
        transform: translateX(-10px);
    }
   
`;