import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo-afp.png";
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const navItems = [{
    label: "Início",
    href: "/#hero"
  }, {
    label: "Sobre",
    href: "/#sobre"
  }, {
    label: "Serviços",
    href: "/#servicos"
  }, {
    label: "Planos",
    href: "/#planos"
  }, {
    label: "Vitrine",
    href: "/vitrine"
  }, {
    label: "Contato",
    href: "/#contato"
  }];
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/95 backdrop-blur-md shadow-md" : "bg-background/80 backdrop-blur-sm"}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3">
            <img src={logo} alt="AFP Soluções Industriais" className="h-32 sm:h-36 md:h-40 lg:h-48 w-auto" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map(item => <a key={item.href} href={item.href} className="text-foreground/80 hover:text-primary font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full">
                {item.label}
              </a>)}
            <Button asChild variant="default" size="lg" className="ml-4">
              <a href="https://wa.me/5565999098353" target="_blank" rel="noopener noreferrer">
                Solicitar orçamento
              </a>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle menu">
            {isMobileMenuOpen ? <X className="h-6 w-6 text-foreground" /> : <Menu className="h-6 w-6 text-foreground" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && <nav className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-4">
              {navItems.map(item => <a key={item.href} href={item.href} className="text-foreground/80 hover:text-primary font-medium transition-colors py-2" onClick={() => setIsMobileMenuOpen(false)}>
                  {item.label}
                </a>)}
              <Button asChild variant="default" size="lg" className="w-full">
                <a href="https://wa.me/5565999098353" target="_blank" rel="noopener noreferrer">
                  Solicitar orçamento
                </a>
              </Button>
            </div>
          </nav>}
      </div>
    </header>;
};
export default Header;