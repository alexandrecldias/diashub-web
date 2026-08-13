"use client";

import { useCallback } from "react";
import type { FormEvent } from "react";

import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";

export function Contact() {
  const handleSubmit = useCallback((event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  }, []);

  return (
    <Section id="contato" variant="muted">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
        <div className="space-y-4">
          <Badge>Contato</Badge>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            Converse com a DiasHub.
          </h2>
          <p className="max-w-xl text-base leading-7 text-slate-600">
            Este espaço está pronto para receber o conteúdo final de atendimento, canais e
            formulário de contato.
          </p>
          <div className="space-y-2 text-sm text-slate-600">
            <p>
              E-mail:{" "}
              <a
                className="font-medium text-slate-900 underline-offset-4 hover:underline"
                href="mailto:contato@diashub.com.br"
              >
                contato@diashub.com.br
              </a>
            </p>
            <p>
              LinkedIn:{" "}
              <a
                className="font-medium text-slate-900 underline-offset-4 hover:underline"
                href="https://www.linkedin.com/in/alexandre-a-305b4223/"
              >
                alexandre-a-305b4223
              </a>
            </p>
            <p>
              GitHub:{" "}
              <a
                className="font-medium text-slate-900 underline-offset-4 hover:underline"
                href="https://github.com/alexandrecldias"
              >
                alexandrecldias
              </a>
            </p>
          </div>
        </div>

        <Card className="bg-white">
          <form className="grid gap-4" onSubmit={handleSubmit}>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="grid gap-2">
                <label className="text-sm font-medium text-slate-700" htmlFor="name">
                  Nome
                </label>
                <input
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-900 focus:ring-2 focus:ring-slate-900/10"
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                />
              </div>
              <div className="grid gap-2">
                <label className="text-sm font-medium text-slate-700" htmlFor="email">
                  E-mail
                </label>
                <input
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-900 focus:ring-2 focus:ring-slate-900/10"
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                />
              </div>
            </div>

            <div className="grid gap-2">
              <label className="text-sm font-medium text-slate-700" htmlFor="company">
                Empresa
              </label>
              <input
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-900 focus:ring-2 focus:ring-slate-900/10"
                id="company"
                name="company"
                type="text"
                autoComplete="organization"
              />
            </div>

            <div className="grid gap-2">
              <label className="text-sm font-medium text-slate-700" htmlFor="message">
                Mensagem
              </label>
              <textarea
                className="min-h-36 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-900 focus:ring-2 focus:ring-slate-900/10"
                id="message"
                name="message"
              />
            </div>

            <Button className="w-full sm:w-auto" type="submit" variant="primary">
              Enviar
            </Button>
          </form>
        </Card>
      </div>
    </Section>
  );
}
