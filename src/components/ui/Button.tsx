import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import Link from "next/link";

import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "secondary";

type SharedButtonProps = Readonly<{
  children: ReactNode;
  className?: string;
  variant?: ButtonVariant;
}>;

type ButtonAsLinkProps = SharedButtonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "children"> & {
    href: string;
  };

type ButtonAsButtonProps = SharedButtonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> & {
    href?: never;
  };

type ButtonProps = ButtonAsLinkProps | ButtonAsButtonProps;

const baseClasses =
  "inline-flex items-center justify-center rounded-full border px-5 py-3 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900";

const variantClasses: Record<ButtonVariant, string> = {
  primary: "border-slate-900 bg-slate-900 text-white hover:border-slate-700 hover:bg-slate-700",
  secondary: "border-slate-300 bg-white text-slate-900 hover:border-slate-400 hover:bg-slate-50",
};

function isPlainAnchorHref(href: string) {
  return (
    href.startsWith("#") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:") ||
    href.startsWith("http://") ||
    href.startsWith("https://")
  );
}

function hasHref(props: ButtonProps): props is ButtonAsLinkProps {
  return typeof (props as { href?: unknown }).href === "string";
}

function LinkButton({
  children,
  className,
  variant = "primary",
  href,
  ...rest
}: ButtonAsLinkProps) {
  const classes = cn(baseClasses, variantClasses[variant], className);

  if (isPlainAnchorHref(href)) {
    return (
      <a className={classes} href={href} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <Link className={classes} href={href} {...rest}>
      {children}
    </Link>
  );
}

function NativeButton({ children, className, variant = "primary", ...rest }: ButtonAsButtonProps) {
  const classes = cn(baseClasses, variantClasses[variant], className);

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}

export function Button(props: ButtonProps) {
  if (hasHref(props)) {
    return <LinkButton {...props} />;
  }

  return <NativeButton {...props} />;
}
