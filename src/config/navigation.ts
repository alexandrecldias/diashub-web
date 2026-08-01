export type NavigationItem = {
  label: string;
  href: string;
};

export const mainNavigation: NavigationItem[] = [
  {
    label: "Empresa",
    href: "/empresa",
  },
  {
    label: "Serviços",
    href: "/servicos",
  },
  {
    label: "Produtos",
    href: "/produtos",
  },
  {
    label: "Casos de Engenharia",
    href: "/casos-de-engenharia",
  },
  {
    label: "Laboratório",
    href: "/laboratorio",
  },
  {
    label: "Blog Técnico",
    href: "/blog",
  },
  {
    label: "Open Source",
    href: "/open-source",
  },
  {
    label: "Contato",
    href: "/contato",
  },
];