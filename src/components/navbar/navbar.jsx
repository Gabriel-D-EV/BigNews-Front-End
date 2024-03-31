import { Link, Outlet, useNavigate } from "react-router-dom";
import logo from "../../images/logo-bnd2.png";
import {
  Nav,
  InputSpace,
  Img,
  NavList,
  ErrorSpan,
  UserLogado,
  Menu,
} from "./navbarstyled.js";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../button/Button.jsx";
import { searchSchema } from "../../schemas/searchSchema.js";
import { userLogado } from "../../services/userServices.js";
import { useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import { UserContext } from "../../context/userContext.jsx";

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
  const { user, setUser } = useContext(UserContext);

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

  function signout() {
    Cookies.remove("token");
    setUser(undefined);
    navigate("/");
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

        <Menu>
          <i class="bi bi-list"></i>
        </Menu>

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
            <UserLogado>
              <Link to="/profile">
                <img src={user.avatar} />
                <h2> {user.name}</h2>
              </Link>
              <div>
                <i class="bi bi-box-arrow-right" onClick={signout}>
                  Sair
                </i>
                <Link to="/auth">
                  <p>Cadastre-se</p>
                </Link>
              </div>
            </UserLogado>
          ) : (
            <div className="logar">
              <p>
                Olá,
                <Link to="/auth">
                  <h4>Entre </h4>
                </Link>
                ou
              </p>
              <Link to="/auth">
                <h4>Cadastre-se</h4>
              </Link>
            </div>
          )}
        </div>
      </Nav>
      {errors.title && <ErrorSpan>{errors.title.message}</ErrorSpan>}
      <Outlet />
    </>
  );
}
