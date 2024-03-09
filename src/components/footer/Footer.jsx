import { FooterStyle, Img, ImgQR, Redes } from "./FooterStyled";
import zoro from "../../images/zoro.png";
import qrcode from "../../images/portifolio-g.png";

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
