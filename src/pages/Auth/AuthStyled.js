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

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        max-width: 400px;
        gap: 0.5rem;
        border-radius: 10px;
        
    }
`;

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 400px;
    padding: 2rem;
    gap: 1rem;
    background-color: ${(props) => (props.type === "signin" ? "blueviolet" : "gray")};
    color: ${(props) => (props.type === "signup" ? "blueviolet" : "gray")};

    h2 {
        font-size: 2rem;
        text-align: center;
        font-weight: bold;
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
