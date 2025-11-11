import { Building2, Mail, Phone, Clock, MapPin } from "lucide-react";

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Coluna 1: Sobre */}
          <div>
            <div className="flex items-center gap-2 mb-3 sm:mb-4">
              <Building2 className="h-5 w-5 sm:h-6 sm:w-6 text-accent" />
              <h3 className="text-lg sm:text-xl font-bold">AFP Soluções Industriais</h3>
            </div>
            <p className="text-primary-foreground/80 mb-3 sm:mb-4 text-sm sm:text-base">
              Onde o trabalho se torna missão.
            </p>
            <p className="text-primary-foreground/80 text-xs sm:text-sm">
              Soluções completas em estruturas metálicas, serralheria industrial e manutenção técnica.
            </p>
          </div>

          {/* Coluna 2: Links Rápidos */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Navegação</h3>
            <nav className="flex flex-col gap-2">
              <button
                onClick={() => scrollToSection("inicio")}
                className="text-primary-foreground/80 hover:text-accent transition-colors text-left"
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection("sobre")}
                className="text-primary-foreground/80 hover:text-accent transition-colors text-left"
              >
                Sobre
              </button>
              <button
                onClick={() => scrollToSection("servicos")}
                className="text-primary-foreground/80 hover:text-accent transition-colors text-left"
              >
                Serviços
              </button>
              <button
                onClick={() => scrollToSection("planos")}
                className="text-primary-foreground/80 hover:text-accent transition-colors text-left"
              >
                Planos
              </button>
              <button
                onClick={() => scrollToSection("contato")}
                className="text-primary-foreground/80 hover:text-accent transition-colors text-left"
              >
                Contato
              </button>
            </nav>
          </div>

          {/* Coluna 3: Contato */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Contato</h3>
            <div className="flex flex-col gap-3">
              <a
                href="https://wa.me/5565999098353"
                className="flex items-center gap-2 text-primary-foreground/80 hover:text-accent transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Phone className="h-4 w-4" />
                <span>(65) 99909-8353</span>
              </a>
              <a
                href="mailto:afpcorporativosac@gmail.com"
                className="flex items-center gap-2 text-primary-foreground/80 hover:text-accent transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span>afpcorporativosac@gmail.com</span>
              </a>
              <div className="flex items-start gap-2 text-primary-foreground/80">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <span>Rua Dois, Quadra 01 Lote 11</span>
              </div>
              <div className="flex items-start gap-2 text-primary-foreground/80">
                <Clock className="h-4 w-4 mt-1 flex-shrink-0" />
                <span>Segunda a Sexta: 07h às 18h</span>
              </div>
            </div>
          </div>
        </div>

        {/* Linha divisória */}
        <div className="border-t border-primary-foreground/20 pt-4 sm:pt-6">
          <div className="text-center text-primary-foreground/60 text-xs sm:text-sm">
            <p>© {new Date().getFullYear()} AFP Soluções Industriais - CNPJ: 53.671.791/0001-48</p>
            <p className="mt-1 sm:mt-2">Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
