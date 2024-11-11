import { z } from "zod";

export enum Genders {
  Male = "Male",
  Female = "Female",
}

export enum Languages {
  English = "English",
  Bulgarian = "Bulgarian",
  German = "German",
  French = "French",
  Italian = "Italian",
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

export const accountInfoSchema = z.object({
  displayName: z.string(),
  realName: z.string(),
  gender: z.nativeEnum(Genders),
  dateOfBirth: z.string().date(),
  phoneNumber: z.coerce.number(),
  email: z.string().email({ message: "Invalid email address" }),
  address: z.string(),
  language: z.nativeEnum(Languages),
  website: z.string(),
});
