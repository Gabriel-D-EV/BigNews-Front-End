import { Link, Outlet, useNavigate } from "react-router-dom";
import logo from "../../images/logo-bn.png";
import { Nav, InputSpace, Img, NavList, ErrorSpan } from "./navbarstyled";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../button/Button";
import { searchSchema } from "../../schemas/searchSchema";
import { userLogado } from "../../services/userServices";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";

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
  const [user, setUser] = useState({});

  function onSearch(data) {
    const { title } = data;
    navigate(`/search/${title}`);
    reset();
  }

  async function findUserLogado() {
    try {
      const response = await userLogado();
      setUser(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (Cookies.get("token")) findUserLogado();
  }, []);

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

        <div className="ini-ent">
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

          {user ? (
            <h2>{user.name}</h2>
          ) : (
            <Link to="/auth">
              <Button type="button" text="Entrar"></Button>
            </Link>
          )}

          <Link to="/auth">
            <Button type="button" text="Entrar"></Button>
          </Link>
        </div>
      </Nav>
      {errors.title && <ErrorSpan>{errors.title.message}</ErrorSpan>}
      <Outlet />
    </>
  );
}
