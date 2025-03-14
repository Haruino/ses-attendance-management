import { cn } from "@/lib/utils"
import { cva } from "class-variance-authority"
import React from "react"

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode
  variant?: "primary" | "secondary" | "danger"
}

const variantStyles = cva("w-full px-4 py-2 rounded font-semibold transition cursor-pointer text-white", {
  variants: {
    variant: {
      primary: "bg-blue-500 hover:bg-blue-600 disabled:bg-blue-300",
      secondary: "bg-gray-500 hover:bg-gray-600 disabled:bg-gray-300",
      danger: "bg-red-500 hover:bg-red-600 disabled:bg-red-300",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
})

export const Button = ({ type = "button", children, className, variant = "primary", ...props }: ButtonProps) => {
  return (
    <button type={type} className={cn(variantStyles({ variant }), className)} {...props}>
      {children}
    </button>
  )
}
