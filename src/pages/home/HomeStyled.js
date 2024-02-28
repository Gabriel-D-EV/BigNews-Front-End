import styled from "styled-components";

export const HomeBody = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  flex-wrap: wrap;
  grid-gap: 1rem;
  margin: 0 auto;

  width: 70%;
  background-color: #0f0f0fe9;
  padding: 60px;
  padding-top: 100px;
`;

export const HomeHeader = styled.section`
  width: 70%;
  display: flex;
  margin: auto;
  background-color: #0f0f0fe9;
  padding: 60px;
  padding-top: 6%;
`;
