import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";

const services = [
  {
    title: "Modernização de Sistemas",
    description:
      "Evolução de aplicações legadas com foco em segurança, performance, manutenção e adoção gradual de tecnologias modernas.",
  },
  {
    title: "Desenvolvimento sob demanda",
    description:
      "Criação de soluções sob medida para necessidades específicas do negócio, desde novas funcionalidades até aplicações completas.",
  },
  {
    title: "APIs e Integrações",
    description:
      "Desenvolvimento de APIs e integrações entre sistemas, serviços e bancos de dados, com foco em confiabilidade, segurança e escalabilidade.",
  },
  {
    title: "Arquitetura de Software",
    description:
      "Definição e evolução de arquiteturas orientadas à manutenção, escalabilidade e clareza técnica, aplicando boas práticas de engenharia de software.",
  },
  {
    title: "Consultoria Técnica",
    description:
      "Apoio técnico na análise de sistemas, arquitetura, modernização, performance, qualidade de código e estratégias de evolução tecnológica.",
  },
  {
    title: "IA aplicada à Engenharia",
    description:
      "Engenharia de software assistida por IA para análise, desenvolvimento, debugging, code review, testes e modernização de aplicações.",
  },
];

export function Services() {
  return (
    <Section id="servicos" variant="muted">
      <div className="max-w-3xl space-y-4">
        <Badge>Serviços</Badge>

        <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
          Capacidade técnica para evoluir sistemas e produtos.
        </h2>

        <p className="text-base leading-7 text-slate-600">
          Soluções de engenharia de software para modernização, integração, desenvolvimento e
          evolução de aplicações e produtos digitais.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service) => (
          <Card
            key={service.title}
            className="bg-white"
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </Section>
  );
}
