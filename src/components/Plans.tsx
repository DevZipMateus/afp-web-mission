import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const Plans = () => {
  const plans = [
    {
      title: "Contrato por demanda",
      description: "Ideal para projetos específicos e pontuais",
      features: [
        "Serviços pontuais com prazos definidos",
        "Orçamento fechado antes do início",
        "Flexibilidade para projetos únicos",
        "Sem compromisso de continuidade",
      ],
    },
    {
      title: "Plano de manutenção",
      description: "Prevenção e cuidado contínuo",
      features: [
        "Acompanhamento periódico de estruturas",
        "Inspeções preventivas programadas",
        "Identificação precoce de problemas",
        "Economia com manutenção preventiva",
      ],
      highlighted: true,
    },
    {
      title: "Parceria contínua",
      description: "Suporte técnico completo",
      features: [
        "Contrato mensal com suporte dedicado",
        "Prioridade no atendimento",
        "Melhores condições comerciais",
        "Manutenção preventiva e corretiva",
      ],
    },
  ];

  return (
    <section id="planos" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Planos de atendimento
          </h2>
          <p className="text-xl text-muted-foreground">
            Escolha a melhor opção para as necessidades da sua empresa
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`border-none shadow-lg hover:shadow-xl transition-all ${
                plan.highlighted
                  ? "ring-2 ring-primary scale-105 bg-primary/5"
                  : "bg-background"
              }`}
            >
              <CardHeader className="text-center pb-8">
                {plan.highlighted && (
                  <div className="inline-block px-3 py-1 bg-primary text-primary-foreground text-sm font-semibold rounded-full mb-4">
                    Mais popular
                  </div>
                )}
                <CardTitle className="text-2xl mb-2">{plan.title}</CardTitle>
                <p className="text-muted-foreground">{plan.description}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  className="w-full"
                  variant={plan.highlighted ? "default" : "outline"}
                  size="lg"
                >
                  <a href="https://wa.me/5565999098353" target="_blank" rel="noopener noreferrer">
                    Solicitar orçamento
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Plans;
