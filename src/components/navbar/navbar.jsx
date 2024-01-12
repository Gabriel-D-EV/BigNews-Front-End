import logo from "../../images/logo-bn.png";
import "./navbar.css";

export function Navbar() {
  return (
    <>
      <nav>
        <img src={logo} alt="Logo big News" />

        <div className="input-search">
          <i className="bi bi-search"></i>
          <input type="text" placeholder="Pesquise"/>
        </div>

        <button>Entrar</button>
      </nav>
    </>
  );
}
