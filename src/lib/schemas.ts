import { z } from "zod";
import { PROJECT_CATEGORIES } from "./types";

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "name.tooShort")
    .max(80, "name.tooLong"),
  email: z.string().trim().email("email.invalid"),
  message: z
    .string()
    .trim()
    .min(10, "message.tooShort")
    .max(2000, "message.tooLong"),
});

export type ContactInput = z.infer<typeof contactSchema>;

export const projectCategorySchema = z
  .enum(PROJECT_CATEGORIES)
  .catch("all");
