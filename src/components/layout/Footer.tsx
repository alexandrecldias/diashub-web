import { Container } from "@/components/ui/Container";
import { mainNavigation } from "@/config/navigation";

const socialLinks = [
  { label: "GitHub", href: "#" },
  { label: "LinkedIn", href: "#" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-200">
      <Container className="py-12">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_0.9fr_0.8fr]">
          <div className="space-y-4">
            <p className="text-lg font-semibold text-white">DiasHub</p>
            <p className="max-w-md text-sm leading-6 text-slate-400">
              Engenharia de software para modernização, integrações e produtos digitais.
            </p>
          </div>

          <nav aria-label="Links rápidos do rodapé" className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-300">
              Acesso rápido
            </p>
            <div className="flex flex-col gap-3">
              {mainNavigation.map((item) => (
                <a
                  key={item.href}
                  className="text-sm text-slate-400 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  href={item.href}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </nav>

          <nav aria-label="Redes sociais" className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-300">Redes</p>
            <div className="flex flex-col gap-3">
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  className="text-sm text-slate-400 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  href={item.href}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </nav>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-sm text-slate-500">
          <p>© {currentYear} DiasHub. Todos os direitos reservados.</p>
        </div>
      </Container>
    </footer>
  );
}
