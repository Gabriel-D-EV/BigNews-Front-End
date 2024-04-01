import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  position: fixed;
  height: 8%;
  top: 0;
  right: 0;
  background-color: #121212df;
  z-index: 99999999;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.3) 0px 20px 30px, rgba(0, 0, 0, 0.3) 0px 4px 6px,
    rgba(0, 0, 0, 0.3) 0px 12px 13px, rgba(0, 0, 0, 0.2) 0px 5px 5px;
  
  .img {
    transition: .2s ease-in-out;
  }
  .img:hover {
    transform: scale(1.05);
  }

  .ini-ent {
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 10px;

    .logar p {
      display: flex;
      align-items: center;
      gap: 3px;
    }
    a {
      text-decoration: none;
      color: #fff;
    }
    a:hover {
      color: blueviolet;
    }
  }

  .nav-list {
    display: flex;
    align-items: center;
    text-align: center;

    @media (max-width: 1000px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      margin: auto;
    }
  }

  @media (max-width: 1000px) {
    height: 15%;

    a {
      font-size: .8rem;
    }
  }
`;

export const Img = styled.img`
  width: 9rem;
  object-fit: cover;
  padding: 20px;
  padding-top: 25px;
  cursor: pointer;
  align-items: center;
  

  @media (max-width: 1000px) {
    display: none;
  }
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
    right: 0.6rem;
    color: white;
    z-index: 10;
    border: none;
    border-radius: 10px;
    background-color: #121212;
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
    color: white;
    border: 1px solid white;
    border-radius: 10px;
    background-color: #121212;
  }
  input:focus {
    border: 3px solid rgb(50, 30, 100);
  }
`;

export const NavList = styled.ul`
  text-decoration: none;
  list-style: none;
  display: flex;
  gap: 20px;
  align-items: center;
  font-size: 1.2rem;
  a {
    border-radius: 10px;
    text-decoration: none;
    color: #fff;
    font-weight: bold;
    text-transform: uppercase;
    padding: 2px 10px;
    transition: 0.3s all ease-in-out;
  }
  a:hover {
    color: blueviolet;
    border: 1px solid;
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
  box-shadow: 0px 1px 10px #000;
`;

export const UserLogado = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
  text-align: center;
  cursor: pointer;
  padding: 5px;

  img {
    border-radius: 50%;
    width: 30px;
    height: 30px;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  h2 {
    font-size: 1rem;
    font-weight: 500;
  }
  h2:hover {
    color: blueviolet;
  }
  a {
    text-decoration: none;
    color: #fff;
  }
  i {
    font-size: 1rem;
    transition: 0.2s ease-in;
  }
  i:hover {
    color: #f00;
  }
  p {
    font-size: 1rem;
    font-weight: 600;
  }

  @media (max-width: 1000px) {
    p, i {
      font-size: .8rem;
    }
  }
`;
