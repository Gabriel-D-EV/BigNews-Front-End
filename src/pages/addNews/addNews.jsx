import { Link, useNavigate } from "react-router-dom";

import { Button } from "../../components/button/Button.jsx";
import { FooterFinal } from "../../components/footer/Footer.jsx";
import { zodResolver } from "@hookform/resolvers/zod";
import { newsSchema } from "../../schemas/newsSchemas.js";
import { AddNewsContainer, ImgSupera, SectionNews } from "./addNewsStyled.js";
import { useForm } from "react-hook-form";
import { createNews } from "../../services/newsServices.js";
import { InputNews } from "../../components/input/Input.jsx";
import supera from "../../images/supera.png";

export function AddNews() {
  const {
    handleSubmit: handleSubmitAddNews,
    formState: { errors: errorsNews },
  } = useForm({
    resolver: zodResolver(newsSchema),
  });

  const navigate = useNavigate();

  async function inHandleSubmit(data) {
    try {
        const response = await createNews(data);
        console.log(response);
      navigate("/profile");
    } catch (error) {}
  }

  return (
    <>
      <AddNewsContainer>
        <SectionNews>
          <form onSubmit={handleSubmitAddNews(inHandleSubmit)}>
            <h1>Adicionar Notícia</h1>
            <InputNews
              type="text"
              name="title"
              rows="1"
              placeholder="Título da Notícia"
              required
            />

            <InputNews
              type="text"
              name="description"
              rows="6"
              placeholder="Descrição da Notícia"
              required
            />

            <InputNews
              type="text"
              name="url"
              placeholder="URL do Banner"
              rows="1"
              required
            />
            <Button type="submit" text="Adicionar"></Button>
          </form>
        </SectionNews>
      </AddNewsContainer>
      <ImgSupera src={supera} alt="supera"/>

      <FooterFinal />
    </>
  );
}
