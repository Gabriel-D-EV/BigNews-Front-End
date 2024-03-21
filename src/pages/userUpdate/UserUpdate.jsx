import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { SectionUpdate, UpdateContainer } from "./UserUpdateStyled";
import { Input } from "../../components/input/Input";
import { Button } from "../../components/button/Button";
import { FooterFinal } from "../../components/footer/Footer";
import { userUpdate } from "../../services/userServices.js";
import { useEffect } from "react";

export  function UserUpdate() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  const navigate = useNavigate();

  async function inHandleSubmit(data) {
    try {
      const response = await userUpdate(data);
      return response
      navigate("/profile");
    } catch (error) {}
  }

  useEffect(() => {
    inHandleSubmit();
  }, []);

  return (
    <>
      <UpdateContainer>
        <SectionUpdate>
          <form onSubmit={handleSubmit(inHandleSubmit)}>
            <h1>Atualizar Perfil</h1>
            <br />
            <Input
              type="text"
              name="name"
              register={register}
              placeholder="Nome:"
              required
            />

            <Input
              type="text"
              name="username"
              register={register}
              placeholder="@Username ( sem espaços ):"
              required
            />
            <Input
              type="email"
              name="e-mail"
              register={register}
              placeholder="Seu melhor E-mail:"
              required
            />
            <Input
              type="password"
              name="password"
              register={register}
              placeholder="Senha (mais de 8 caracteres):"
              required
            />

            <Input
              type="url"
              name="avatar"
              placeholder="URL da Imagem de Perfil:"
              register={register}
              required
            />
            <br />
            <Button type="submit" text="Atualizar"></Button>
          </form>
        </SectionUpdate>
      </UpdateContainer>

      <FooterFinal />
    </>
  );
}