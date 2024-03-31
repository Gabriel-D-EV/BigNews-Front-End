import styled from "styled-components";

export const AuthContainer = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 75%;
    margin: 0 auto;
    
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

    .inicio {
        display: none;
    }

    @media (max-width: 1000px) {
        margin-top: 12%;
        flex-direction: column;

        .inicio {
            display: flex;
            margin: auto;
            text-align: center;
            align-items: center;
        }
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
    box-shadow: 5px 20px 20px rgba(0, 0, 0, 0.90), 5px 12px 30px rgba(0, 0, 0, 0.40);

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
  width: 15%;
  object-fit: cover;
  cursor: pointer;
  position: absolute;
  top: 2%;

  @media (max-width: 1000px) {
    display: none;
  }
`;

export const ImgLevi = styled.img`
  position: absolute;
  z-index: 10;
  width: 320px;
  left: 0;
  bottom: -7%;

  @media (max-width: 1000px) {
    display: none;
  }
`;
