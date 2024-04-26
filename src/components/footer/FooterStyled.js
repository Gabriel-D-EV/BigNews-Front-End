import styled from "styled-components";


export const FooterStyle = styled.footer`
  display: flex;
  align-items: end;
  justify-content: space-around;
  background-color: #121212;
  z-index: 99;
  padding: 5px;

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
      transition: all 0.5s ease-in-out;
    }
    a:hover {
      color: blueviolet;
    }
  }
  p {
    align-items: center;
    text-align: center;
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

  p {
    align-items: center;
    font-size: 1.3rem;
    color: white;
    padding: 10px;
    transition: all 0.5s ease-in-out;
  }
  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: white;
    font-size: 1.5rem;
    transition: all 0.5s ease-in-out;
  }
  i {
    transition: all 0.5s ease-in-out;
  }
  a:hover {
    i {
      transform: scale(2);
      color: blueviolet;
    }
    p {
      color: blueviolet;
      font-weight: 500;
    }
  }
`;

export const ImgQR = styled.img`
  width: 150px;

  @media (max-width: 1000px) {
    display: none;
  }
`;

export const ImgLogo = styled.img`
  width: 250px;

  @media (max-width: 1000px) {
    display: none;
  }
`;

export const FooterEnd = styled.div`
    align-items: center;
    text-align: center;
    padding: 10px;
    background-color: #121212;
    p {
      align-items: center;
      color: white;
      padding: 5px;
      font-size: .8rem;
    }
    a {
      color: white;
      text-decoration: none;
      padding: 5px;
    }
    a:hover {
      color: blueviolet;
    }
`; 