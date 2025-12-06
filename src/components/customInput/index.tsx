"use client";

import { ReactNode, useState, useCallback } from "react";
import { Control, FieldValues, Path, useController } from "react-hook-form";
import { Eye, EyeOff, AlertCircle } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { NG, US } from "country-flag-icons/react/3x2";

interface CustomInputProps<T extends FieldValues> {
  label?: string;
  placeholder: string;
  name: Path<T>;
  type: "text" | "password" | "email" | "number" | "currency" | "date"
  control: Control<T>;
  disabled?: boolean;
  id: string;
  error?: string;
  selectOnchange?: (value: string) => void;
  selectValue?: string;
  selectOPtions?: { value: string; label: ReactNode }[];
  currencyType?: string;
  helperText?: string;
  required?: boolean;
  className?: string;

}

const CustomInput = <T extends FieldValues>({
  id,
  type = "text",
  placeholder,
  name,
  control,
  disabled,
  selectOnchange,
  selectValue,
  selectOPtions,
  currencyType,
  helperText,
  className
}: CustomInputProps<T>) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setIsFocused] = useState(disabled ? true : false);

  const {
    field,
    fieldState: { error },
  } = useController({
    name,
    control,
  });

  const hasValue = field.value?.length > 0;
  const isActive = isFocused || hasValue;

  // Get currency symbol
  const getCurrencySymbol = useCallback(() => {
    if (type === "currency" && currencyType) {
      switch (currencyType) {
        case "NGN":
          return "₦";
        case "USD":
          return "$";
        case "EUR":
          return "€";
        case "GBP":
          return "£";
        default:
          return currencyType;
      }
    }
    return "";
  }, [type, currencyType]);


  // Handle currency input changes
  const handleCurrencyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const symbol = getCurrencySymbol();

    // Remove currency symbol for processing
    const numericValue = value.replace(new RegExp(`\\${symbol}`, 'g'), '');

    // Only allow numbers and decimal point
    const cleanValue = numericValue.replace(/[^\d.]/g, '');

    // Ensure only one decimal point
    const parts = cleanValue.split('.');
    const formattedValue = parts.length > 2 ? `${parts[0]}.${parts.slice(1).join('')}` : cleanValue;

    // Update the form field with clean numeric value
    field.onChange(formattedValue);

  };



  const getCurrencyDisplay = () => {
    if (type === "currency" && currencyType) {
      switch (currencyType) {
        case "NGN":
          return (
            <div className="flex items-center gap-2 px-3 py-2 bg-gray-50 border-r border-gray-200 rounded-l-lg">
              <NG className="w-4 h-4" />
              <span className="text-sm font-medium text-gray-700">NGN</span>
            </div>
          );
        case "USD":
          return (
            <div className="flex items-center gap-1 px-3 py-2">
              <US className="w-4 h-4" />
              <span className="text-sm font-semibold text-[#04000C] font-dm-sans">USD</span>
            </div>
          );
        case "EUR":
          return (
            <div className="flex items-center gap-2 px-3 py-2 bg-gray-50 border-r border-gray-200 rounded-l-lg">
              <span className="text-sm font-medium text-gray-700">€</span>
              <span className="text-sm font-medium text-gray-700">EUR</span>
            </div>
          );
        default:
          return (
            <div className="flex items-center gap-2 px-3 py-2 bg-gray-50 border-r border-gray-200 rounded-l-lg">
              <span className="text-sm font-medium text-gray-700">{currencyType}</span>
            </div>
          );
      }
    }
    return null;
  };

  return (
    <div className={cn("relative w-full", className)}>
      {/* Main Input Container */}
      <div className="relative">
        {/* Input Field */}
        <div className={cn(
          "relative flex items-center  border rounded-xl",
          type === "currency" && "border border-gray-300 rounded-xl",
          isActive && "border-primary ring-1 ring-primary",
          error && "border-red-500 focus-within:border-red-500 focus-within:ring-red-500"
        )}>
          {/* Floating Label */}
          <label
            htmlFor={name}
            className={`absolute left-4 px-1 pointer-events-none z-10 transition-all duration-200 ease-out bg-white font-dm-sans leading-[100%] 
                ${isActive
                ? "-top-2.5 text-base font-medium text-dark-400"
                : "top-1/2 -translate-y-1/2 text-base text-dark-400"
              }`}
          >
            {placeholder}
          </label>


          <input
            {...field}
            id={id}
            type={type}
            onFocus={() => setIsFocused(true)}
            onBlur={() => {
              setIsFocused(false);
              field.onBlur();
            }}
            onChange={type === "currency" ? handleCurrencyChange : field.onChange}
            className="w-full h-12 text-left py-6 px-5 font-dm-sans font-medium text-base leading-[100px] text-black outline-none placeholder-transparent
                appearance-none
                [&::-webkit-inner-spin-button]:appearance-none
                [&::-webkit-outer-spin-button]:appearance-none"
            disabled={disabled}
          />
          {/* Currency Display */}
          {getCurrencyDisplay()}
          {/* Select Options */}
          {selectOPtions && (
            <div className="absolute right-0 top-1/2 -translate-y-1/2">
              <Select value={selectValue} onValueChange={selectOnchange}>
                <SelectTrigger className="w-26 border-0 bg-transparent hover:bg-transparent focus:bg-transparent shadow-none">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent align="end" className="w-26">
                  {selectOPtions?.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          )}

          {/* Password Toggle Button */}
          {type === "password" && (
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors p-1 rounded-md hover:bg-gray-100"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? (
                <EyeOff className="w-5 h-5" />
              ) : (
                <Eye className="w-5 h-5" />
              )}
            </button>
          )}


        </div>
      </div>

      {/* Helper Text and Error Message */}
      <div className="mt-2 space-y-1">
        {helperText && !error && (
          <p className="text-sm text-gray-500">{helperText}</p>
        )}
        {error && (
          <p className="text-sm text-red-500 flex items-center gap-1">
            <AlertCircle className="w-4 h-4" />
            {error.message}
          </p>
        )}
      </div>
    </div>
  );
};

export default CustomInput;
