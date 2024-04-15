
import { Link } from "react-router-dom";
import { TextLimit } from "../textlimit/TextLimit";
import { CardContainer, CardBody, CardFooter, CardHeader, CardContainerTop, CardBodyTop } from "./Cardstyled";



export function CardTop(props) {


  return (
    <CardContainerTop>
      <CardBodyTop>
      <img src={props.banner} alt="Banner da Noticia" />
        <div>
          <CardHeader top={props.top}>
            <h2>{props.title}</h2>
          </CardHeader>
        </div>
      </CardBodyTop>
    </CardContainerTop>
  );
}


export function Card(props) {

  async function like(id) {

    const like = id;

    console.log(like.length);
  }

  async function noticia(id, all) {

    const idNews = id;
    const user = all

    console.log(idNews, user );
  }

  return (
    <CardContainer className="card" >
      <CardBody onClick={() => noticia(props._id, props.user)}>
      <img src={props.banner} alt="Banner da Noticia" />
        <div>
          <CardHeader top={props.top}>
            <h2>{props.title}</h2>
            <TextLimit text={props.text} limit={180} />
          </CardHeader>
          
          <CardFooter>
            <section className="like" onClick={() => like(props.likes)}>
              <i className="bi bi-hand-thumbs-up" ></i>
              <span>{props.likes?.length}</span>
            </section>
            <section className="comment">
              <i className="bi bi-chat-left"></i>
              <span>{props.comments?.length}</span>
            </section>
          </CardFooter>
        </div>
      </CardBody>
    </CardContainer>
  );
}


export function CardUser(props) {

  return (
    <CardContainer>
      <CardBodyTop>
        <div>
          <Link to={`/newsUpdate/${props.id}`}>
            <i class=" updatenews bi bi-pencil-square"></i>
          </Link>

          <Link to={`/deleteNews/${props.id}`}><i class=" deletenews bi bi-trash3"></i></Link>

          

          <img className="imgcarduser" src={props.banner} alt="Banner da Noticia" />
          <CardHeader top={props.top}>
            <h2>{props.title}</h2>
            <TextLimit text={props.text} limit={300} />
          </CardHeader>
          <br />
          <CardFooter>
            <section className="like">
              <i className="bi bi-hand-thumbs-up"></i>
              <span>{props.likes?.length}</span>
            </section>
            <section className="comment">
              <i className="bi bi-chat-left"></i>
              <span>{props.comments?.length}</span>
            </section>          
          </CardFooter>
        </div>
      </CardBodyTop>
    </CardContainer>
  );
}
