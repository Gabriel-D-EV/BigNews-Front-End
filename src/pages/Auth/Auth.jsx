import { AuthContainer, Section, Img } from "./AuthStyled";
import { Link } from "react-router-dom";
import logo from "../../images/logo-bn.png";

export function Auth() {
  return (
    <AuthContainer>
      <Link to="/">
        <Img src={logo} alt="Logo big News" />
      </Link>

      <Section type="signup">
        <h2>Cadastrar</h2>
      </Section>

      <Section type="signin">
        <h2>Entrar</h2>
      </Section>
    </AuthContainer>
  );
}
