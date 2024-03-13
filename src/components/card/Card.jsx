import { TextLimit } from "../textlimit/TextLimit";
import { CardContainer, CardBody, CardFooter, CardHeader } from "./Cardstyled";

export function Card(props) {
  return (
    <CardContainer>
      <CardBody>
        <div>
          <CardHeader top={props.top}>
            <h2>{props.title}</h2>
            <TextLimit text={props.text} limit={200} />
          </CardHeader>
          <br />
          <CardFooter>
            <section>
              <i className="bi bi-hand-thumbs-up"></i>
              <span>{props.likes?.length}</span>
            </section>
            <section>
              <i className="bi bi-chat-left"></i>
              <span>{props.comments?.length}</span>
            </section>
          </CardFooter>
        </div>

        <img src={props.banner} alt="Banner da Noticia" />
      </CardBody>
    </CardContainer>
  );
}
