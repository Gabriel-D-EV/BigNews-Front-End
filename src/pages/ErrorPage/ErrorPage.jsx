import { useRouteError } from "react-router-dom";
import { ErrorPageSt } from "./ErrorPageStyled";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <ErrorPageSt>
      <h1>Eita Porra!</h1>
      <p>Desculpe, ocorreu um erro inesperado.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </ErrorPageSt>
  );
}
