import styled from "styled-components";


export const ContainerResults = styled.section`
  padding-top: .8rem;
  padding-bottom: 25%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #0f0f0f99;

  img {
    width: 50%;
  }

  @media (max-width: 1000px) {
    margin: auto;
    margin-top: 25%;

    img {
      width: 40%;
    }
  }
`;

export const SearchNews = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 15px;
    margin: 1rem, auto;
    width: 70%;
    
    @media (max-width: 1000px) {
      grid-template-columns: 1fr;
      width: 90%;
    }
`;

export const TextResults = styled.div`
    padding-top: 2rem;
    margin: 2rem auto;
    width: 70%;
    text-align: center;
    span {
        font-size: 2rem;
        font-weight: bold;
    }
`;
