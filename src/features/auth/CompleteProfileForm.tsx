"use client";

import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { completeProfileSchema, CompleteProfileSchema } from "@/src/schemas/auth";
import CustomInput from "@/src/components/customInput";

const CompleteProfileForm = () => {
//   const { completeProfileMutation } = useAuth();

  const { control, handleSubmit } = useForm<CompleteProfileSchema>({
    defaultValues: {
      fullName: "",
      countryCode: "+234",
      phoneNumber: "",
    },
    resolver: zodResolver(completeProfileSchema),
  });

  const onSubmit = (data: CompleteProfileSchema) => {
    // completeProfileMutation.mutate(data);
  };


  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-2xl font-bold text-[#323232]">Complete Your Profile</h1>
        <p className="text-sm text-[#888888]">
          Please provide your information to complete your account setup
        </p>
      </div>

      <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
        <CustomInput
          id="fullName"
          name="fullName"
          placeholder="Full Name"
          type="text"
          control={control}
        //   disabled={completeProfileMutation.isPending}
        />

        <div className="flex gap-3">
          <CustomInput
            id="phoneNumber"
            name="phoneNumber"
            placeholder="Phone Number"
            type="number"
            control={control}
            // disabled={completeProfileMutation.isPending}
          />
        </div>

        <div>
          <Button
            type="submit"
            className="w-full h-12 p-2.5"
            // disabled={completeProfileMutation.isPending}
          >
            {/* {completeProfileMutation.isPending ? "Completing..." : "Complete Profile"} */}
            Complete Profile
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CompleteProfileForm;

