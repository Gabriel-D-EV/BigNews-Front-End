import { z } from "zod";

export const newsSchema = z.object({
    title: z
      .string()
      .min(3, { message: "Titulo deve ter no mínimo 3 caracteres" })
      .transform((name) =>
        name
          .trim()
          .split(" ")
          .map((word) => word[0].toUpperCase() + word.slice(1))
          .join(" ")
    ),
    text: z
      .string()
      .min(3, { message: "texto deve ter no mínimo 3 caracteres" })
      .transform((name) =>
        name
          .trim()
    ),
    banner: z
      .string()
      .url({ message: "tem que ser uma url valida" })
      .transform((name) =>
        name
          .trim()
      ),
    
  });
  