import { Card } from "../../components/card/Card";
import { Navbar } from "../../components/navbar/Navbar";
import { news } from "../../datas.js";

export default function Home() {
  return (
    <>
      <Navbar />
      {news.map((item, index) => (
        <Card key={index} news={item}/>
      ))}
    </>
  );
}
