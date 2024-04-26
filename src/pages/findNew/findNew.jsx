import { useEffect, useState } from "react";
import { CardFindNew } from "../../components/card/Card";
import { Voltar } from "../../components/voltar/Voltar";
import { Link, useParams } from "react-router-dom";
import { FindCardNew } from "./findNewStyled";
import { getNewById } from "../../services/newsServices";
import { FooterFinal } from "../../components/footer/Footer.jsx";

export function FindNew() {
  const { id } = useParams();
  const [news, setNews] = useState([]);


  console.log(id, news);


 

  async function getNew() {
    try {
      const Response = await getNewById(id);
      setNews(Response.data);

      console.log(Response);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getNew(id);
  }, []);
  return (
    <>
      <FindCardNew>
        <Link to="/">
          <Voltar />
        </Link>
        <p>arrumar</p>
        <CardFindNew
          key={news.data.id}
          id={news.data.id}
          title={news.data.title}
          text={news.data.text}
          banner={news.data.banner}
          likes={news.data.likes}
          comments={news.data.comments}
        />
      </FindCardNew>
      <FooterFinal />
    </>
  );
}
