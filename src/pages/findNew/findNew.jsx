import { useContext, useState } from "react";
import { CardFindNew } from "../../components/card/Card";
import { Voltar } from "../../components/voltar/Voltar";
import { UserContext } from "../../context/userContext";
import { Link } from "react-router-dom";
import { FindCardNew } from "./findNewStyled";

export function FindNew(props) {
  const { user } = useContext(UserContext);
  const [news, setNews] = useState([]);

  return (
    <>
      <FindCardNew>
        <Link to="/">
          <Voltar />
        </Link>
        <CardFindNew
          key={props.id}
          id={props.id}
          title={props.title}
          text={props.text}
          banner={props.banner}
          likes={props.likes}
          comments={props.comments}
        />
      </FindCardNew>
    </>
  );
}
