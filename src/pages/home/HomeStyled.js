import styled from "styled-components";

export const HomeHeader = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0 40px;
  margin-top: 6%;

  h1 {
    font-size: 3rem;
    align-items: center;
    text-align: center;
    font-family: "Fira Sans";
    font-weight: bolder;
    font-style: italic;
    padding-bottom: 20px;
    border-bottom: 10px double;
    margin-bottom: 3%;
  }

  .dia-especial {
    display: none;
    font-size: 2.5rem;
    text-align: center;
    font-weight: bolder;
    color: white;
    cursor: pointer;
    z-index: 10;
    transition: 0.4s ease-in-out;
    margin: 40px 0;
    margin-left: 20%;

    i {
      color: red;
    }
  }

  .dia-especial:hover {
    color: violet;
  }
  

  .developer {
    font-size: 2.3rem;
    margin-bottom: 10px;
    align-items: center;
    text-align: center;
    padding: 30px 0;
    border-radius: 10px;
    background-color: red;
  }

  @media (max-width: 1000px) {
    margin-left: 0;
    margin-top: 30%;
    padding: 5px;

    h1 {
      font-size: 3rem;
      margin-bottom: 10%;
    }
    .dia-especial {
      margin-left: 0;
    }
  }
`;

export const HomeBody = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  flex-wrap: wrap;
  grid-gap: 2rem;
  margin: 0 auto;
  border-radius: 0 0 15px 15px;
  padding: 110px 80px;
  text-decoration: none;

  section {
    transition: all 0.3s ease-in-out;
  }

  .card:hover {
    transform: scale(1.02);
    box-shadow: 0 0 10px violet, 0 0 30px blueviolet;
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
