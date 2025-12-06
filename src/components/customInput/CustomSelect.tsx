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

interface CustomInputProps<T extends FieldValues> {
  label?: string;
  placeholder: string;
  name: Path<T>;
  control: Control<T>;
  disabled?: boolean;
  id: string;
  options: Array<{ value: string; label: string; icon?: ReactNode }>;
  selectContentClassName?: string;
}

const CustomSelect = <T extends FieldValues>({
  name,
  control,
  placeholder,
  id,
  disabled,
  options,
  selectContentClassName = "w-[102px]",
}: CustomInputProps<T>) => {
  const {
    field,
    fieldState: { error },
  } = useController({
    name,
    control,
  });

  return (
    <div className="transition-all duration-400 hover:translate-y-[-2px] h-12">
      <Select
        value={field.value}
        onValueChange={field.onChange}
        disabled={disabled}
      >
        <SelectTrigger
          id={id}
          className={`rounded-xl transition-all duration-400 font-medium border border-[#888888] text-[#888888] `}
        >
          <SelectValue placeholder={placeholder} className="text-[#888888]" />
        </SelectTrigger>
        <SelectContent className={selectContentClassName}>
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.icon && option.icon}
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {error && <p className="mt-1 text-sm text-red-500">{error.message}</p>}
    </div>
  );
};

export default CustomSelect;
