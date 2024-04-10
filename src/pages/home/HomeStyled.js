import styled from "styled-components";


export const HomeHeader = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0 40px;
  margin-top: 6%;
  

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
    margin-top: 35%;
    padding: 5px;

    h1 {
      font-size: 3rem;
    }
  }
`;

export const HomeBody = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  flex-wrap: wrap;
  grid-gap: 1rem;
  margin: 0 auto;
  border-radius: 0 0 15px 15px;
  padding: 110px 80px;
  transition: all.5s ease-in-out;

  .card:hover {
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
    width: 16%;
    left: 8%;
    top: 11%;

    @media (max-width: 1000px) {
    display: none;
  }
`;

