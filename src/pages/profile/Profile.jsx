import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/userContext.jsx";
import { Card } from "../../components/card/Card.jsx";
import {
  AddNews,
  BackgroundP,
  IconP,
  ImgP,
  ImgZoro,
  ProfileContainer,
  ProfileHeader,
  ProfileNews,
  UserP,
} from "./profileStyled.js";
import { FooterFinal } from "../../components/footer/Footer.jsx";
import bg from "../../images/background.jpg";
import zoro from "../../images/zoro.png";
import { getAllNewsByUser } from "../../services/newsServices.js";


export function Profile() {
  const { user } = useContext(UserContext);
  const [news, setNews] = useState([]);

  async function findAllNewsUser() {
    const newsResponse = await getAllNewsByUser();
    console.log(newsResponse.data);
    setNews(newsResponse.data.results);    
  }


  useEffect(() => {
    findAllNewsUser();
  }, []);


  return (
    <>
      <ProfileContainer>
        <ProfileHeader>
          <IconP>
            <i class="bi bi-pencil-square"></i>
          </IconP>

          <BackgroundP src={bg} alt="background" />

          <UserP>
            <ImgP src={user.avatar} alt="foto de usuario" />
            <h2>{user.name}</h2>
            <h3>@{user.username}</h3>
          </UserP>

          <AddNews>
            <i class="bi bi-plus-circle"></i>
          </AddNews>
        </ProfileHeader>

        <ProfileNews>

          {news.length === 0 && <h2>NENHUMA NOTÍCIA ENCONTRADA!!</h2>}
          {news.map((item) => {
            return (
              <Card
              key={item.id}
              title={item.title}
              text={item.text}
              banner={item.banner}
              likes={item.likes}
              comments={item.comments}
            />  
              );
          })}
        </ProfileNews>

      </ProfileContainer>

      <ImgZoro src={zoro} />

      <FooterFinal />
    </>
  );
}
