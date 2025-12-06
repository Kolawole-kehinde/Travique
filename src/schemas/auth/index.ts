import { z } from "zod";

// Magic Link Schema
export const magicLinkSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

export type MagicLinkSchema = z.infer<typeof magicLinkSchema>;

// Complete Profile Schema
export const completeProfileSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  countryCode: z.string().min(1, "Please select a country code"),
  phoneNumber: z.string().min(7, "Phone number must be at least 7 digits"),
});

export type CompleteProfileSchema = z.infer<typeof completeProfileSchema>;


