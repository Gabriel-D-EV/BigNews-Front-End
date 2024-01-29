import styled from "styled-components";


export const CardContainer = styled.section`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-width: 100%;
    background-color: #3a3a3a;
    box-shadow: 5px 20px 20px rgba(0, 0, 0, 0.40), 5px 12px 10px rgba(0, 0, 0, 0.40);
    border-radius: 10px;
`

export const CardBody = styled.article`
    display: flex;
   width: 100%;
    justify-content: center;
    height: 100%;


    img{
        width: 40%;
        object-fit: cover;
        object-position: center;
        border-radius: 0 10px 10px 0;
    }

    div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 1rem;
        width: 100%;
    }
`;
 
export const CardHeader = styled.article`
    display: flex;
    flex-direction: column;
    width: 100%;
    font-size: ${(props) => (props.top ? "1.3rem" : ".9rem")};
    
    h2 {
        margin-bottom: 1rem;
        width: 100%;
        font-size: ${(props) => (props.top? "3rem" : "1.5rem")};
    }
`;

export const CardFooter = styled.section`
    display: flex;
    align-items: center;
    gap: 1rem;
    

    section {
        display: flex;
        align-items: center;
        gap: 0.2rem;
        bottom: 0;
    }
`;