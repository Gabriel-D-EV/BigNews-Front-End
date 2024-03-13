import styled from "styled-components";


export const HomeHeader = styled.section`
  width: 85%;
  display: flex;
  margin: 40px auto;
  margin-top: 100px;
  border-radius: 10px;
  border: 10px groove yellow;
  
`;

export const HomeBody = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  flex-wrap: wrap;
  grid-gap: 2rem;
  margin: 0 auto;
  border-radius: 0 0 15px 15px;
  width: 90vw;
  background-color: #0f0f0fc9;
  padding: 50px;
  margin-bottom: 80px;
`;

export const ImgLuffy = styled.img`
    position: absolute;
    width: 220px;
    left: -1rem;
    top: 20rem;
`;
