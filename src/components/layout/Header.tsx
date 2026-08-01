"use client";

import { useState } from "react";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/cn";
import { mainNavigation } from "@/config/navigation";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur">
      <Container className="py-4">
        <div className="flex items-center justify-between gap-4">
          <a
            className="text-lg font-semibold tracking-tight text-slate-900"
            href="#inicio"
            onClick={() => setMenuOpen(false)}
          >
            DiasHub
          </a>

          <nav aria-label="Navegação principal" className="hidden items-center gap-2 md:flex">
            {mainNavigation.map((item) => (
              <a
                key={item.href}
                className="rounded-full px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
                href={item.href}
              >
                {item.label}
              </a>
            ))}
            <Button className="ml-2" href="#contato" variant="primary">
              Fale conosco
            </Button>
          </nav>

          <button
            aria-label={menuOpen ? "Fechar menu de navegação" : "Abrir menu de navegação"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 text-slate-700 transition-colors hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 md:hidden"
            type="button"
            onClick={() => setMenuOpen((current) => !current)}
          >
            <span className="sr-only">{menuOpen ? "Fechar menu" : "Abrir menu"}</span>
            <span className="flex flex-col gap-1.5" aria-hidden="true">
              <span
                className={cn(
                  "block h-0.5 w-5 rounded-full bg-current transition",
                  menuOpen && "translate-y-2 rotate-45",
                )}
              />
              <span
                className={cn(
                  "block h-0.5 w-5 rounded-full bg-current transition",
                  menuOpen && "opacity-0",
                )}
              />
              <span
                className={cn(
                  "block h-0.5 w-5 rounded-full bg-current transition",
                  menuOpen && "-translate-y-2 -rotate-45",
                )}
              />
            </span>
          </button>
        </div>

        <div className={cn("md:hidden", menuOpen ? "mt-4 block" : "hidden")} id="mobile-navigation">
          <nav
            aria-label="Navegação mobile"
            className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
          >
            <div className="flex flex-col gap-2">
              {mainNavigation.map((item) => (
                <a
                  key={item.href}
                  className="rounded-xl px-3 py-3 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100 hover:text-slate-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <Button
                className="mt-2 w-full"
                href="#contato"
                variant="primary"
                onClick={() => setMenuOpen(false)}
              >
                Fale conosco
              </Button>
            </div>
          </nav>
        </div>
      </Container>
    </header>
  );
}
