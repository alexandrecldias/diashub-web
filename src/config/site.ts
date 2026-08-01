export const siteConfig = {
  name: "DiasHub",
  shortName: "DiasHub",
  description:
    "Engenharia de software, modernização de sistemas, consultoria, produtos e conteúdo técnico.",
  url: "https://diashub.com.br",
  locale: "pt-BR",
  author: {
    name: "DiasHub",
  },
} as const;

export type SiteConfig = typeof siteConfig;
