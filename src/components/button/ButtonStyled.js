import styled from "styled-components";

export const ButtonSpace = styled.button`
  background-color: transparent;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  letter-spacing: 0.1rem;
  z-index: 3;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.40);
  h3 {
    border: 2px solid blueviolet;
    color: white;
    padding: 4px 10px;
    border-radius: 10px;
    transition: 0.2s all ease-in-out;
    font-size: large;
  }
  h3:hover {
    background-color: blueviolet;
    color: black;
  }

  :hover {
    transform: scale(1.112);
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.40);
  }
`;
