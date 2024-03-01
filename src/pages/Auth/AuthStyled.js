import styled from "styled-components";

export const AuthContainer = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70%;
    margin: 0 auto;
    padding: 0 15%;
    background-color: #0f0f0fe9;
    gap: 50px;
    
    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        max-width: 400px;
        gap: 0.7rem;
        border-radius: 10px;
        margin: auto;
        z-index: 10;
    }
`;

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 60%;
    padding: 2rem;
    gap: 1rem;
    background-color: ${(props) => (props.type === "signin" ? "blueviolet" : "gray")};
    color: ${(props) => (props.type === "signup" ? "blueviolet" : "gray")};
    border-radius: 10px;
    box-shadow: 5px 20px 20px rgba(0, 0, 0, 0.40), 5px 12px 10px rgba(0, 0, 0, 0.40);

    h2 {
        font-size: 2rem;
        text-align: center;
        font-weight: bold;
        color: black;
    }
    hr {
        width: 100%;
        height: 1px;
        border: none;
        background-color: black;
    }
`;
export const Img = styled.img`
  width: 5rem;
  height: 3.5rem;
  object-fit: cover;
  cursor: pointer;
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
`;
