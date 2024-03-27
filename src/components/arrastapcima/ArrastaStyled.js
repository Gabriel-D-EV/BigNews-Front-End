import styled from "styled-components";


export const ArrastaStyle = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    text-align: center;
    margin: 0 auto;
    position: relative;

    a {
        position: absolute;
        right: 50%;
        bottom: 3%;
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
        transform: translateY(-15px);
    }
   
`;