import { Link, useNavigate, useParams } from "react-router-dom";
import { Button } from "../../components/button/Button.jsx";
import { FooterFinal } from "../../components/footer/Footer.jsx";
import { useForm } from "react-hook-form";
import { getNewById, updateNew } from "../../services/newsServices.js";
import { Input, InputArea } from "../../components/input/Input.jsx";
import ryuki from "../../images/ryuki.png";
import { Voltar } from "../../components/voltar/Voltar.jsx";
import { newsSchema } from "../../schemas/newsSchemas.js";
import { zodResolver } from "@hookform/resolvers/zod";
import { ErrorSpan } from "../../components/navbar/navbarstyled.js";
import { ImgRyuki, SectionNews, UpNewsContainer } from "./newsupdateStyled.js";
import { useEffect } from "react";

export function UpdateNews() {
  const { id } = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: zodResolver(newsSchema)
  });

  const navigate = useNavigate();

  async function inHandleSubmit(data) {
    try {
      await updateNew(data, id);
      navigate("/profile");
    } catch (error) {
      console.log(error);
    }
  }

  async function findNewById(id) { 
    try {
      const {data} = await getNewById(id);
      setValue("title", data.title);
      setValue("banner", data.banner);
      setValue("text", data.text);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    findNewById(id)
  })

  return (
    <>
      <UpNewsContainer>
        <SectionNews>
          <Link to="/profile">
            <Voltar />
          </Link>
          <form onSubmit={handleSubmit(inHandleSubmit)}>
            <h1>Atualizar Notícia</h1>
            <h3>Preencher todos os campos</h3>
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
      </UpNewsContainer>
      <ImgRyuki src={ryuki} alt="supera" />

      <FooterFinal />
    </>
  );
}
