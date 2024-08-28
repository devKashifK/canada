import React from "react";
import "./style.css";
import { cn } from "@/lib/utils";

export default function MovingCardBorder({
  children,
  className,
  animate = false,
  ...props
}: {
  children?: React.ReactNode;
  className?: string;
  animate?: boolean;
} & React.HTMLProps<HTMLDivElement>) {
  return (
    <div
      className="card 
  card-animated card-animated-loop bg-gray-100 bg-clip-padding backdrop-filter backdrop-blur-md hover:scale-105 bg-opacity-20 rounded-2xl border-gray-100 group px-0 py-0 transition-all duration-300 ease-in-out"
      {...props}
    >
      {animate ? (
        <div className="card_effect invisible group-hover:visible"></div>
      ) : (
        <div className="card_effect"></div>
      )}
      <div className={cn("relative z-10 h-full px-10 py-14", className)}>
        {children}
      </div>
    </div>
  );
}
