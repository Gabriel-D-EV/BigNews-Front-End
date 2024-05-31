import { Link, useRouteError } from "react-router-dom";
import { ErrorPageSt } from "./ErrorPageStyled";
import { Voltar } from "../../components/voltar/Voltar";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <ErrorPageSt>
      <Link to="/">
        <Voltar />
      </Link>
      <h1>
        Ops!! Parece que algo deu errado. Mas não se preocupe, nosso time de
        hamsters altamente treinados já está correndo em suas rodinhas para
        resolver o problema! !
      </h1>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </ErrorPageSt>
  );
}
