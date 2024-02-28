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
  button {
    cursor: pointer;
    position: absolute;
    top: 1;
    right: 0.2rem;
    color: black;
    z-index: 10;
    border: none;
    border-radius: 10px;
    transition: all .2 ease-in-out; 
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
      border: 3px solid rgb(50, 30, 100)
    }
`;

export const Button = styled.button`
  background-color: blueviolet;
  color: #000;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  font-weight: 500;
  letter-spacing: 0.1rem;
  margin-right: 20px;
  padding: 5px;
  h3 {
    border: 3px solid rgb(50, 30, 100);
    text-decoration: none;
    color: #fff;
    padding: 5px 10px;
    border-radius: 10px;
    transition: .2s all ease-in-out;
  }
  h3:hover {
    background-color: rgb(50, 30, 100);
    color: #fff;
    z-index: 3;
    border-radius: 10px;
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
    transition: .2s all ease-in-out;
  
    }
    a:hover {
      color: rgb(50, 30, 100);
      border-bottom: 3px solid ;
    }
  
`
