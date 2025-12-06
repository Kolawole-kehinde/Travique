"use client";

import { FormProvider, useForm } from "react-hook-form";
import CustomInputField from "./customInput/CustomInputField";

import {
  COUNTRIES,
  GROUP_TYPES,
  TRAVEL_STYLES,
  INTERESTS,
  BUDGETS,
} from "../type/travelForm";
import CustomSelect from "./customInput/CustomSelect";

export default function TripForm() {
  const methods = useForm();

  return (
    <FormProvider {...methods}>
      <form className="w-full flex justify-center bg-gray-50 py-10">
        <div className="bg-white w-full max-w-xl rounded-2xl shadow p-6 space-y-6">

          {/* COUNTRY */}
          <CustomSelect
            label="Country"
            name="country"
            placeholder="Select a country"
            options={COUNTRIES}
            control={methods.control}
          />

          {/* DURATION */}
          <CustomInputField
            name="duration"
            label="Duration"
            type="number"
            placeholder="Enter number of days (e.g., 5, 12)"
          />

          {/* GROUP TYPE */}
          <CustomSelect
            label="Group Type"
            name="groupType"
            placeholder="Select a group type"
            options={GROUP_TYPES}
            control={methods.control}
          />

          {/* TRAVEL STYLE */}
          <CustomSelect
            label="Travel Style"
            name="travelStyle"
            placeholder="Select your travel style"
            options={TRAVEL_STYLES}
            control={methods.control}
          />

          {/* INTERESTS */}
          <CustomSelect
            label="Interests"
            name="interest"
            placeholder="Select your interest"
            options={INTERESTS}
            control={methods.control}
          />

          {/* BUDGET */}
          <CustomSelect
            label="Budget Estimate"
            name="budget"
            placeholder="Select your budget preference"
            options={BUDGETS}
            control={methods.control}
          />

          {/* MAP */}
          <div>
            <label className="text-sm font-medium text-gray-700">Location on map</label>
            <div className="border border-gray-300 h-48 rounded-xl overflow-hidden mt-2">
              <iframe
                width="100%"
                height="100%"
                loading="lazy"
                allowFullScreen
                src="https://maps.google.com/maps?q=Melbourne&t=&z=13&ie=UTF8&iwloc=&output=embed"
              />
            </div>
          </div>

          {/* SUBMIT BUTTON */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-4 rounded-xl text-lg font-medium hover:bg-blue-700 transition"
          >
            ✈️ Generate a trip
          </button>
        </div>
      </form>
    </FormProvider>
  );
}
