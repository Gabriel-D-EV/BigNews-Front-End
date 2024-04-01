import styled from "styled-components";

export const CardContainerTop = styled.section`
    display: flex;
    flex-direction: column;
    position: relative;
    cursor: pointer;
    max-width: 100%;
    
`

export const CardContainer = styled.section`
    display: flex;
    flex-direction: column;
    position: relative;
    gap: 1rem;
    cursor: pointer;
    max-width: 100%;
    background-color: #3a3a3a;
    box-shadow: 0 20px 20px rgba(0, 0, 0, 0.80), 0 12px 30px rgba(0, 0, 0, 0.90);
    border-radius: 10px;
    border: 1px solid white;
    
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
        border: 3px solid white;
    }

    div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: .5rem;
        width: 100%;
    }

    .deletenews {
        color: red;
        font-size: 1.5rem;
        position: absolute;
        top: 1%;
        left: 1%;
        cursor: pointer;
    }
`;
 
export const CardHeader = styled.article`
    display: flex;
    flex-direction: column;
    width: 100%;
    font-size: ${(props) => (props.top ? "1.2rem" : ".9rem")};
    
    h2 {
        margin-top: 20px;
        color: ${(props) => (props.top? "violet" : "aquamarine")};
        text-align: center;
        margin-bottom: .5rem;
        width: 100%;
        font-style: italic;
        font-size: ${(props) => (props.top? "4.2rem" : "1.5rem")};
    }

    @media (max-width: 1000px) {
        font-size: ${(props) => (props.top ? "1.2rem" : ".9rem")};

        h2 {
            font-size: ${(props) => (props.top? "2rem" : "1.4rem")};
        }
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
    i {
        font-size: 1rem;
    }
    span {
        font-size: 1rem;
    }
`;