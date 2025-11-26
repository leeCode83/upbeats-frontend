import React from "react";
import { cn } from "@/lib/utils";

interface GradientTextProps extends React.HTMLAttributes<HTMLSpanElement> {
    children: React.ReactNode;
    className?: string;
}

export function GradientText({ children, className, ...props }: GradientTextProps) {
    return (
        <span
            className={cn(
                "bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-secondary animate-gradient-x",
                className
            )}
            {...props}
        >
            {children}
        </span>
    );
}
