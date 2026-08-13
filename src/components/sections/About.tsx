import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";

const pillars = [
  {
    title: "Arquitetura",
    description:
      "Soluções estruturadas com separação de responsabilidades, boas práticas e decisões técnicas que favorecem manutenção, evolução e escalabilidade.",
  },
  {
    title: "Modernização",
    description:
      "Evolução gradual de sistemas legados, reduzindo riscos e incorporando novas tecnologias sem desconsiderar regras de negócio e integrações existentes.",
  },
  {
    title: "Integrações",
    description:
      "Conexão entre sistemas, APIs, serviços e bancos de dados para criar fluxos confiáveis, seguros e preparados para diferentes cenários de negócio.",
  },
  {
    title: "Produtos digitais",
    description:
      "Transformação de ideias e necessidades em aplicações funcionais, combinando engenharia, experiência prática e evolução contínua do produto.",
  },
];

export function About() {
  return (
    <Section id="sobre">
      <div className="max-w-3xl space-y-4">
        <Badge>Sobre a DiasHub</Badge>

        <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
          Engenharia antes de código.
        </h2>

        <p className="text-base leading-7 text-slate-600">
          Aplicamos experiência em engenharia de software para construir, integrar e modernizar
          soluções com clareza técnica, estabilidade e visão de longo prazo.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {pillars.map((pillar) => (
          <Card
            key={pillar.title}
            title={pillar.title}
            description={pillar.description}
            className="bg-slate-50"
          />
        ))}
      </div>
    </Section>
  );
}
