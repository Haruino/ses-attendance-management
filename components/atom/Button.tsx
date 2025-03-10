import { cn } from "@/lib/utils";
import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "danger";
};

export const Button = ({
  type = "button",
  children,
  className,
  variant = "primary",
  ...props
}: ButtonProps) => {
  const baseStyles = "w-full px-4 py-2 rounded font-semibold transition cursor-pointer";

  const variantStyles = {
    primary: "bg-blue-500 text-white hover:bg-blue-600 disabled:bg-blue-300",
    secondary: "bg-gray-500 text-white hover:bg-gray-600 disabled:bg-gray-300",
    danger: "bg-red-500 text-white hover:bg-red-600 disabled:bg-red-300",
  };

  return (
    <button
      type={type}
      className={cn(baseStyles, variantStyles[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
};
