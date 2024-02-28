import { Link, Outlet, useNavigate } from "react-router-dom";
import logo from "../../images/logo-bn.png";
import { Nav, InputSpace, Img, NavList } from "./navbarstyled";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../button/Button";

const searchSchema = z.object({
  title: z.string().refine((value) => !/^\s*$/.test(value)),
});

export function Navbar() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(searchSchema),
  });
  const navigate = useNavigate();

  function onSearch(data) {
    const { title } = data;
    navigate(`/search/${title}`);
    reset();
  }

  return (
    <>
      <Nav>
        <div className="ini-ent">
          <Link to="/">
            <Img src={logo} alt="Logo big News" />
          </Link>

          <Link to="/auth">
          <Button type="button" text="Entrar"></Button>
        </Link>
        </div>
        
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
            <input
              {...register("title")}
              type="text"
              strip
              placeholder="Pesquisar"
              required
            />
          </InputSpace>
        </form>
        
      </Nav>
      <Outlet />
    </>
  );
}
