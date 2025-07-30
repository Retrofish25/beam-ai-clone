"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium transition-all duration-200 backdrop-blur-sm",
  {
    variants: {
      variant: {
        default:
          "bg-blue-500/20 text-blue-300 border border-blue-500/30 shadow-lg shadow-blue-500/10 hover:bg-blue-500/30 hover:border-blue-400/50",
        secondary:
          "bg-gray-500/20 text-gray-300 border border-gray-500/30 shadow-lg shadow-gray-500/10 hover:bg-gray-500/30 hover:border-gray-400/50",
        destructive:
          "bg-red-500/20 text-red-300 border border-red-500/30 shadow-lg shadow-red-500/10 hover:bg-red-500/30 hover:border-red-400/50",
        outline: "border border-white/20 text-gray-300 hover:bg-white/5",
        success:
          "bg-green-500/20 text-green-300 border border-green-500/30 shadow-lg shadow-green-500/10",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
