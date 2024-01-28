import { TextLimit } from "../textlimit/TextLimit";
import { CardContainer, CardBody, CardFooter } from "./Cardstyled";

export function Card(props) {
  return (
    <CardContainer>
      <CardBody top={props}>
        <div>
          <h2>{props.title}</h2>
          <img src={props.banner} alt="Banner da Noticia" />
        </div>
        <TextLimit text={props.text} limit={150} />
      </CardBody>

      <CardFooter>
        <div>
          <i className="bi bi-hand-thumbs-up"></i>
          <span>{props.likes?.length}</span>
        </div>
        <div>
          <i className="bi bi-chat-left"></i>
          <span>{props.comments?.length}</span>
        </div>
      </CardFooter>
    </CardContainer>
  );
}
