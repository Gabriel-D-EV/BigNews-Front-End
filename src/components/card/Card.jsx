import { CardContainer, CardBody, CardFooter } from "./Cardstyled";

export function Card(props) {
  return (
    <CardContainer>
      <CardBody>
        <div>
          <h2>{props.title}</h2>
          <p>{props.text}</p>
        </div>
        <img src={props.banner} alt="Banner da Noticia" />
      </CardBody>

      <CardFooter>
        <div>
          <i className="bi bi-hand-thumbs-up"></i>
          <span>{props.likes}</span>
        </div>
        <div>
          <i className="bi bi-chat-left"></i>
          <span>{props.comments}</span>
        </div>
      </CardFooter>
    </CardContainer>
  );
}
