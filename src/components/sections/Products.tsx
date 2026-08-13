import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";

type Product = {
  name: string;
  badge: string;
  description: string;
  technologies?: string[];
  href?: string;
  cta?: string;
  featured?: boolean;
};

const products: Product[] = [
  {
    name: "Playlist AI",
    badge: "Produto disponível",
    description:
      "Crie playlists para o Spotify de forma inteligente. O Playlist AI utiliza Inteligência Artificial para transformar ideias, estilos, referências e preferências musicais em sugestões de músicas, facilitando a criação e organização de playlists.",
    technologies: ["Inteligência Artificial", "Spotify", "Next.js", "TypeScript", "OAuth 2.0"],
    href: "https://playlist.diashub.com.br/",
    cta: "Acessar Playlist AI →",
    featured: true,
  },
  {
    name: "DiasHub Lab",
    badge: "Em desenvolvimento",
    description:
      "Laboratório para validar soluções de engenharia, automação e componentes reaproveitáveis.",
  },
  {
    name: "Legacy Tools",
    badge: "Laboratório",
    description:
      "Ferramentas para apoiar modernização, análise técnica e evolução de sistemas legados.",
  },
  {
    name: "Data Migration",
    badge: "Ferramentas",
    description:
      "Conjunto de utilitários para apoiar migração de dados, integração e continuidade operacional.",
  },
  {
    name: "Engineering Kits",
    badge: "Open Source",
    description:
      "Kits e aceleradores para padronizar entregas técnicas e reduzir tempo de implementação.",
  },
];

export function Products() {
  return (
    <Section id="produtos">
      <div className="max-w-3xl space-y-4">
        <Badge>Produtos</Badge>
        <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
          Produtos e laboratórios de tecnologia.
        </h2>
        <p className="text-base leading-7 text-slate-600">
          O portfólio combina aplicações funcionais e frentes em evolução para experimentar, validar
          e escalar soluções de engenharia de software.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {products.map((product) => (
          <Card
            key={product.name}
            className={
              product.featured
                ? "border-slate-300 bg-white shadow-md md:col-span-2 xl:col-span-2"
                : "bg-slate-50"
            }
          >
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                {product.featured ? (
                  <span
                    aria-hidden="true"
                    className="inline-block h-2 w-2 rounded-full bg-slate-900"
                  />
                ) : null}
                <Badge
                  className={
                    product.featured ? "border-slate-900 bg-slate-900 text-white" : undefined
                  }
                >
                  {product.badge}
                </Badge>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-slate-950">{product.name}</h3>
                <p className="text-sm leading-6 text-slate-600">{product.description}</p>
              </div>
              {product.technologies ? (
                <div className="flex flex-wrap gap-2">
                  {product.technologies.map((technology) => (
                    <Badge key={`${product.name}-${technology}`} className="bg-slate-50">
                      {technology}
                    </Badge>
                  ))}
                </div>
              ) : null}
              {product.href && product.cta ? (
                <Button
                  href={product.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="primary"
                >
                  {product.cta}
                </Button>
              ) : null}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
