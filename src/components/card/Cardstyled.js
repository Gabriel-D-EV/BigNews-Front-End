import styled from "styled-components";


export const CardContainer = styled.section`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-width: 100%;
    background-color: #3c3c3c;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
    border-radius: 10px;
    padding: 10px;
`

export const CardBody = styled.article`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    h2 {
        margin-bottom: 1rem;
    }
    img{
        width: 30%;
        object-fit: cover;
        object-position: center;
    }
`;
 

export const CardFooter = styled.section`
    display: flex;
    align-items: center;
    gap: 1rem;

    div {
        display: flex;
        align-items: center;
        gap: 0.2rem;
    }
`;