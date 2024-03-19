import styled from "styled-components";

export const AddNewsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  margin: 0 auto;
  padding: 60px;
  border-radius: 10px;
  gap: 10px;
  margin-bottom: 60px;
`;

export const SectionNews = styled.section`
  width: 80%;
  padding: 100px;
  margin: 50px auto;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #121212;
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
    max-width: 600px;
    gap: 1rem;
    border-radius: 10px;
    margin: auto;
    z-index: 10;
  }
`;

export const ImgSupera = styled.img`
  position: absolute;
  width: 300px;
  top: 55%;
  left: 12%;
`;
