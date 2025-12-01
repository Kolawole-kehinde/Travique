
import { z } from "zod";

export const travelFormSchema = z.object({
  country: z.string().min(1, "Country is required"),
  duration: z
    .union([z.string(), z.number()])
    .transform((v) => (typeof v === "string" ? Number(v) : v))
    .refine((n) => Number.isInteger(n) && n > 0, "Duration must be a positive integer"),
  groupType: z.string().min(1, "Please select a group type"),
  travelStyle: z.string().min(1, "Please select a travel style"),
  interests: z
    .array(z.string())
    .min(1, "Pick at least one interest")
    .optional()
    .default([]),
  budget: z.string().min(1, "Please select a budget"),
});

export type TravelFormValues = z.infer<typeof travelFormSchema>;
