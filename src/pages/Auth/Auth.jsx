import { AuthContainer, Section, Img, ImgLevi } from "./AuthStyled.js";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../images/logo-bnd2.png";
import { Input } from "../../components/input/Input.jsx";
import { Button } from "../../components/button/Button.jsx";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signinSchema } from "../../schemas/signinSchema.js";
import { ErrorSpan } from "../../components/navbar/navbarstyled.js";
import { signupSchema } from "../../schemas/signupSchema.js";
import { signin, signup } from "../../services/userServices.js";
import Cookies from "js-cookie";
import { FooterFinal } from "../../components/footer/Footer.jsx";
import levi from "../../images/levi.png";
import { Voltar } from "../../components/voltar/Voltar.jsx";

export function Auth() {
  const {
    register: registerSignin,
    handleSubmit: handleSubmitSignin,
    formState: { errors: errorsSignin },
  } = useForm({
    resolver: zodResolver(signinSchema),
  });

  const {
    register: registerSignup,
    handleSubmit: handleSubmitSignup,
    formState: { errors: errorsSignup },
  } = useForm({
    resolver: zodResolver(signupSchema),
  });

  const navigate = useNavigate();

  async function inHandleSubmit(data) {
    try {
      const response = await signin(data);
      Cookies.set("id", response.data.id, { expires: 15 });
      Cookies.set("token", response.data.token, { expires: 15 });
      navigate("/");
    } catch (error) {}
  }

  async function upHandleSubmit(data) {
    try {
      const response = await signup(data);
      Cookies.set("id", response.data.id, { expires: 15 });
      Cookies.set("token", response.data.token, { expires: 15 });
      navigate("/");
    } catch (error) {}
  }

  return (
    <>
      <AuthContainer>
        <div className="inicio">
          <Link to="/">
            <Voltar />
          </Link>
        </div>
        <Link to="/">
          <Img src={logo} alt="Logo big News" />
        </Link>

        <Section type="signin">
          <h2>Logar</h2>
          <hr />
          <form onSubmit={handleSubmitSignin(inHandleSubmit)}>
            <Input
              type="email"
              placeholder="E-mail"
              name="email"
              required
              autocomplete="off"
              register={registerSignin}
            />
            {errorsSignin.email && (
              <ErrorSpan>{errorsSignin.email.message}</ErrorSpan>
            )}
            <Input
              type="password"
              placeholder="Senha"
              name="password"
              required
              autocomplete="off"
              register={registerSignin}
            />
            {errorsSignin.password && (
              <ErrorSpan>{errorsSignin.password.message}</ErrorSpan>
            )}
            <Button type="submit" text="Entrar"></Button>
          </form>
        </Section>

        <Section type="signup">
          <h2>Cadastrar</h2>
          <hr />
          <form onSubmit={handleSubmitSignup(upHandleSubmit)}>
            <Input
              type="text"
              placeholder="Nome"
              name="name"
              autocomplete="off"
              register={registerSignup}
            />
            {errorsSignup.nome && (
              <ErrorSpan>{errorsSignup.nome.message}</ErrorSpan>
            )}
            <Input
              type="email"
              placeholder="Seu melhor e-mail"
              name="email"
              autocomplete="off"
              register={registerSignup}
            />
            {errorsSignup.email && (
              <ErrorSpan>{errorsSignup.email.message}</ErrorSpan>
            )}
            <Input
              type="password"
              placeholder="Senha"
              name="password"
              autocomplete="off"
              register={registerSignup}
            />
            {errorsSignup.password && (
              <ErrorSpan>{errorsSignup.password.message}</ErrorSpan>
            )}
            <Input
              type="password"
              placeholder="Confirmar senha"
              name="password2"
              required
              autocomplete="off"
              register={registerSignup}
            />
            {errorsSignup.password2 && (
              <ErrorSpan>{errorsSignup.password2.message}</ErrorSpan>
            )}
            <Button type="submit" text="Cadastrar"></Button>
          </form>
        </Section>
      </AuthContainer>
      <ImgLevi src={levi} alt="levi" />
      <FooterFinal />
    </>
  );
}
