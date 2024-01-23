import logo from "../../images/logo-bn.png";
import { Button, Nav, InputSpace, Img, NavList } from "./Navbarstyled";


export function Navbar() {
  return (
    <>
      <Nav>
        <Img src={logo} alt="Logo big News" />
        <div>
          <NavList>
            <li><a href="https://goanimes.net/" target="_blank">ANIMES</a></li>
            <li><a href="https://lermanga.org/" target="_blank">MANGÁS</a></li>
            <li><a href="https://huntersscan.xyz/" target="_blank">MANHWA</a></li>
            <li><a href="#">Chat</a></li>
          </NavList>
        </div>

        <InputSpace>
          <i className="bi bi-search"></i>
          <input type="text" placeholder="Pesquisar"/>
        </InputSpace>

        <Button><a href="#">ENTRAR</a></Button>
      </Nav>
    </>
  );
}


