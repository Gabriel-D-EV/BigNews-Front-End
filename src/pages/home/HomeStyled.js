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
  padding: 50px;
  padding-top: 100px;
  box-shadow: 5px 20px 15px rgba(0, 0, 0, 0.70), 5px 12px 10px rgba(0, 0, 0, 0.70);
  margin-bottom: 80px;
  padding-top: 6.4%;
  padding-bottom: 6%;
`;

export const HomeHeader = styled.section`
  width: 70%;
  display: flex;
  margin: auto;
  background-color: #0f0f0ffc;
  box-shadow: 5px 20px 25px rgba(0, 0, 0, 0.70), 5px 20px 25px rgba(0, 0, 0, 0.70);
  padding: 50px;
  padding-top: 10%;
`;
