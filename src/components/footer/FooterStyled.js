import styled from "styled-components";

export const FooterStyle = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #121212;
  z-index: 99;
  padding: 30px;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    a {
      margin: 5px;
      display: flex;
      align-items: center;
      gap: 10px;
      text-decoration: none;
      color: white;
      font-size: 1rem;
    }
    a:hover {
      color: blueviolet;
    }
  }
  p {
    align-items: end;
    text-align: end;
  }

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    
    p {
      text-align: center;
    }
  }
`;

export const Redes = styled.div`
  padding: 50px;

  p {
    align-items: center;
    text-align: center;
    font-size: 1.3rem;
    font-weight: bold;
    color: white;
    padding: 5px;
  }
  a {
    margin: 5px;
    display: flex;
    align-items: center;
    gap: 10px;
    text-decoration: none;
    color: white;
    font-size: 1.5rem;
  }
  i {
    transition: all 0.2s ease-in-out;
  }
  a:hover {
    i {
      transform: scale(1.7);
      color: blueviolet;
    }
    p {
      color: blueviolet;
    }
  }
`;

export const ImgQR = styled.img`
  width: 200px;

  @media (max-width: 1000px) {
    display: none;
  }
`;
export const ImgLogo = styled.img`
  width: 280px;

  @media (max-width: 1000px) {
    display: none;
  }
`;
