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

  .ini-ent {
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 10px;
  }
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
  button {
    cursor: pointer;
    position: absolute;
    top: 1;
    right: 0.2rem;
    color: black;
    z-index: 10;
    border: none;
    border-radius: 10px;
    transition: all 0.2 ease-in-out;
  }
  button:hover {
    color: blueviolet;
    font-weight: bolder;
  }
  input {
    outline: none;
    font-size: 1rem;
    padding: 0.5rem;
    width: 100%;
    border: none;
    border-radius: 10px;
  }
  input:focus {
    border: 3px solid rgb(50, 30, 100);
  }
`;

export const NavList = styled.ul`
  text-decoration: none;
  list-style: none;
  display: flex;
  gap: 40px;
  align-items: center;

  a {
    text-decoration: none;
    color: #fff;
    font-weight: 500;
    text-transform: uppercase;
    padding: 2px 10px;
    transition: 0.2s all ease-in-out;
  }
  a:hover {
    color: aquamarine;
    font-weight: bold;
    border-bottom : 1px solid;
  }
`;

export const ErrorSpan = styled.span`
  background-color: #900;
  color: #fff;
  width: 100%;
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  font-weight: bold;
  box-shadow:  0px 1px 10px #000;
`;

export const UserLogado = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
  text-align: center;
  cursor: pointer;

  img {
    border-radius: 50%;
    width: 40px;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  h2 {
    font-size: 1rem;
    font-weight: 500;
  }
  h2:hover {
    color: aquamarine
  }
  a {
    text-decoration: none;
    color: #fff;
  }
  i {
    font-size: 1.2rem;
    transition: .2s ease-in;
  }
  i:hover {
    color: #f00;
    font-weight: bolder;
    transform: scale(1.1);
  }
`;
