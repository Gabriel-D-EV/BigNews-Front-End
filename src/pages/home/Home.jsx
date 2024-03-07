
import Cookies from "js-cookie";
import { Card } from "../../components/card/Card.jsx";
import { FooterFinal } from "../../components/footer/Footer.jsx";
import { Navbar } from "../../components/navbar/navbar.jsx";
import { getAllNews, getTopNew } from "../../services/newsServices.js";
import { HomeBody, HomeHeader } from "./HomeStyled.js";
import { useEffect, useState } from "react";
import { signup } from "../../services/userServices.js";

export default function Home() {
  const [news, setNews] = useState([]);
  const [topNews, setTopNews] = useState({});
  const response = signup()

  async function findNews() {
    const newsResponse = await getAllNews();
    setNews(newsResponse.data.results);

    const topNewsResponse = await getTopNew();
    setTopNews(topNewsResponse.data.results);
  }

  useEffect(() => {
    findNews();
    console.log(Cookies.get("token"));
    Cookies.set("id", response.data.id);
    console.log(Cookies.get("id"));
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
