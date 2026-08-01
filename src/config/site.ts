export const siteConfig = {
  name: "DiasHub",
  description:
    "Engenharia de software, consultoria, produtos e conteúdo técnico.",
  url: "https://diashub.com.br",
  locale: "pt-BR",
} as const;

export type SiteConfig = typeof siteConfig;