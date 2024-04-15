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
    background-color: #3a3a3a59;
    box-shadow: 0 20px 20px rgba(0, 0, 0, 0.80), 0 12px 30px rgba(0, 0, 0, 0.90);
    border-radius: 10px;
    height: 100%;
`

export const CardBodyTop = styled.article`
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    height: 100%;


    img{
        width: 45%;
        height: 30%;
        object-fit: cover;
        object-position: center;
        border-radius: 0 200px 0;
        border: 6px solid blueviolet;
        margin: auto;

        @media (max-width: 1000px) {
            width: 80%;
            height: 60%;
        }
    }

    div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: .5rem;
        

        .imgcarduser {
            width: 90%;
            height: 80%;
            object-fit: cover;
            object-position: center;
            border-radius: 150px 0 150px 0;
        }
    }

    .deletenews {
        color: red;
        font-size: 1.5rem;
        position: absolute;
        top: 1%;
        left: 1%;
        cursor: pointer;
        z-index: 99;
    }

    .updatenews {
        color: violet;
        font-size: 1.5rem;
        position: absolute;
        top: 1%;
        left: 10%;
        cursor: pointer;
        z-index: 99;
    }

    @media (max-width: 1000px) {
        img{
            width: 98%;
            height: 100%;
            object-fit: cover;
            object-position: center;
            margin: auto;
        }
    }
`;

export const CardBody = styled.article`
    width: 100%;
    justify-content: center;
    height: 100%;
    text-decoration: none;

    p {
        text-decoration: none;
        color: white;
        
    }

    img{
        width: 100%;
        object-fit: cover;
        object-position: center;
        border-radius: 10px 10px 0 0;
        
    }

    div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: .5rem;
        width: 100%;
        text-decoration: none;
    }

    .deletenews {
        color: red;
        font-size: 1.5rem;
        position: absolute;
        top: 1%;
        left: 1%;
        cursor: pointer;
    }

    .updatenews {
        color: white;
        font-size: 1.5rem;
        position: absolute;
        top: 1%;
        left: 10%;
        cursor: pointer;
    }
    
`;
 
export const CardHeader = styled.article`
    display: flex;
    text-align: justify;
    flex-direction: column;
    width: 95%;
    font-size: ${(props) => (props.top ? "1.2rem" : ".9rem")};
    margin-bottom: 10%;
    h2 {
        
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
    position: absolute;
    bottom: 2%;
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
        color: white;
    }
    span {
        font-size: 1rem;
        color: white;
    }
`;