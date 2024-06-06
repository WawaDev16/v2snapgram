import { z } from "zod";

export const SignupValidation = z.object({
  name: z.string().min(2, { message: "Too short" }),
  username: z.string().min(2, { message: "Too short" }),
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: "Password is must be at least 8 characters.!" }),
});

export const SigninValidation = z.object({
  email: z.string(),
  password: z
    .string()
    .min(8, { message: "Password is must be at least 8 characters.!" }),
});

export const PostValidation = z.object({
  caption: z.string().min(3).max(2200),
  file: z.custom<File[]>(),
  location: z.string().min(2).max(100),
  tags: z.string(),
});
