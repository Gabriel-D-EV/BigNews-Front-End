import { useContext } from "react";
import { likeUser } from "../../services/newsServices";
import { TextLimit } from "../textlimit/TextLimit";
import { CardContainer, CardBody, CardFooter, CardHeader } from "./Cardstyled";
import { UserContext } from "../../context/userContext";

export function Card(props) {

  const { user, setUser } = useContext(UserContext);

  async function Like() {
    try {
      const response = await likeUser();
    } catch (error) {
      console.log(error);
    }
  }

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
            <section className="like">
              <i className="bi bi-hand-thumbs-up" onClick={likeUser}></i>
              <span>{props.likes?.length}</span>
            </section>
            <section className="comment">
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
