"use client";

import { Button } from "@/components/ui/button";
import clsx from "clsx";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

interface DashboardHeaderProps {
  title: string;
  description?: string;
  buttonLabel?: string;
  onButtonClick?: () => void;
  showButton?: boolean;
  icon?: React.ReactNode;
  className?: string;
}

const DashboardHeader: React.FC<DashboardHeaderProps> = ({
  title,
  description,
  buttonLabel,
  onButtonClick,
  showButton = false,
  icon = <Plus className="size-5" />,
  className,
}) => {
  const router = useRouter();

  return (
    <div
      className={clsx(
        "flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-6",
        className
      )}
    >
      {/* Left side */}
      <div className="space-y-3.5">
        <h1 className="text-2xl leading-[100%] font-semibold text-[#1F1F36] flex items-center gap-1">
          {title}
        </h1>
        {description && (
          <p className="text-lg leading-6 text-[#7F7E83]">{description}</p>
        )}
      </div>

      {/* Right side button */}
      {showButton && (
        <Button
          onClick={onButtonClick ?? (() => router.push("/dashboard/trips"))}
          className="bg-primary hover:bg-blue-700 text-white rounded-[8px] border border-[#ECF2EF] w-[233px] h-11 py-3 px-2.5 flex items-center justify-center gap-2 text-base font-semibold leading-5"
        >
          {icon}
          {buttonLabel}
        </Button>
      )}
    </div>
  );
};

export default DashboardHeader;
