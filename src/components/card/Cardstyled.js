import styled from "styled-components";


export const CardContainer = styled.section`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-width: 100%;
    background-color: #3c3c3c;
    box-shadow: 5px 20px 20px rgba(0, 0, 0, 0.40), 5px 12px 10px rgba(0, 0, 0, 0.40);
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
        bottom: 0;
    }
`;