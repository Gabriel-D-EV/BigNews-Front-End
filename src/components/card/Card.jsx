import { CardContainer, CardBody, CardFooter } from "./Cardstyled";

export function Card({ news }) {
  return (
    <CardContainer>
      <CardBody>
        <div>
          <h2>{news.title}</h2>
          <p>{news.text}</p>
        </div>
        <img src={news.image} alt="Imagem do Texto" />
      </CardBody>

      <CardFooter>
        <div>
          <i className="bi bi-hand-thumbs-up"></i>
          <span>{news.likes}</span>
        </div>
        <div>
          <i className="bi bi-chat-left"></i>
          <span>{news.comments}</span>
        </div>
      </CardFooter>
    </CardContainer>
  );
}
