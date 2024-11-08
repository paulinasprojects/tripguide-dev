import { z } from "zod";

export enum Genders {
  Male = "Male",
  Female = "Female",
}

export const profileSchema = z.object({
  livesIn: z.string().min(1, { message: "Lives in is required" }),
  streetAddress: z.string().min(1, { message: "Street address is required" }),
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Invalid email address" }),
  dateOfBirth: z.string().date(),
  gender: z.nativeEnum(Genders),
});
