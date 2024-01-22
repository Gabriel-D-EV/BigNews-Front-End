import { Card } from "../../components/card/Card";
import { Navbar } from "../../components/navbar/Navbar";
import { news } from "../../datas.js";
import { HomeBody } from "./HomeStyled.js"


export default function Home() {
  return (
    <>
      <Navbar />
      <HomeBody>
        {news.map((item, index) => (
          <Card key={index} news={item} />
        ))}
      </HomeBody>
    </>
  );
}
