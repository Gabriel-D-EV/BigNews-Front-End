import { useContext, useEffect, useState } from "react";
import luffy from "../../images/luffy.png";
import { UserContext } from "../../context/userContext.jsx";
import { CardUser } from "../../components/card/Card.jsx";
import {
  AddNews,
  BackgroundP,
  IconP,
  ImgLuffy,
  ImgP,
  ImgLuffyg5,
  ProfileContainer,
  ProfileHeader,
  ProfileNews,
  UserP,
} from "./profileStyled.js";
import { FooterFinal } from "../../components/footer/Footer.jsx";
import bg from "../../images/background.jpg";
import luffyg5 from "../../images/luffy-g5.png";
import { getAllNewsByUser } from "../../services/newsServices.js";
import { Link } from "react-router-dom";
import { Arrasta } from "../../components/arrastapcima/Arrasta.jsx";
import { Voltar } from "../../components/voltar/Voltar.jsx";

export function Profile() {
  const { user } = useContext(UserContext);
  const [news, setNews] = useState([]);

  async function findAllNewsUser() {
    const newsResponse = await getAllNewsByUser();
    setNews(newsResponse.data.results);
  }

  useEffect(() => {
    findAllNewsUser();
  }, []);

  return (
    <>
      <ProfileContainer>
        <ProfileHeader>
          <BackgroundP src={bg} alt="background" />

          <UserP>
            <Link to="/">
              <Voltar />
            </Link>

            <ImgP src={user.avatar} alt="foto de usuario" />
            <h2>{user.name}</h2>
            <h3>@{user.username}</h3>
          </UserP>

          <Link to="/addnews">
            <AddNews>
              <i class="bi bi-plus-circle"></i>
            </AddNews>
          </Link>
          {/* */}
          <Link to="/userUpdate">
            <IconP>
              <i class="bi bi-pencil-square"></i>
            </IconP>
          </Link>
        </ProfileHeader>

        <ProfileNews>
          {news.length === 0 && (
            <>
              <h2>NENHUMA NOTÍCIA ENCONTRADA!!</h2>
              <ImgLuffy src={luffy} alt="luffy" />
            </>
          )}
          {news.map((item) => {
            return (
              <>
                <CardUser
                  key={item.id}
                  title={item.title}
                  text={item.text}
                  banner={item.banner}
                  likes={item.likes}
                  comments={item.comments}
                />
                <ImgLuffyg5 src={luffyg5} />
              </>
            );
          })}
        </ProfileNews>
      </ProfileContainer>
      <Arrasta />
      <FooterFinal />
    </>
  );
}
