import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";

export function CTA() {
  return (
    <Section className="bg-slate-900 text-white" containerClassName="gap-0" variant="accent">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-8 sm:p-10 lg:p-12">
        <div className="max-w-3xl space-y-5">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Vamos construir a próxima solução juntos.
          </h2>
          <p className="text-base leading-7 text-slate-300">
            Se sua operação precisa evoluir com engenharia, podemos estruturar a próxima etapa com
            clareza e foco.
          </p>
          <Button href="#contato" variant="secondary">
            Entrar em contato
          </Button>
        </div>
      </div>
    </Section>
  );
}
