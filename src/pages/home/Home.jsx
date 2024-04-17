import vegeta from "../../images/vegeta.png";
import { Card, CardTop } from "../../components/card/Card.jsx";
import { FooterFinal } from "../../components/footer/Footer.jsx";
import { Navbar } from "../../components/navbar/navbar.jsx";
import { getAllNews, getTopNew } from "../../services/newsServices.js";
import { HomeBody, HomeHeader, ImgVegeta } from "./HomeStyled.js";
import { useContext, useEffect, useState } from "react";
import { Arrasta } from "../../components/arrastapcima/Arrasta.jsx";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/userContext.jsx";

export default function Home() {
  const [news, setNews] = useState([]);
  const [topNews, setTopNews] = useState({});
  const { user } = useContext(UserContext);

  async function findNews() {
    const newsResponse = await getAllNews();
    setNews(newsResponse.data.results);

    const topNewsResponse = await getTopNew();
    setTopNews(topNewsResponse.data.results);
  }

  useEffect(() => {
    findNews();
  }, []);

  return (
    <>
      <Navbar />
      <HomeHeader>
        <h1>Olá {user.name}, Confira a Última Notícia!!</h1>

        <CardTop top="true" title={topNews?.title} banner={topNews?.banner} />
      </HomeHeader>
      <hr />

      <HomeBody>
        {news.map((item) => (
          <Link to={`/findNew/${item.id}`}>
            <Card
              key={item.id}
              title={item.title}
              text={item.text}
              banner={item.banner}
              likes={item.likes}
              comments={item.comments}
            />
          </Link>
        ))}
      </HomeBody>

      <ImgVegeta src={vegeta} alt="Vegeta" />
      <Arrasta />
      <FooterFinal />
    </>
  );
}
