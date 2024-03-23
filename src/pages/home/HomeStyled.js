import styled from "styled-components";


export const HomeHeader = styled.section`
  display: flex;
  padding: 0 40px;
  padding-top: 100px;
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
    } 
`;

export const ImgLuffy = styled.img`
    position: absolute;
    width: 380px;
    left: -4%;
    top: 38%;
`;
