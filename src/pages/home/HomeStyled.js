import styled from "styled-components";


export const HomeHeader = styled.section`
  display: flex;
  padding: 0 40px;
  padding-top: 100px;
`;

export const HomeBody = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  flex-wrap: wrap;
  grid-gap: 2rem;
  margin: 0 auto;
  border-radius: 0 0 15px 15px;
  padding: 110px 50px;
`;

export const ImgLuffy = styled.img`
    position: absolute;
    width: 400px;
    left: -2%;
    top: 43%;
`;
