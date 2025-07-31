"use client";

import * as React from "react";
v23c6m-codex/fix-redirect-for-view-all-agents-button


main
import { cn } from "@/lib/utils";

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
v23c6m-codex/fix-redirect-for-view-all-agents-button
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "rounded-xl border bg-card/50 text-card-foreground backdrop-blur-sm shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/5 hover:-translate-y-1 group relative overflow-hidden z-0",
        "before:absolute before:inset-0 before:bg-gradient-to-br before:from-blue-500/5 before:to-purple-500/5 before:opacity-0 before:transition-opacity before:duration-300 before:pointer-events-none before:-z-10 hover:before:opacity-100",
        className,
      )}
      {...props}
    />
  );
});

>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-xl border bg-card/50 text-card-foreground backdrop-blur-sm shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/5 hover:-translate-y-1 group relative overflow-hidden z-0",
      "before:absolute before:inset-0 before:bg-gradient-to-br before:from-blue-500/5 before:to-purple-500/5 before:opacity-0 before:transition-opacity before:duration-300 before:pointer-events-none before:-z-10 hover:before:opacity-100",
      className
    )}
    {...props}
  />
));
 main
Card.displayName = "Card";

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
v23c6m-codex/fix-redirect-for-view-all-agents-button
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("flex flex-col space-y-1.5 p-6", className)}
      {...props}
    />
  );
});

>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex flex-col space-y-1.5 p-6", className)} {...props} />
));
main
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
v23c6m-codex/fix-redirect-for-view-all-agents-button
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("font-semibold leading-none tracking-tight", className)}
      {...props}
    />
  );
});

>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("font-semibold leading-none tracking-tight", className)} {...props} />
));
main
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
v23c6m-codex/fix-redirect-for-view-all-agents-button
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  );
});

>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("text-sm text-muted-foreground", className)} {...props} />
));
main
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
v23c6m-codex/fix-redirect-for-view-all-agents-button
>(({ className, ...props }, ref) => {
  return <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />;
});

>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
));
main
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
v23c6m-codex/fix-redirect-for-view-all-agents-button
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("flex items-center p-6 pt-0", className)}
      {...props}
    />
  );
});
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex items-center p-6 pt-0", className)} {...props} />
));
main
CardFooter.displayName = "CardFooter";

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
};
