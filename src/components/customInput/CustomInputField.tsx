"use client";

import { useState } from "react";
import { Control, useController, FieldValues, Path, PathValue } from "react-hook-form";

interface CustomInputProps<T extends FieldValues> {
  placeholder: string;
  name: Path<T>;
  type: "text" | "password" | "email" | "number";
  control: Control<T>;
  disabled?: boolean;
  defaultValue?: PathValue<T, Path<T>>; 
}

const CustomInputField = <T extends FieldValues>({
  placeholder,
  name,
  type,
  control,
  disabled,
  defaultValue,
}: CustomInputProps<T>) => {
  const [isFocused, setIsFocused] = useState(false);

  const { field } = useController({
    name,
    control,
    defaultValue,
  });

  const { onBlur, ...fieldProps } = field;

  const isActive = isFocused || (field.value !== undefined && String(field.value).length > 0);

  return (
    <div className="relative w-full">
      <label
        htmlFor={name as string}
        className={`absolute left-4 px-1 pointer-events-none z-10 transition-all duration-200 ease-out bg-white font-dm-sans leading-[100%] 
          ${isActive
            ? "-top-2.5 text-base font-medium text-dark-400"
            : "top-1/2 -translate-y-1/2 text-base text-dark-400"
          }`}
      >
        {placeholder}
      </label>
      <input
        {...fieldProps}
        id={name as string}
        type={type}
        onFocus={() => setIsFocused(true)}
        onBlur={() => {
          setIsFocused(false);
          onBlur();
        }}
        className="w-full h-12 text-left border-2 border-primary rounded-lg py-6 px-5 font-dm-sans font-medium text-base leading-[100px] text-black outline-none placeholder-transparent
          appearance-none
          [&::-webkit-inner-spin-button]:appearance-none
          [&::-webkit-outer-spin-button]:appearance-none"
        disabled={disabled}
      />
    </div>
  );
};

export default CustomInputField;
