import type { HTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/cn";

type BadgeProps = Readonly<
  HTMLAttributes<HTMLSpanElement> & {
    children: ReactNode;
  }
>;

export function Badge({ className, children, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-slate-300 bg-slate-100 px-3 py-1 text-xs font-medium tracking-wide text-slate-700",
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}
