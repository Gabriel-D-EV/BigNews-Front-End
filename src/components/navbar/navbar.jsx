import { Link, Outlet, useNavigate } from "react-router-dom";
import logo from "../../images/logo-bn.png";
import { Button, Nav, InputSpace, Img, NavList } from "./Navbarstyled";
import { useForm } from "react-hook-form";

export function Navbar() {
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();

  function onSearch(data) {
    const { title } = data;
    navigate(`/search/${title}`);
    reset();
  }

  return (
    <>
      <Nav>
        <Link to="/">
          <Img src={logo} alt="Logo big News" />
        </Link>
        <div>
          <NavList>
            <li>
              <a href="https://goanimes.net/" target="_blank">
                ANIMES
              </a>
            </li>
            <li>
              <a href="https://lermanga.org/" target="_blank">
                MANGÁS
              </a>
            </li>
            <li>
              <a href="https://huntersscan.xyz/" target="_blank">
                MANHWA
              </a>
            </li>
            <li>
              <a href="#">Chat</a>
            </li>
          </NavList>
        </div>

        <form onSubmit={handleSubmit(onSearch)}>
          <InputSpace>
            <button type="submit">
              <i className="bi bi-search"></i>
            </button>
            <input {...register("title")} type="text" placeholder="Pesquisar" />
          </InputSpace>
        </form>

        <Button>
          <a href="#">ENTRAR</a>
        </Button>
      </Nav>
      <Outlet />
    </>
  );
}
