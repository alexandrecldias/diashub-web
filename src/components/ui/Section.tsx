import type { ElementType, ReactNode } from "react";

import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/cn";

type SectionVariant = "default" | "muted" | "accent";

type SectionProps = Readonly<{
  as?: ElementType;
  id?: string;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  variant?: SectionVariant;
}>;

const variantClasses: Record<SectionVariant, string> = {
  default: "bg-white text-slate-900",
  muted: "bg-slate-50 text-slate-900",
  accent: "bg-slate-900 text-white",
};

export function Section({
  as,
  id,
  children,
  className,
  containerClassName,
  variant = "default",
}: SectionProps) {
  const Component = as ?? "section";

  return (
    <Component
      className={cn("scroll-mt-24 py-16 sm:py-20 lg:py-24", variantClasses[variant], className)}
      id={id}
    >
      <Container className={cn("flex flex-col gap-8 sm:gap-10", containerClassName)}>
        {children}
      </Container>
    </Component>
  );
}
