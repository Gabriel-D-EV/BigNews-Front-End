import styled from "styled-components";


export const HomeHeader = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0 40px;
  margin: 10% 0 5% 0;
  margin-left: 15%;

  h1 {
    font-size: 4rem;
    align-items: center;
    text-align: center;
    font-family: "Fira Sans";
    font-weight: bolder;
    font-style: italic;
    border-bottom: 10px double;
  }

  @media (max-width: 1000px) {
    margin-left: 0;
    margin-top: 40%;
    padding: 10px;

    h1 {
      font-size: 3rem;
    }
  }
`;

export const HomeBody = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  flex-wrap: wrap;
  grid-gap: 1rem;
  margin: 0 auto;
  border-radius: 0 0 15px 15px;
  padding: 110px 50px;
  transition: all.5s ease-in-out;

  section:hover {
    transform: scale(1.05);
    z-index: 9999;
    } 

  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
    margin: 0 auto;
    width: 90%;
    padding: 60px 10px;
  }
`;

export const ImgVegeta = styled.img`
    position: absolute;
    width: 18%;
    left: 0;
    top: 18%;

    @media (max-width: 1000px) {
    display: none;
  }
`;

