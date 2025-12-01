import React from "react";
import { Controller, useFormContext, FieldErrors, FieldValues } from "react-hook-form";

interface Props {
  name: string;
  label?: string;
  placeholder?: string;
  type?: "text" | "password" | "email" | "number" | "date" | "textarea";
  rows?: number;
  disabled?: boolean;
}

export default function CustomInputField({
  name,
  label,
  placeholder,
  type = "text",
  rows = 4,
  disabled = false,
}: Props) {
  const { control, formState } = useFormContext<FieldValues>();

  // Properly typed access to errors
  const errors: FieldErrors<FieldValues> = formState.errors;
  const errorMessage = errors[name]?.message as string | undefined;

  return (
    <div className="w-full space-y-1">
      {label && (
        <label htmlFor={name} className="text-sm font-medium text-gray-700">
          {label}
        </label>
      )}

      <Controller
        control={control}
        name={name}
        defaultValue={type === "number" ? "" : ""}
        render={({ field }) =>
          type === "textarea" ? (
            <textarea
              id={name}
              {...field}
              rows={rows}
              placeholder={placeholder}
              disabled={disabled}
              className={`w-full mt-2 p-4 rounded-lg border-2 outline-none transition placeholder:text-sm
                ${errorMessage ? "border-red-500" : "border-[#EBEFF5] focus:border-primary"}`}
            />
          ) : (
            <input
              id={name}
              {...field}
              type={type}
              placeholder={placeholder}
              disabled={disabled}
              className={`w-full h-12 mt-2 p-4 rounded-lg border-2 outline-none transition placeholder:text-sm
                ${errorMessage ? "border-red-500" : "border-[#EBEFF5] focus:border-primary"}`}
            />
          )
        }
      />

      {errorMessage && <p className="text-sm text-red-500">{errorMessage}</p>}
    </div>
  );
}
