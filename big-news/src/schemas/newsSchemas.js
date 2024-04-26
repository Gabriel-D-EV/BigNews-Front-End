import { z } from "zod";

export const newsSchema = z.object({
  title: z
    .string()
    .min(10, { message: "Titulo deve ter no mínimo 10 caracteres" })
    .trim(),
  banner: z.string().url({ message: "Url invalida!" }).trim(),
  text: z
    .string()
    .min(100, { message: "texto deve ter no mínimo 100 caracteres" })
    .trim()
});
