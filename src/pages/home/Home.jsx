
import { Card } from "../../components/card/Card";
import { FooterFinal } from "../../components/footer/Footer.jsx";
import { Navbar } from "../../components/navbar/navbar.jsx";
import { getAllNews, getTopNew } from "../../services/newsServices.js";
import { HomeBody, HomeHeader } from "./HomeStyled.js";
import { useEffect, useState } from "react";

export default function Home() {
  const [news, setNews] = useState([]);
  const [topNews, setTopNews] = useState({});

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
        <Card
          top="true"
          title={topNews?.title}
          text={topNews?.text}
          banner={topNews?.banner}
          likes={topNews?.likes}
          comments={topNews?.comments}
        />
      </HomeHeader>
      <HomeBody>
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
      </HomeBody>
      <FooterFinal />
    </>
  );
}
