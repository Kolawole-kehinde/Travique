"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import {
  travelFormSchema,
  TravelFormValues,
} from "../schemas/travelForm";

import {
  BUDGETS,
  GROUP_TYPES,
  INTERESTS,
  TRAVEL_STYLES,
} from "../type/travelForm";
import CustomInputField from "./customInput/CustomInputField";
import { CustomSelect } from "./customInput/CustomSelect";
import { processTrip } from "../app/actions/processTrip";

const CreateTripsForm = () => {
  const form = useForm<TravelFormValues>({
    resolver: zodResolver(travelFormSchema),
    defaultValues: {
      country: "Croatia",
      duration: "",
      groupType: "",
      travelStyle: "",
      interests: "",
      budget: "",
    },
  });

  async function onSubmit(values: TravelFormValues) {
    const res = await processTrip(values);
    console.log("Server Result:", res);
  }

  return (
    <div className="w-full lg:w-[700px] mx-auto p-6 bg-white rounded-xl shadow-sm">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          
          <CustomInputField
            control={form.control}
            name="country"
            label="Country"
            placeholder="e.g. Croatia"
          />

          <CustomInputField
            control={form.control}
            name="duration"
            label="Duration (days)"
            placeholder="e.g. 5"
          />

          <CustomSelect
            control={form.control}
            name="groupType"
            label="Group Type"
            placeholder="Select group type"
            options={GROUP_TYPES}
          />

          <CustomSelect
            control={form.control}
            name="travelStyle"
            label="Travel Style"
            placeholder="Select travel style"
            options={TRAVEL_STYLES}
          />

          <CustomSelect
            control={form.control}
            name="interests"
            label="Interests"
            placeholder="Select interests"
            options={INTERESTS}
          />

          <CustomSelect
            control={form.control}
            name="budget"
            label="Budget Estimate"
            placeholder="Select budget"
            options={BUDGETS}
          />

          <Button className="w-full" type="submit">
            Generate Trip
          </Button>
        </form>
      </Form>
    </div>
  );
}
export default CreateTripsForm
