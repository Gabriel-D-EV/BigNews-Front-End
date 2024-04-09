import { Arrasta } from "../../components/arrastapcima/Arrasta";
import { FooterFinal } from "../../components/footer/Footer";
import { Navbar } from "../../components/navbar/navbar";
import {
  ImgLogo,
  ListPriv,
  Politica,
  Privacidade,
} from "./politicaDePrivacidadeStyled";
import logo from "../../images/logo-bnd.png";
import { Voltar } from "../../components/voltar/Voltar";
import { Link } from "react-router-dom";

export function PoliticaDePrivacidade() {
  return (
    <>
      <Navbar />
      <ImgLogo src={logo} alt="Logo big News" />
      <Privacidade>
        <Link to="/">
          <Voltar />
        </Link>
        <h1>Política de Privacidade</h1>
        <ListPriv>
          <ul>
            <li>
              <a href="#Termos">Termos</a>
            </li>
            <li>
              <a href="#Uso-de-Licença">Uso de Licença</a>
            </li>
            <li>
              <a href="#Isenção-de-responsabilidade">
                Isenção de responsabilidade
              </a>
            </li>
            <li>
              <a href="#Limitações">Limitações</a>
            </li>
            <li>
              <a href="#Precisão-dos-materiais">Precisão dos materiais</a>
            </li>
            <li>
              <a href="#Links">Links</a>
            </li>
          </ul>
        </ListPriv>

        <Politica>
          <div id="Termos">
            <h1>1. Termos</h1>
            <p>
              Ao acessar ao site Big-News | Donquixote, concorda em cumprir
              estes termos de uso, todas as leis e regulamentos aplicáveis ​​e
              concorda que é responsável pelo cumprimento de todas as leis
              locais aplicáveis. Se você não concordar com algum desses termos,
              está proibido de usar ou acessar este site. Os materiais contidos
              neste site são protegidos pelas leis de direitos autorais e marcas
              comerciais aplicáveis.
            </p>
          </div>

          <div id="Uso-de-Licença">
            <h1>2. Uso de Licença</h1>
            <p>
              É concedida permissão para baixar temporariamente uma cópia dos
              materiais (informações ou software) no site Big-News | Donquixote,
              apenas para visualização transitória pessoal e não comercial. Esta
              é a concessão de uma licença, não uma transferência de título e,
              sob esta licença, você não pode: modificar ou copiar os materiais;
              usar os materiais para qualquer finalidade comercial ou para
              exibição pública (comercial ou não comercial); tentar descompilar
              ou fazer engenharia reversa de qualquer software contido no site
              Big-News | Donquixote; remover quaisquer direitos autorais ou
              outras notações de propriedade dos materiais; ou transferir os
              materiais para outra pessoa ou ‘espelhe’ os materiais em qualquer
              outro servidor. Esta licença será automaticamente rescindida se
              você violar alguma dessas restrições e poderá ser rescindida por
              Big-News | Donquixote a qualquer momento. Ao encerrar a
              visualização desses materiais ou após o término desta licença,
              você deve apagar todos os materiais baixados em sua posse, seja em
              formato eletrónico ou impresso.
            </p>
          </div>

          <div id="Isenção-de-responsabilidade">
            <h1>3. Isenção de responsabilidade</h1>
            <p>
              Os materiais no site da Big-News | Donquixote são fornecidos ‘como
              estão’. Big-News | Donquixote não oferece garantias, expressas ou
              implícitas, e, por este meio, isenta e nega todas as outras
              garantias, incluindo, sem limitação, garantias implícitas ou
              condições de comercialização, adequação a um fim específico ou não
              violação de propriedade intelectual ou outra violação de direitos.
              Além disso, o Big-News | Donquixote não garante ou faz qualquer
              representação relativa à precisão, aos resultados prováveis ​​ou à
              confiabilidade do uso dos materiais em seu site ou de outra forma
              relacionado a esses materiais ou em sites vinculados a este site.
            </p>
          </div>

          <div id="Limitações">
            <h1>4. Limitações</h1>
            <p>
              Em nenhum caso o Big-News | Donquixote ou seus fornecedores serão
              responsáveis ​​por quaisquer danos (incluindo, sem limitação,
              danos por perda de dados ou lucro ou devido a interrupção dos
              negócios) decorrentes do uso ou da incapacidade de usar os
              materiais em Big-News | Donquixote, mesmo que Big-News |
              Donquixote ou um representante autorizado da Big-News | Donquixote
              tenha sido notificado oralmente ou por escrito da possibilidade de
              tais danos. Como algumas jurisdições não permitem limitações em
              garantias implícitas, ou limitações de responsabilidade por danos
              conseqüentes ou incidentais, essas limitações podem não se aplicar
              a você.
            </p>
          </div>

          <div id="Precisão-dos-materiais">
            <h1>5. Precisão dos materiais</h1>
            <p>
              Os materiais exibidos no site da Big-News | Donquixote podem
              incluir erros técnicos, tipográficos ou fotográficos. Big-News |
              Donquixote não garante que qualquer material em seu site seja
              preciso, completo ou atual. Big-News | Donquixote pode fazer
              alterações nos materiais contidos em seu site a qualquer momento,
              sem aviso prévio. No entanto, Big-News | Donquixote não se
              compromete a atualizar os materiais.
            </p>
          </div>

          <div id="Links">
            <h1>6. Links</h1>
            <p>
              O Big-News | Donquixote não analisou todos os sites vinculados ao
              seu site e não é responsável pelo conteúdo de nenhum site
              vinculado. A inclusão de qualquer link não implica endosso por
              Big-News | Donquixote do site. O uso de qualquer site vinculado é por
              conta e risco do usuário.
            </p>
            <h3>6.1 Modificações</h3>
            <p>
              O Big-News | Donquixote pode revisar estes termos de serviço do
              site a qualquer momento, sem aviso prévio. Ao usar este site, você
              concorda em ficar vinculado à versão atual desses termos de
              serviço.
            </p>
            <h3>6.2 Lei aplicável</h3>
            <p>
              Estes termos e condições são regidos e interpretados de acordo com
              as leis do Big-News | Donquixote e você se submete
              irrevogavelmente à jurisdição exclusiva dos tribunais naquele
              estado ou localidade.
            </p>
          </div>
        </Politica>
      </Privacidade>
      <Arrasta />
      <FooterFinal />
    </>
  );
}
