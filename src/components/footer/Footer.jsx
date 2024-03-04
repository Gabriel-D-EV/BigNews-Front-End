import { FooterStyle, Img, Redes } from "./FooterStyled";
import zoro from "../../images/zoro.png";

export function FooterFinal() {
  return (
    <FooterStyle>
      <Redes>
        <a href="https://gabrielsilvadeveloper.site/">
          <i class="bi bi-globe2"></i> <p>Minhas Redes</p>
        </a>
        <a href="https://gabrielsilvadeveloper.site/portifolio/sobre">
          <i class="bi bi-columns"></i> <p>Portifólio Dev</p>
        </a>
        <a href="https://www.youtube.com/channel/UCk1yxwX6zPEdWhfZoffbVIw">
          <i class="bi bi-youtube"></i> <p>Youtube</p>
        </a>
        <a href="https://discord.gg/e3GxMaGcZv">
          <i class="bi bi-discord"></i> <p>Discord</p>
        </a>
      </Redes>

      <p>Copyright &copy; 2024 - Big News - Todos direitos reservados</p>

      <Img src={zoro} alt="Logo big News" />
    </FooterStyle>
  );
}
