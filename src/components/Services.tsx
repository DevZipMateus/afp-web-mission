import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Hammer, Wrench, Building2, Package } from "lucide-react";
import weldingImage from "@/assets/service-welding.jpg";
import structuresImage from "@/assets/service-structures.jpg";
import maintenanceImage from "@/assets/service-maintenance.jpg";

const Services = () => {
  const services = [
    {
      icon: Hammer,
      title: "Soldagem profissional",
      description: "Soldagem MIG, TIG e eletrodo revestido com profissionais certificados e equipamentos de última geração.",
      image: weldingImage,
    },
    {
      icon: Building2,
      title: "Estruturas metálicas",
      description: "Fabricação e montagem de estruturas metálicas leves e pesadas, mezaninos, plataformas e escadas.",
      image: structuresImage,
    },
    {
      icon: Wrench,
      title: "Manutenção industrial",
      description: "Manutenção preventiva e corretiva de estruturas, instalações e equipamentos industriais.",
      image: maintenanceImage,
    },
  ];

  const products = [
    { icon: Building2, name: "Estruturas metálicas leves e pesadas" },
    { icon: Package, name: "Portões, gradis e corrimãos industriais" },
    { icon: Building2, name: "Mezaninos, plataformas e escadas" },
    { icon: Package, name: "Suportes e bases metálicas sob medida" },
    { icon: Building2, name: "Moegas e elevadores de carga" },
    { icon: Package, name: "Componentes e reforços estruturais" },
  ];

  return (
    <section id="servicos" className="py-12 sm:py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6">
            Nossos serviços
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
            Soluções completas em metalurgia industrial para empresas que exigem qualidade, segurança e durabilidade
          </p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 md:mb-20">
          {services.map((service, index) => (
            <Card
              key={index}
              className="border-none shadow-lg hover:shadow-xl transition-shadow overflow-hidden group"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-5xl mx-auto bg-secondary rounded-2xl p-6 sm:p-8 md:p-12">
          <h3 className="text-2xl sm:text-3xl font-bold text-center text-foreground mb-8 sm:mb-10">
            Produtos fabricados
          </h3>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {products.map((product, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-4 bg-background rounded-lg hover:shadow-md transition-shadow"
              >
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <product.icon className="h-5 w-5 text-primary" />
                </div>
                <span className="text-foreground font-medium">{product.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
