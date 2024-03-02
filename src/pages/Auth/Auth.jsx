import { AuthContainer, Section, Img } from "./AuthStyled";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../images/logo-bn.png";
import { Input } from "../../components/input/input";
import { Button } from "../../components/button/Button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signinSchema } from "../../schemas/signinSchema";
import { ErrorSpan } from "../../components/navbar/navbarstyled";
import { signupSchema } from "../../schemas/signupSchema";
import { signup } from "../../services/userServices";
import Cookies from "js-cookie";

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

  function inHandleSubmit(data) {
    console.log(data);
  }

  const navigate = useNavigate()

  async function upHandleSubmit(data) {
    try {
      const response = await signup(data);
      Cookies.set("token", response.data.token, { expires: 1 });
      navigate("/")
    } catch (error) {}
  }

  

  return (
    <AuthContainer>
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
            required
            register={registerSignup}
          />
          {errorsSignup.nome && (
            <ErrorSpan>{errorsSignup.nome.message}</ErrorSpan>
          )}
          <Input
            type="email"
            placeholder="Seu melhor e-mail"
            name="email"
            required
            register={registerSignup}
          />
          {errorsSignup.email && (
            <ErrorSpan>{errorsSignup.email.message}</ErrorSpan>
          )}
          <Input
            type="password"
            placeholder="Senha"
            name="password"
            required
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
            register={registerSignup}
          />
          {errorsSignup.password2 && (
            <ErrorSpan>{errorsSignup.password2.message}</ErrorSpan>
          )}
          <Button type="submit" text="Cadastrar"></Button>
        </form>
      </Section>
    </AuthContainer>
  );
}
