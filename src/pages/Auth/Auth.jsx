import { AuthContainer, Section, Img } from "./AuthStyled";
import { Link } from "react-router-dom";
import logo from "../../images/logo-bn.png";
import { Input } from "../../components/input/input";
import { Button } from "../../components/button/Button"

export function Auth() {
  return (
    <AuthContainer>
      <Link to="/">
        <Img src={logo} alt="Logo big News" />
      </Link>

      <Section type="signin">
        <h2>Logar</h2>
        <hr />
        <form>
          <Input type="email" placeholder="E-mail" name="email" required />
          <Input type="password" placeholder="Senha" name="senha" required />
          <Button type="submit" text="Entrar"></Button>
        </form>
      </Section>
        
      <Section type="signup">
              <h2>Cadastrar</h2>
              <hr />
              <form>
                  <Input type="text" placeholder="Nome" name="nome" required />
                  <Input type="email" placeholder="Seu melhor e-mail" name="email" required />
                  <Input type="password" placeholder="Senha" name="password" required />
                  <Input type="password" placeholder="Confirmar senha" name="password-conf" required />
                  <Button type="submit" text="Cadastrar"></Button>
              </form>
      </Section>
    </AuthContainer>
  );
}
