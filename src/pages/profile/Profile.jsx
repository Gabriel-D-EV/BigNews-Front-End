import { useContext } from "react";
import { UserContext } from "../../context/userContext";
import { UserName } from "./profileStyled";
import { FooterFinal } from "../../components/footer/Footer.jsx";

export function Profile() {
  const { user } = useContext(UserContext);
  return (
    <>
      <UserName>{user.name}</UserName>

      <FooterFinal />
    </>
  );
}
