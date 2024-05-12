import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { searchNews } from "../../services/newsServices";
import { ContainerResults, SearchNews, TextResults } from "./SearchStyled";
import { Card } from "../../components/card/Card";
import { Arrasta } from "../../components/arrastapcima/Arrasta.jsx";
import { FooterFinal } from "../../components/footer/Footer.jsx";
import { Voltar } from "../../components/voltar/Voltar.jsx";

export function Search() {
  const { title } = useParams();
  const [news, setNews] = useState([]);

  async function search() {
    try {
      const newsApi = await searchNews(title);
      setNews(newsApi.data.results);
      console.log(newsApi);
    } catch (err) {
      console.log(err);
      setNews([]);
    }
  }

  useEffect(() => {
    search();
  }, [title]);

  return (
    <>
      <ContainerResults>
        <TextResults>
          <Link to="/">
            <Voltar />
          </Link>
          <span>
            {news.length
              ? `Encontramos ${news.length} ${
                  news.length > 1 ? "notícias" : "notícia"
                } com o título "${title}"`
              : "Não encontramos notícias com este título"}
          </span>
        </TextResults>

        <SearchNews>
          {news.map((item) => (
            <Card
              key={item.id}
              title={item.title}
              text={item.text}
              banner={item.banner}
              likes={item.likes}
              comments={item.comments}
            />
          ))}
        </SearchNews>
      </ContainerResults>
      <Arrasta />
      <FooterFinal />
    </>
  );
}
