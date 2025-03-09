import { cn } from "@/app/util/tialwindUtil";
import React from "react";

type CenterdCardProps = {
  children: React.ReactNode;
  className?: string;
};

export const Card = ({ children, className }: CenterdCardProps) => {
  return (
    <div
      className={cn(
        "bg-white p-6 shadow-lg w-full max-w-md min-h-[600px] bg-white",
        className
      )}
    >
      {children}
    </div>
  );
};
