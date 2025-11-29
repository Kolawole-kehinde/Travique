"use client";

import { Controller } from "react-hook-form";
import { FormItem, FormLabel, FormControl } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

interface Props {
  control: any;
  name: string;
  label: string;
  placeholder?: string;
}

const CustomInputField = ({ control, name, label, placeholder }: Props) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input {...field} placeholder={placeholder} />
          </FormControl>
        </FormItem>
      )}
    />
  );
}
export default CustomInputField
