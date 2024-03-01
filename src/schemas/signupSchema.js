import { z } from "zod";

export const signupSchema = z.object({
  name: z
    .string()
    .min(3, { message: "Nome deve ter no mínimo 3 caracteres" })
    .transform((name) =>
      name
        .trim()
        .split(" ")
        .map((word) => word[0].toUpperCase() + word.slice(1))
        .join(" ")
    ),
  email: z.string().email({ message: "E-mail inválido" }).toLowerCase(),
  password: z
    .string()
    .min(8, { message: "Senha deve ter no mínimo 8 caracteres" }),
  password2: z
    .string()
    .min(8, { message: "Confirmar senha deve ter no mínimo 8 caracteres" }),
}).refine((data) => data.password === data.password2, {
    message: "As senhas não correspondem",
    path: ["password2"],
});
