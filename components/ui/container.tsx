import { cn } from "@/lib/utils";
import React from "react";

export default function Container({
  children,
  className,
  ...props
}: {
  children?: React.ReactNode;
  className?: string;
} & React.HTMLProps<HTMLDivElement>) {
  return (
    <div
      className={cn("flex flex-col gap-4 py-6 w-[90%] mx-auto", className)}
      {...props}
    >
      {children}
    </div>
  );
}
