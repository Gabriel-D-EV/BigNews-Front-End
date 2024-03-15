import { FooterStyle, ImgLogo, ImgQR, Redes } from "./FooterStyled";
import qrcode from "../../images/portifolio-g.png";
import logo from "../../images/logo-bnd.png";

export function FooterFinal() {
  return (
    <FooterStyle>
      <ImgLogo src={logo} alt="Logo big News" />
      <Redes>
        <a href="https://gabrielsilvadeveloper.site/" target="_blank">
          <i class="bi bi-globe2"></i> <p>Minhas Redes</p>
        </a>
        <a href="https://www.youtube.com/channel/UCk1yxwX6zPEdWhfZoffbVIw" target="_blank">
          <i class="bi bi-youtube"></i> <p>Youtube</p>
        </a>
        <a href="https://discord.gg/e3GxMaGcZv" target="_blank">
          <i class="bi bi-discord"></i> <p>Discord</p>
        </a>
      </Redes>
      <div>
        <br />
        <ImgQR src={qrcode} alt="QR-Code" />
        <a href="https://gabrielsilvadeveloper.site/portifolio" target="_blank"><h3>Gabriel Dev</h3></a>
      </div>
      <div><p>Copyright &copy; 2024 - Big News - Todos direitos reservados</p></div>
    </FooterStyle>
  );
}
