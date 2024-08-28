import React from "react";
import { cn } from "./utils";

export default function Glass({
  children,
  className,
  ...props
}: {
  children?: React.ReactNode;
  className?: string;
} & React.HTMLProps<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "w-full bg-gray-100 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-20 border-gray-100 shadow-2xl rounded-2xl mx-auto py-8 px-4 flex",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
