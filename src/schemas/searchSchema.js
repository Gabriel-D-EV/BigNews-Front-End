import { z } from "zod";

export const searchSchema = z.object({
    title: z.string().refine((value) => !/^\s*$/.test(value), {
      message: "Digite um texto válido",
    }),
  });