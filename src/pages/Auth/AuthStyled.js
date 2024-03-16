import styled from "styled-components";

export const AuthContainer = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 75%;
    margin: 0 auto;
    padding: 0 50px;
    background-color: #0f0f0fe9;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.40), 0 12px 20px rgba(0, 0, 0, 0.80);
    border-radius: 10px;
    gap: 10px;
    margin-bottom: 60px;
    
    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        max-width: 500px;
        gap: 1rem;
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
    background-color: ${(props) => (props.type === "signin" ? "#121212" : "gray")};
    color: ${(props) => (props.type === "signup" ? "#121212" : "gray")};
    border-radius: 10px;
    box-shadow: 5px 20px 20px rgba(0, 0, 0, 0.40), 5px 12px 10px rgba(0, 0, 0, 0.40);

    h2 {
        font-size: 2rem;
        text-align: center;
        font-weight: bolder;
        color: white;
    }
    hr {
        width: 100%;
        height: 1px;
        border: none;
        background-color: white;
    }
`;
export const Img = styled.img`
  width: 15rem;
  object-fit: cover;
  cursor: pointer;
  position: absolute;
  top: 20px;
`;

export const ImgLevi = styled.img`
  position: absolute;
  z-index: 10;
  width: 320px;
  left: 0;
  bottom: -60px;
`;
