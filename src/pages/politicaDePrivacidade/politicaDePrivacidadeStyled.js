import styled from "styled-components";


export const Privacidade = styled.div`
    width: 70%;
    top: 8%;
    margin: 8% auto;
    align-items: center;
    justify-content: center;
    background-color: #121212a9;
    padding: 50px 90px;
    border-radius: 10px;

    @media (max-width: 1000px) {
        width: 85%;
        padding: 50px 20px;
        margin: 40% auto;
    }
    
`;

export const ListPriv = styled.section`
    padding: 80px;
    
    ul {
        list-style: number;
    }
    a {
        color: white;
        text-decoration: none;
        transition: .3s ease-in-out;
    }
    a:hover {
        color: blueviolet;
        text-decoration: underline;
    }
`; 

export const Politica = styled.section`
    padding: 50px 30px;

    h1 {
        
        font-size: 2rem;
        padding: 10px;
        padding-top: 9%;
    }
    h3 {
        font-size: 1.5rem;
        padding: 15px;
    }
    p {
        font-size: 1.2rem;
        padding: 10px;
    }

    @media (max-width: 1000px) {
        padding: 5px;
        h1 {
            text-align: center;
            padding-top: 45%;
        }
        h3 {
            text-align: center;
        }
        p {
            text-align: justify;
        };
    }
`; 

export const ImgLogo = styled.img`
  width: 30%;
  position: absolute;
  top: 15%;
  right: 25%;

  @media (max-width: 1000px) {
    display: none;
  }
`;