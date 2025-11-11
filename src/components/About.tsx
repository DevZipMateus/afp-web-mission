import { Target, Eye, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const values = [
    { icon: Heart, title: "Fé e propósito", description: "Acreditamos que toda conquista vem de Deus e que cada desafio tem um motivo para nos fortalecer." },
    { icon: Target, title: "Respeito e união", description: "Valorizamos as pessoas, as histórias e as parcerias que caminham conosco." },
    { icon: Eye, title: "Comprometimento", description: "Cumprimos o que prometemos, com ética e transparência." },
  ];

  return (
    <section id="sobre" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Sobre nós
          </h2>
          <p className="text-xl text-muted-foreground">
            A AFP Soluções Industriais nasceu em Cuiabá, em 2025, movida por coragem, fé e o desejo de recomeçar. O nome AFP carrega uma homenagem à família e ao legado deixado pelo avô de Alexandre, Sr. Dilermano Miranda Penteado, que iniciou o caminho no setor industrial.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <Card className="border-none shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Missão</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Prosperar com nossos colaboradores e clientes, oferecendo soluções industriais com qualidade, respeito e comprometimento. Transformar vidas por meio do trabalho honesto, construindo relações sólidas, humanas e duradouras.
              </p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Eye className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Visão</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Ser reconhecida como uma empresa de referência em soluções industriais no Centro-Oeste, destacando-se pela excelência nos resultados, pelo cuidado com as pessoas e pela fé que move cada conquista.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-center text-foreground mb-10">
            Nossos valores
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-lg bg-background hover:shadow-lg transition-shadow"
              >
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 mb-4">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h4 className="text-xl font-bold text-foreground mb-3">
                  {value.title}
                </h4>
                <p className="text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
