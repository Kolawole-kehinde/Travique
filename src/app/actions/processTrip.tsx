"use server";

import { travelFormSchema, TravelFormValues } from "@/src/schemas/travelForm";


export async function processTrip(values: TravelFormValues) {
  const parsed = travelFormSchema.safeParse(values);

  if (!parsed.success) {
    console.log("❌ Invalid data:", parsed.error.format());
    throw new Error("Invalid form data");
  }

  console.log("🚀 Trip processed on the server:", parsed.data);

  // You can later call OpenAI or save to DB here
  return { success: true, data: parsed.data };
}
