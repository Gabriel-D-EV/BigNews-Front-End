import styled from "styled-components";

export const HomeBody = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  flex-wrap: wrap;
  grid-gap: 1rem;
  margin: 0 auto;
  border-radius: 0 0 15px 15px;

  width: 70%;
  background-color: #0f0f0fe9;
  padding: 60px;
  padding-top: 100px;
  box-shadow: 5px 20px 20px rgba(0, 0, 0, 0.40), 5px 12px 10px rgba(0, 0, 0, 0.40);
  margin-bottom: 60px;
`;

export const HomeHeader = styled.section`
  width: 70%;
  display: flex;
  margin: auto;
  background-color: #0f0f0ffc;
  box-shadow: 5px 20px 20px rgba(0, 0, 0, 0.40), 5px 12px 10px rgba(0, 0, 0, 0.40);
  padding: 60px;
  padding-top: 6%;
`;
