"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Button } from "@/components/ui/button";

import { travelFormSchema, TravelFormValues } from "../schemas/travelForm";
import { BUDGETS, GROUP_TYPES, INTERESTS, TRAVEL_STYLES } from "../type/travelForm";

export default function TravelForm() {
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

  function onSubmit(values: TravelFormValues) {
    console.log("🚀 Form submitted:", values);
  }

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-xl shadow-sm">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {/* Country */}
          <FormField
            control={form.control}
            name="country"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Country</FormLabel>
                <Input {...field} placeholder="e.g. Croatia" />
              </FormItem>
            )}
          />

          {/* Duration */}
          <FormField
            control={form.control}
            name="duration"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Duration (days)</FormLabel>
                <Input {...field} placeholder="e.g. 5, 10, 12" />
              </FormItem>
            )}
          />

          {/* Group Type */}
          <FormField
            control={form.control}
            name="groupType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Group Type</FormLabel>
                <Select onValueChange={field.onChange}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select group type" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {GROUP_TYPES?.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />

          {/* Travel Style */}
          <FormField
            control={form.control}
            name="travelStyle"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Travel Style</FormLabel>
                <Select onValueChange={field.onChange}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select travel style" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {TRAVEL_STYLES?.map((style) => (
                      <SelectItem key={style} value={style}>
                        {style}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />

          {/* Interests */}
          <FormField
            control={form.control}
            name="interests"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Interests</FormLabel>
                <Select onValueChange={field.onChange}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select interest" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {INTERESTS?.map((i) => (
                      <SelectItem key={i} value={i}>
                        {i}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />

          {/* Budget Estimate */}
          <FormField
            control={form.control}
            name="budget"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Budget Estimate</FormLabel>
                <Select onValueChange={field.onChange}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select budget" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {BUDGETS?.map((b) => (
                      <SelectItem key={b} value={b}>
                        {b}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />

          <Button className="w-full" type="submit">
            Generate Trip
          </Button>
        </form>
      </Form>
    </div>
  );
}
