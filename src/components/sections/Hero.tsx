import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";

const credibilityItems = [
  "+15 anos de experiência",
  "Modernização de sistemas legados",
  "APIs, .NET e Cloud",
  "Projetos corporativos críticos",
];

export function Hero() {
  return (
    <Section id="inicio" variant="muted" containerClassName="gap-10">
      <div className="grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
        <div className="space-y-6">
          <Badge>Engenharia de Software</Badge>
          <div className="space-y-4">
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Engenharia de Software para Modernização, Integração e Produtos Digitais.
            </h1>
            <p className="max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              Estruturamos soluções com foco em arquitetura, evolução tecnológica e entrega
              consistente para contextos corporativos.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button href="#servicos" variant="primary">
              Conheça nossos serviços
            </Button>
            <Button href="#contato" variant="secondary">
              Fale conosco
            </Button>
          </div>
        </div>

        <div className="grid gap-4">
          <Card className="bg-slate-950 text-white">
            <div className="space-y-4">
              <div className="flex items-center justify-between gap-4">
                <p className="text-sm font-medium text-slate-300">Wireframe institucional</p>
                <Badge className="border-slate-700 bg-slate-900 text-slate-200">
                  Estrutura base
                </Badge>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs uppercase tracking-wide text-slate-400">Arquitetura</p>
                  <p className="mt-2 text-sm text-slate-200">
                    Clareza técnica e evolução sustentável.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs uppercase tracking-wide text-slate-400">Entrega</p>
                  <p className="mt-2 text-sm text-slate-200">
                    Base pronta para crescer com o conteúdo final.
                  </p>
                </div>
              </div>
            </div>
          </Card>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <p className="text-xs uppercase tracking-wide text-slate-500">Modernização</p>
              <p className="mt-2 text-sm text-slate-700">
                Integração, estabilidade e evolução gradual.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <p className="text-xs uppercase tracking-wide text-slate-500">Produtos</p>
              <p className="mt-2 text-sm text-slate-700">
                Iniciativas preparadas para validação futura.
              </p>
            </div>
          </div>
        </div>
      </div>

      <ul className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {credibilityItems.map((item) => (
          <li
            key={item}
            className="rounded-2xl border border-slate-200 bg-white px-4 py-4 text-sm font-medium text-slate-700 shadow-sm"
          >
            {item}
          </li>
        ))}
      </ul>
    </Section>
  );
}
