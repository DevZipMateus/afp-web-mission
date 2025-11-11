import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import heroImage from "@/assets/hero-industrial.jpg";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Indústria metalúrgica AFP"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/95 via-primary-dark/85 to-primary/70"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 animate-fade-in">
            AFP Soluções Industriais
          </h1>
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/90 mb-6 sm:mb-8 font-light animate-fade-in leading-relaxed" style={{ animationDelay: "0.2s" }}>
            Especialistas em estruturas metálicas, soldagem profissional e manutenção industrial em Cuiabá-MT
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/80 mb-8 sm:mb-12 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            Onde o trabalho se torna missão
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <Button
              asChild
              size="lg"
              className="text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 bg-white text-primary hover:bg-white/90 hover:scale-105 transition-transform"
            >
              <a href="https://wa.me/5565999098353" target="_blank" rel="noopener noreferrer">
                <Phone className="mr-2 h-4 sm:h-5 w-4 sm:w-5" />
                Solicitar orçamento
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 bg-white/10 text-white border-white/60 hover:bg-white hover:text-primary transition-all"
            >
              <a href="#servicos">
                Nossos serviços
                <ArrowRight className="ml-2 h-4 sm:h-5 w-4 sm:w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
