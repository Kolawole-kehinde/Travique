"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ReactNode } from "react";
import { Control, FieldValues, Path, useController } from "react-hook-form";
import { cn } from "@/lib/utils";

interface CustomSelectProps<T extends FieldValues> {
  label?: string;
  placeholder: string;
  name: Path<T>;
  control: Control<T>;
  disabled?: boolean;
  id?: string;
  options: Array<{ value: string; label: string; icon?: ReactNode }>;
}

const CustomSelect = <T extends FieldValues>({
  label,
  name,
  control,
  placeholder,
  id,
  disabled,
  options,
}: CustomSelectProps<T>) => {
  const generatedId = id || `select-${name}`;

  const {
    field,
    fieldState: { error },
  } = useController({
    name,
    control,
  });

  return (
    <div className="relative w-full space-y-1">
      {label && (
        <label htmlFor={generatedId} className="text-sm text-black/75">
          {label}
        </label>
      )}

      <Select value={field.value} onValueChange={field.onChange} disabled={disabled}>
        <SelectTrigger
          id={generatedId}
          className={cn(
            "w-full h-12 border border-gray-300 rounded-xl px-4 text-base bg-white"
          )}
        >
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>

        <SelectContent className="bg-white border rounded-xl shadow-xl py-3 px-4 space-y-3">
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              <div className="flex items-center gap-2">
                {option.icon && (
                  <span className="text-xl">{option.icon}</span>
                )}
                <span className="font-medium">{option.label}</span>
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {error && <p className="text-sm text-red-600">{error.message}</p>}
    </div>
  );
};

export default CustomSelect;
