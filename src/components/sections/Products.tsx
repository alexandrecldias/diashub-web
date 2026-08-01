import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";

const products = [
  { name: "DiasHub Lab", badge: "Em desenvolvimento" },
  { name: "Legacy Tools", badge: "Laboratório" },
  { name: "Data Migration", badge: "Ferramentas" },
  { name: "Engineering Kits", badge: "Open Source" },
];

export function Products() {
  return (
    <Section id="produtos">
      <div className="max-w-3xl space-y-4">
        <Badge>Produtos</Badge>
        <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
          Iniciativas em evolução.
        </h2>
        <p className="text-base leading-7 text-slate-600">
          Os produtos abaixo representam frentes em construção, preparados para validação e
          amadurecimento futuro.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {products.map((product) => (
          <Card key={product.name} className="bg-slate-50">
            <div className="space-y-4">
              <Badge>{product.badge}</Badge>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-slate-950">{product.name}</h3>
                <p className="text-sm leading-6 text-slate-600">
                  Estrutura base para produto em evolução, com foco em utilidade e clareza técnica.
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
