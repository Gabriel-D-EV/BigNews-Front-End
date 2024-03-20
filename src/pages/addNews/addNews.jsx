import { Link, useNavigate } from "react-router-dom";
import { ErrorSpan } from "../../components/navbar/navbarstyled.js";
import { Button } from "../../components/button/Button.jsx";
import { FooterFinal } from "../../components/footer/Footer.jsx";
import { zodResolver } from "@hookform/resolvers/zod";
import { newsSchema } from "../../schemas/newsSchemas.js";
import { AddNewsContainer, ImgSupera, SectionNews } from "./addNewsStyled.js";
import { useForm } from "react-hook-form";
import { createNews } from "../../services/newsServices.js";
import { Input, InputArea } from "../../components/input/Input.jsx";
import supera from "../../images/supera.png";

export function AddNews() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  async function inHandleSubmit(data) {
    try {
      console.log(data);
      const response = await createNews(data);

      navigate("/profile");
    } catch (error) {}
  }

  return (
    <>
      <AddNewsContainer>
        <SectionNews>
          <form onSubmit={handleSubmit(inHandleSubmit)}>
            <h1>Adicionar Notícia</h1>
            <Input
              type="text"
              name="title"
              register={register}
              placeholder="Título da Notícia:"
              required
            />
            
            <InputArea
              type="text"
              name="text"
              register={register}
              rows="10"
              placeholder="Descrição da Notícia:"
              required
            />
           
            <Input
              type="text"
              name="banner"
              placeholder="URL do Banner:"
              register={register}
              required
            />
           
            <Button type="submit" text="Publicar"></Button>
          </form>
        </SectionNews>
      </AddNewsContainer>
      <ImgSupera src={supera} alt="supera" />

      <FooterFinal />
    </>
  );
}
