import styled from "styled-components";

export const AddNewsContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 100px;
  align-items: center;
  justify-content: center;
  text-align: center;
  

  @media (max-width: 1000px) {
    padding: 10px;
    width: 90%;
    margin: 35% auto;
  }
`;

export const SectionNews = styled.section`
  padding: 60px 90px;
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
    max-width: 700px;
    gap: 1rem;
    border-radius: 10px;
    margin: auto;
    z-index: 10;
  }

  @media (max-width: 1000px) {
    padding: 40px 30px;
  }
`;

export const ImgSupera = styled.img`
  position: absolute;
  width: 22%;
  top: 43%;
  left: 10%;

  @media (max-width: 1000px) {
    display: none;
  }
`;
