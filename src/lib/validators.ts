import { z } from "zod";

export const MessageSchema = z.object({
  name: z.string().min(5, "Must be 5 or more characters long."),
  email: z.string().email({ message: "Invalid email address." }),
  message: z
    .string()
    .min(15, "Your message must be at least 15 characters long."),
});
