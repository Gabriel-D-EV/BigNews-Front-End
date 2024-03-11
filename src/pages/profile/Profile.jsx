import { useContext } from "react";
import { UserContext } from "../../context/userContext.jsx";
import {
  AddNews,
  BackgroundP,
  IconP,
  ImgP,
  ProfileContainer,
  ProfileHeader,
  UserP,
} from "./profileStyled.js";
import { FooterFinal } from "../../components/footer/Footer.jsx";
import bg from "../../images/background.jpg";

export function Profile() {
  const { user } = useContext(UserContext);
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
      </ProfileContainer>

      <FooterFinal />
    </>
  );
}
