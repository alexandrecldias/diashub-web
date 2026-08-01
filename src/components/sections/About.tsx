import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";

const pillars = ["Arquitetura", "Modernização", "Integrações", "Produtos digitais"];

export function About() {
  return (
    <Section id="sobre">
      <div className="max-w-3xl space-y-4">
        <Badge>Sobre a DiasHub</Badge>
        <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
          Engenharia antes de código.
        </h2>
        <p className="text-base leading-7 text-slate-600">
          Atuamos na base técnica dos produtos e sistemas para criar evolução com clareza,
          estabilidade e visão de longo prazo.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {pillars.map((pillar) => (
          <Card key={pillar} title={pillar} className="bg-slate-50">
            <p className="text-sm leading-6 text-slate-600">
              Espaço reservado para aprofundar este pilar na próxima etapa.
            </p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
