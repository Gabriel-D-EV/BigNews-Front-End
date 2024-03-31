import styled from "styled-components";


export const HomeHeader = styled.section`
  display: flex;
  padding: 0 40px;
  margin-top: 10%;
  margin-left: 15%;

  @media (max-width: 1000px) {
    margin-left: 0;
    margin-top: 30%;
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
  }
`;

export const ImgVegeta = styled.img`
    position: absolute;
    width: 16%;
    left: 3%;
    top: 10%;

    @media (max-width: 1000px) {
    display: none;
  }
`;
