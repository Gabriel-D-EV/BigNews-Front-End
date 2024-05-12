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
        bottom: 5px;
        text-decoration: none;
        background-color: #0f0f0f89; 
        width: 40px;
        height: 40px;
        border-radius: 50%;
        color: white;
        font-size: 2rem;
        font-weight: 600;
        padding: 2px;
        transition: .2s ease-in-out;   
    }

    i {
        align-items: center;
        justify-content: center;
    }
    a:hover {
        color: blueviolet;
        transform: translateX(-10px);
    }
   
`;