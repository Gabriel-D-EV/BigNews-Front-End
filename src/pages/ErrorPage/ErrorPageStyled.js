import styled from "styled-components";

export const ErrorPageSt = styled.div`
    display: flex;
    width: 70vw;
    padding: 30px;
    margin: 100px auto;
    flex-direction: column;
    align-items: center;
    border-radius: 20px;
    font-size: 2rem;
    background-color: #090909e9;
    box-shadow: 5px 20px 15px rgba(50, 30, 90, 0.70), 5px 12px 10px rgba(50, 30, 90, 0.70);
    h1 {
        margin: 100px auto;
        color: #ff0000;
        font-size: 6rem;
    }
    p {
        margin: 20px auto;
        color: #ff0000;
        font-size: 2rem;
    }
    i {
        color: #fff;
    }
`;