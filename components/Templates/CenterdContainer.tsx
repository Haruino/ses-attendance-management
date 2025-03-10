import { cn } from "@/app/util/tialwindUtil";
import React from "react";

type CenteredContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export const CenterdContainer = ({
  children,
  className,
}: CenteredContainerProps) => {
  return (
    <div className={cn("flex items-center justify-center flex-1", className)}>
      {children}
    </div>
  );
};
