import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-all duration-200 ease-in-out disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-blue-500 text-white shadow-md hover:bg-blue-600 hover:shadow-lg hover:scale-105 hover:brightness-110 active:scale-95",
        destructive:
          "bg-red-500 text-white shadow-md hover:bg-red-400 hover:shadow-lg hover:scale-105 hover:brightness-110 active:scale-95",
        outline:
          "border border-gray-300 text-gray-700 bg-white shadow-sm hover:bg-gray-100 hover:shadow-md hover:scale-105 active:scale-95",
        ghost:
          "text-gray-700 bg-transparent hover:bg-gray-100 hover:shadow-md hover:scale-105 active:scale-95",
        link: "text-blue-600 underline-offset-4 hover:underline",
      },
      size: {
        sm: "h-8 px-3 text-xs",
        md: "h-10 px-4 text-sm",
        lg: "h-12 px-6 text-base",
      },
      rounded: {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        full: "rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
      rounded: "md",
    },
  }
);

const Button = React.forwardRef(
  ({ className, variant, size, rounded, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size, rounded, className }))}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };