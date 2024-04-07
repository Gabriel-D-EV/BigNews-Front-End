import vegeta from "../../images/vegeta.png";
import { Card, CardTop } from "../../components/card/Card.jsx";
import { FooterFinal } from "../../components/footer/Footer.jsx";
import { Navbar } from "../../components/navbar/navbar.jsx";
import { getAllNews, getTopNew } from "../../services/newsServices.js";
import { HomeBody, HomeHeader, ImgVegeta } from "./HomeStyled.js";
import { useEffect, useState } from "react";
import { Arrasta } from "../../components/arrastapcima/Arrasta.jsx";


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
        <h1>Últimas Notícias:</h1>

        <br />
        <CardTop
          top="true"
          title={topNews?.title} 
          banner={topNews?.banner}
        />
        
      </HomeHeader>
      <hr />
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
        <ImgVegeta src={vegeta} alt="Vegeta" />       
      </HomeBody>    
      <Arrasta/>
      <FooterFinal />
    </>
  );
}
