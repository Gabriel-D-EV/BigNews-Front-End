import { z } from "zod";

export const newsSchema = z.object({
  text: z
    .string()
    .min(3, { message: "texto deve ter no mínimo 3 caracteres" })
    .trim(),
  title: z
    .string()
    .min(3, { message: "Titulo deve ter no mínimo 3 caracteres" })
    .trim(),

  banner: z.string().url({ message: "tem que ser uma url valida" }).trim(),
});
