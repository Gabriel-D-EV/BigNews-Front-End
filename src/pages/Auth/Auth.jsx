import { AuthContainer, Section, Img } from "./AuthStyled";
import { Link } from "react-router-dom";
import logo from "../../images/logo-bn.png";
import { Input } from "../../components/input/input";
import { Button } from "../../components/button/Button"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export function Auth() {
  const {
    register: registerSignin,
    handleSubmit: handleSubmitSignin,
    reset: resetSignin,
    formState: { errors: errorsSignin },
  } = useForm({
    //resolver: zodResolver(signinSchema),
  });

  const {
    register: registerSignup,
    handleSubmit: handleSubmitSignup,
    reset: resetSignup,
    formState: { errors: errorsSignup },
  } = useForm({
    //resolver: zodResolver(signupSchema),
  });

  function inHandleSubmit(data) {
    console.log(data);
  }

  function upHandleSubmit(data) {
    console.log(data);
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
          <Input type="email" placeholder="E-mail" name="email" required register={registerSignin}/>
          <Input type="password" placeholder="Senha" name="password" required register={registerSignin}/>
          <Button type="submit" text="Entrar"></Button>
        </form>
      </Section>
        
      <Section type="signup">
              <h2>Cadastrar</h2>
              <hr />
              <form onSubmit={handleSubmitSignup(upHandleSubmit)}>
                  <Input type="text" placeholder="Nome" name="nome" required register={registerSignup}/>
                  <Input type="email" placeholder="Seu melhor e-mail" name="email" required register={registerSignup}/>
                  <Input type="password" placeholder="Senha" name="password" required register={registerSignup}/>
                  <Input type="password" placeholder="Confirmar senha" name="password2" required register={registerSignup}/>
                  <Button type="submit" text="Cadastrar"></Button>
              </form>
      </Section>
    </AuthContainer>
  );
}
