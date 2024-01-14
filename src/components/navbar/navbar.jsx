import logo from "../../images/logo-bn.png";
import { Button, Nav, InputSpace, Img } from "./Navbarstyled";


export function Navbar() {
  return (
    <>
      <Nav>
        <Img src={logo} alt="Logo big News" />

        <InputSpace>
          <i className="bi bi-search"></i>
          <input type="text" placeholder="Pesquise"/>
        </InputSpace>

        <Button>Entrar</Button>
      </Nav>
    </>
  );
}


