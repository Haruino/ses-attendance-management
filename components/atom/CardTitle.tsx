import { cn } from "@/lib/tailwindUtils"
import React from "react"

export const CardTitle = ({ title, className }: { title: string; className?: string }) => {
  return <h2 className={cn("text-center text-3xl font-bold", className)}>{title}</h2>
}
