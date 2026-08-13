import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";

type ExperienceIndicator = {
  value: string;
  title: string;
  description: string;
};

type ExperienceProject = {
  category: string;
  title: string;
  description: string;
  highlights: string[];
  technologies: string[];
};

const experienceIndicators: ExperienceIndicator[] = [
  {
    value: "+15 anos",
    title: "Engenharia de Software",
    description: "Experiência em desenvolvimento e evolução contínua de soluções corporativas.",
  },
  {
    value: "Sistemas críticos",
    title: "Ambientes corporativos e governamentais",
    description: "Atuação em cenários com alta exigência de estabilidade, qualidade e integração.",
  },
  {
    value: "Modernização",
    title: "Evolução de legados",
    description:
      "Transformação gradual de aplicações legadas para arquiteturas e tecnologias modernas.",
  },
  {
    value: "Full Stack",
    title: ".NET, Angular e APIs",
    description:
      "Experiência prática em backend, frontend e dados para produtos e sistemas críticos.",
  },
];

const experienceProjects: ExperienceProject[] = [
  {
    category: "Varejo",
    title: "Dinâmicas Promocionais",
    description:
      "Soluções para descontos, promoções e operações de lojas físicas com foco em escala e confiabilidade.",
    highlights: [
      "APIs REST com .NET e ASP.NET Core",
      "Arquitetura baseada em DDD e SOLID",
      "Kafka e integrações entre serviços",
      "Migração de aplicações para Azure AKS",
    ],
    technologies: [
      ".NET",
      "C#",
      "ASP.NET Core",
      "PostgreSQL",
      "Dapper",
      "Kafka",
      "Kubernetes",
      "AKS",
      "Docker",
      "xUnit",
      "Moq",
    ],
  },
  {
    category: "Compras Públicas",
    title: "Plataforma White Label",
    description:
      "Plataforma administrativa para gestão de portais com personalização de identidade visual e arquitetura multi-tenant.",
    highlights: [
      "Painel administrativo e APIs REST",
      "Arquitetura multi-tenant e modelagem de dados",
      "Integração com Keycloak (OIDC, OAuth2 e SAML)",
      "Modernização de sistemas legados",
    ],
    technologies: [
      ".NET Core",
      "C#",
      "Angular",
      "TypeScript",
      "SQL Server",
      "MySQL",
      "Keycloak",
      "Docker",
      "Azure DevOps",
    ],
  },
  {
    category: "Setor Público",
    title: "Sistemas Governamentais de Alta Criticidade",
    description:
      "Desenvolvimento, sustentação e evolução de sistemas corporativos utilizados em processos estratégicos do Governo do Espírito Santo.",
    highlights: [
      "Desenvolvimento de novas funcionalidades e sustentação de sistemas críticos",
      "Aplicações e APIs com .NET Core e MVC 5",
      "Interfaces responsivas e integradas com Angular",
      "Modernização de arquitetura e otimização de performance",
      "Caching e ganho de desempenho com Redis",
      "Rotinas de processamento agendadas com Hangfire",
      "Relatórios corporativos com SSRS",
      "Testes unitários, SonarQube e apoio técnico em homologações e entregas",
    ],
    technologies: [
      ".NET Core",
      "C#",
      "MVC 5",
      "APIs REST",
      "Angular",
      "TypeScript",
      "HTML5",
      "CSS3",
      "Entity Framework",
      "Redis",
      "SQL Server",
      "Hangfire",
      "SSRS",
      "SonarQube",
      "Git",
    ],
  },
  {
    category: "Transformação Tecnológica",
    title: "Modernização de Sistemas Legados",
    description:
      "Evolução de longo prazo de sistemas críticos conciliando tecnologias antigas e modernas com segurança operacional.",
    highlights: [
      "Modernização gradual e integração entre plataformas",
      "Migração e evolução de bancos de dados",
      "APIs para interoperabilidade com legados",
      "Automação de processos e melhoria de performance",
    ],
    technologies: [
      ".NET",
      "C#",
      "ASP.NET",
      "ASP Clássico",
      "VB6",
      "VB.NET",
      "WCF",
      "Angular",
      "SQL Server",
      "Oracle",
      "RabbitMQ",
      "Pentaho",
      "APIs REST",
    ],
  },
];

const aiTechnologies = [
  "GitHub Copilot",
  "ChatGPT",
  "Microsoft Copilot",
  "Engenharia de Prompt",
  "Code Review Assistido",
  "Debugging Assistido",
  "Geração de Testes",
  "Análise de Código Legado",
  "Refatoração Assistida",
  "Validação de Código Gerado por IA",
];

export function Experience() {
  return (
    <Section id="experiencia" variant="muted">
      <div className="max-w-4xl space-y-4">
        <Badge>Experiência em Engenharia</Badge>
        <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
          Mais de 15 anos desenvolvendo, modernizando e sustentando sistemas corporativos,
          aplicações críticas e soluções de software.
        </h2>
        <p className="text-base leading-7 text-slate-600">
          Projetos de engenharia orientados a resolver desafios reais de arquitetura, modernização,
          integração e evolução contínua.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {experienceIndicators.map((indicator) => (
          <Card key={indicator.title} className="bg-white">
            <div className="space-y-3">
              <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                {indicator.value}
              </p>
              <div className="space-y-2">
                <h3 className="text-base font-semibold text-slate-950">{indicator.title}</h3>
                <p className="text-sm leading-6 text-slate-600">{indicator.description}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        {experienceProjects.map((project) => (
          <Card
            key={project.title}
            className="bg-white transition duration-200 hover:-translate-y-0.5 hover:shadow-md"
          >
            <div className="space-y-4">
              <Badge>{project.category}</Badge>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold tracking-tight text-slate-950">
                  {project.title}
                </h3>
                <p className="text-sm leading-6 text-slate-600">{project.description}</p>
              </div>
              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Principais contribuições
                </p>
                <ul className="space-y-1.5">
                  {project.highlights.map((highlight) => (
                    <li key={highlight} className="text-sm leading-6 text-slate-700">
                      • {highlight}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <Badge key={`${project.title}-${technology}`} className="bg-slate-50">
                    {technology}
                  </Badge>
                ))}
              </div>
            </div>
          </Card>
        ))}
      </div>

      <Card className="bg-white">
        <div className="space-y-4">
          <Badge>IA aplicada à Engenharia</Badge>

          <p className="text-sm leading-6 text-slate-600">
            Inteligência Artificial Generativa integrada ao ciclo de engenharia de software,
            combinando produtividade com análise crítica e validação técnica. Uso de IA no
            desenvolvimento e revisão de código, debugging assistido, investigação de problemas,
            geração de testes, refatoração, documentação, levantamento de requisitos e modernização
            de sistemas legados.
          </p>

          <p className="text-sm leading-6 text-slate-600">
            Experiência na validação de código gerado por IA, avaliando regras de negócio,
            arquitetura, segurança, performance, manutenibilidade e aderência aos padrões existentes
            antes da incorporação às aplicações.
          </p>

          <div className="flex flex-wrap gap-2">
            {aiTechnologies.map((technology) => (
              <Badge key={technology} className="bg-slate-50">
                {technology}
              </Badge>
            ))}
          </div>
        </div>
      </Card>
    </Section>
  );
}
