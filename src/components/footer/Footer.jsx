import { FooterStyle, Img, ImgLogo, ImgQR, Redes } from "./FooterStyled";
import zoro from "../../images/zoro.png";
import qrcode from "../../images/portifolio-g.png";
import logo from "../../images/logo-bn.png";

export function FooterFinal() {
  return (
    <FooterStyle>
      <Redes>
        <ImgLogo src={logo} alt="Logo big News" />
        <a href="https://gabrielsilvadeveloper.site/">
          <i class="bi bi-globe2"></i> <p>Minhas Redes</p>
        </a>
        <a href="https://www.youtube.com/channel/UCk1yxwX6zPEdWhfZoffbVIw">
          <i class="bi bi-youtube"></i> <p>Youtube</p>
        </a>
        <a href="https://discord.gg/e3GxMaGcZv">
          <i class="bi bi-discord"></i> <p>Discord</p>
        </a>
      </Redes>

      <div>
        <br />
        <ImgQR src={qrcode} alt="QR-Code" />
        <h3>Gabriel Dev</h3>
        <p>Copyright &copy; 2024 - Big News - Todos direitos reservados</p>
      </div>

      <Img src={zoro} alt="Logo big News" />
    </FooterStyle>
  );
}
