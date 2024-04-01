import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../components/button/Button.jsx";
import { FooterFinal } from "../../components/footer/Footer.jsx";
import { AddNewsContainer, ImgSupera, SectionNews } from "./addNewsStyled.js";
import { useForm } from "react-hook-form";
import { createNews } from "../../services/newsServices.js";
import { Input, InputArea } from "../../components/input/Input.jsx";
import supera from "../../images/supera.png";
import { Voltar } from "../../components/voltar/Voltar.jsx";
import { newsSchema } from "../../schemas/newsSchemas.js";
import { zodResolver } from "@hookform/resolvers/zod";
import { ErrorSpan } from "../../components/navbar/navbarstyled.js";

export function AddNews() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(newsSchema)
  });

  const navigate = useNavigate();

  async function inHandleSubmit(data) {
    try {
      const response = await createNews(data);

      navigate("/profile");
    } catch (error) {}
  }

  return (
    <>
      <AddNewsContainer>
        <SectionNews>
          <Link to="/profile">
            <Voltar />
          </Link>
          <form onSubmit={handleSubmit(inHandleSubmit)}>
            <h1>Adicionar Notícia</h1>
            <br />
            <Input
              type="text"
              name="title"
              register={register}
              placeholder="Título da Notícia:"
              required
            />
            {errors.title && (
              <ErrorSpan>{errors.title.message}</ErrorSpan>
            )}
            <Input
              type="text"
              name="banner"
              placeholder="URL do Banner:"
              register={register}
              required
            />
            {errors.banner && (
              <ErrorSpan>{errors.banner.message}</ErrorSpan>
            )}
            <InputArea
              type="text"
              name="text"
              register={register}
              rows="10"
              placeholder="Descrição da Notícia:"
              required
            />
            {errors.text && (
              <ErrorSpan>{errors.text.message}</ErrorSpan>
            )}
            <br />

            <Button type="submit" text="Publicar"></Button>
          </form>
        </SectionNews>
      </AddNewsContainer>
      <ImgSupera src={supera} alt="supera" />

      <FooterFinal />
    </>
  );
}
