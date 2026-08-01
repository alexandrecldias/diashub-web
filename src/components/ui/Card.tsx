import type { HTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/cn";

type CardProps = Readonly<
  HTMLAttributes<HTMLElement> & {
    title?: string;
    description?: string;
    children?: ReactNode;
  }
>;

export function Card({ className, title, description, children, ...props }: CardProps) {
  return (
    <article
      className={cn("h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm", className)}
      {...props}
    >
      {title ? <h3 className="text-base font-semibold text-slate-900">{title}</h3> : null}
      {description ? (
        <p className={cn("text-sm leading-6 text-slate-600", title ? "mt-2" : undefined)}>
          {description}
        </p>
      ) : null}
      {children ? (
        <div className={cn(description || title ? "mt-4" : undefined)}>{children}</div>
      ) : null}
    </article>
  );
}
