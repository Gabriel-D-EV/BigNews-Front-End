import styled from "styled-components";


export const HomeHeader = styled.section`
  display: flex;
  padding: 0 40px;
  padding-top: 100px;
  margin-left: 15%;
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
    transform: scale(1.08);
    z-index: 9999;
    } 
`;

export const ImgVegeta = styled.img`
    position: absolute;
    width: 18%;
    left: 1%;
    top: 10%;
`;
