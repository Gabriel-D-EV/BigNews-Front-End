import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  position: fixed;
  padding: 1rem 0;
  height: 5%;
  top: 0;
  right: 0;
  background-color: blueviolet;
  z-index: 2;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`;

export const Img = styled.img`
  width: 5rem;
  height: 3.5rem;
  object-fit: cover;
  cursor: pointer;
`;

export const InputSpace = styled.div`
  position: relative;
  width: 200px;
  display: flex;
  align-items: center;
  margin-left: 1rem;
  i {
    position: absolute;
    top: 1;
    right: 0.2rem;
    color: black;
    z-index: 10;
    border: none;
    border-radius: 10px;
  }
  input {
    outline: none;
    font-size: 1rem;
    padding: 0.5rem;
    width: 100%;
    border: none;
    border-radius: 10px;
    :focus {
      border: 1px solid rgb(108, 30, 180)
    }
  }
`;

export const Button = styled.button`
  background-color: rgb(108, 30, 180);
  color: #000;
  border: none;
  border-radius: 10px;
  font-size: 0.8rem;
  padding: 10px 20px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  font-weight: 500;
  letter-spacing: 0.1rem;
  text-transform: uppercase;
  :hover {
    background-color: rgb(80, 30, 100);
    color: #fff;
    transform: scale(1.1, 1.1);
    z-index: 3;
  }
`;
