import { z } from "zod";

export const userUpdateSchema = z.object({
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
  username: z
    .string()
    .min(5, { message: "Usernome deve ter no mínimo 5 caracteres" }),

  email: z.string().email({ message: "E-mail inválido" }).toLowerCase(),
  password: z
    .string()
    .min(8, { message: "Senha deve ter no mínimo 8 caracteres" }),
  avatar: z.string().url({ message: "Url invalida!" }),
});
