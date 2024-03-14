import styled from "styled-components";


export const HomeHeader = styled.section`
  display: flex;
  margin: 40px;
  margin-top: 100px;
  border-radius: 10px;
  border: 10px groove yellow;
`;

export const HomeBody = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  flex-wrap: wrap;
  grid-gap: 2rem;
  margin: -42px auto;
  border-radius: 0 0 15px 15px;
  background-color: #0f0f0fc9;
  padding: 110px 50px;
`;

export const ImgNami = styled.img`
    position: absolute;
    width: 220px;
    left: -1em;
    top: 22.3rem;
`;
