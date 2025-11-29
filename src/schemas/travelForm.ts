import { z } from "zod";

export const travelFormSchema = z.object({
  country: z.string().min(1),
  duration: z.string().min(1),
  groupType: z.string().min(1),
  travelStyle: z.string().min(1),
  interests: z.string().min(1),
  budget: z.string().min(1),
  location: z.string().optional(),
});

export type TravelFormValues = z.infer<typeof travelFormSchema>;
