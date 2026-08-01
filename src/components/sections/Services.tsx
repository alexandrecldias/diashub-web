import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";

const services = [
  "Modernização de Sistemas",
  "Desenvolvimento sob demanda",
  "APIs e Integrações",
  "Arquitetura de Software",
  "Consultoria Técnica",
  "IA aplicada à Engenharia",
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
          Um conjunto de frentes que pode ser refinado em conteúdo, escopo e diferenciais nas
          próximas iterações.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service) => (
          <Card
            key={service}
            className="bg-white"
            description="Wireframe de serviço com espaço para descrição, entregáveis e valor gerado."
            title={service}
          />
        ))}
      </div>
    </Section>
  );
}
