import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { ImgSaitama, SectionUpdate, UpdateContainer } from "./UserUpdateStyled";
import { Input } from "../../components/input/Input";
import { Button } from "../../components/button/Button";
import { FooterFinal } from "../../components/footer/Footer";
import { userUpdate } from "../../services/userServices.js";
import saitama from "../../images/saitama.png";
import { Voltar } from "../../components/voltar/Voltar.jsx";
import { zodResolver } from "@hookform/resolvers/zod";
import { userUpdateSchema } from "../../schemas/userUpdateSchema.js";
import { ErrorSpan } from "../../components/navbar/navbarstyled.js";

export function UserUpdate() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(userUpdateSchema)
  });

  const navigate = useNavigate();

  async function inSubmit(data) {
    try {
      const response = await userUpdate(data);
      navigate("/profile");
    } catch (error) {}
  }

  return (
    <>
      <UpdateContainer>
        
        <SectionUpdate>
        <Link to="/profile">
            <Voltar/>
          </Link>
          <form onSubmit={handleSubmit(inSubmit)}>
            <h1>Atualizar Usuário</h1>
            <h3>Preencha todos os campos...</h3>

            <br />
            <Input
              type="text"
              name="name"
              register={register}
              placeholder="Nome:"
            />
            {errors.name && (
              <ErrorSpan>{errors.name.message}</ErrorSpan>
            )}
            <Input
              type="text"
              name="username"
              register={register}
              placeholder="@Username ( sem espaços ):"
            />
            {errors.username && (
              <ErrorSpan>{errors.username.message}</ErrorSpan>
            )}
            <Input
              type="email"
              name="email"
              register={register}
              placeholder="Seu melhor E-mail:"        
            />
            {errors.email && (
              <ErrorSpan>{errors.email.message}</ErrorSpan>
            )}
            <Input
              type="password"
              name="password"
              register={register}
              placeholder="Senha (mais de 8 caracteres):"
              autocomplete="current-password"    
            />
            {errors.password && (
              <ErrorSpan>{errors.password.message}</ErrorSpan>
            )}
            <Input
              type="url"
              name="avatar"
              placeholder="URL da Imagem de Perfil:"
              register={register}              
            />
            {errors.avatar && (
              <ErrorSpan>{errors.avatar.message}</ErrorSpan>
            )}
            <br />
            <Button type="submit" text="Atualizar"></Button>
          </form>
        </SectionUpdate>
        <ImgSaitama src={saitama} alt="Saitama" />
      </UpdateContainer>

      <FooterFinal />
    </>
  );
}
