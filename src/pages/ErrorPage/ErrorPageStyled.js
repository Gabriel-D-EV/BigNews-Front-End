import styled from "styled-components";


export const ErrorPageSt = styled.div`
    display: flex;
    width: 70vw;
    padding: 10% 2%;
    margin: 100px auto;
    flex-direction: column;
    align-items: center;
    border-radius: 20px;
    background-color: #090909e9;
    box-shadow: 0 5px 25px rgba(50, 30, 90, 0.70), 0 10px 15px rgba(50, 30, 90, 0.90);
    h1 {
        margin: 5% auto;
        color: #ff0000;
        font-size: 3rem;
        text-align: center;
    }
    p {
        font-size: 2rem;
        text-align: center;
        margin: 0 auto;
        align-items: center;
    }
    i {
        color: violet;
    }
    @media (max-width: 1000px) {
    h1 {
        font-size: 2rem;
    }
    p {
        font-size: 1.4rem;
    }
  }
`;