

import { Card } from "../../components/card/Card";
import { Navbar } from "../../components/navbar/Navbar";
import { getAllNews } from "../../services/userServices.js";
import { HomeBody } from "./HomeStyled.js";
import { useEffect, useState } from "react";


export default function Home() {
  const [news, setNews] = useState([]);

  async function findAllNews() {
    const response = await getAllNews();
    setNews(response.data.results)
  }

  useEffect(() => {findAllNews()}, []);
  


  return (
    <>
      <Navbar />
      <HomeBody>
        {news.map((item) => (
          <Card
            key={item.id}
            title={item.title}
            text={item.text}
            banner={item.banner}
            likes={item.likes.length}
            comments={item.comments.length}
          />
        ))}
      </HomeBody>
    </>
  );
}
