import styled from "styled-components";

export const UpdateContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 100px;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const SectionUpdate = styled.div`
  padding: 70px 80px;
  width: 80%;
  margin: auto;
  background-color: #121212;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.9), 0 15px 30px rgba(0, 0, 0, 0.8);

  h1 {
    color: blueviolet;
    font-size: 3rem;
    font-weight: bold;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 500px;
    gap: 1rem;
    border-radius: 10px;
    margin: auto;
    margin-right: 0;
    z-index: 10;
  }
`;

export const ImgSaitama = styled.img`
  position: absolute;
  width: 28%;
  top: 20%;
  z-index: 10;
  left: 18%;
`;
