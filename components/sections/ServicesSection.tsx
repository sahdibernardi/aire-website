import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function ServicesSection() {
  return (
    <section className="py-20 px-6 bg-aire-light-blue relative overflow-hidden">
      {/* Background graphic */}
      <div className="absolute inset-0 opacity-20">
        <Image
          src="/grafismoLaranja.png"
          alt=""
          className="w-full h-full object-cover"
          width={1000}
          height={1000}
        />
      </div>
      
      {/* Content */}
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-aire-purple mb-4">
            NOSSOS SERVIÇOS:
            <br />
            ENTENDA COMO
            <br />
            PODEMOS TE AJUDAR
          </h2>
        </div>

        <div className="space-y-8 max-w-5xl mx-auto mb-40">
          {/* Fisioterapia Cardiopulmonar */}
          <Card className="bg-white/100 border-none shadow-lg overflow-hidden backdrop-blur-sm">
            <CardContent className="p-0 flex items-center">
              <div className="flex-1 p-8">
                <h3 className="text-2xl font-bold text-aire-slate mb-4 text-center">Fisioterapia Cardiopulmonar</h3>
                <p className="text-aire-slate leading-relaxed text-center mb-6">
                  Programa de <strong>exercícios físicos supervisionados para adultos e idosos</strong> com disfunções
                  cardiorrespiratórias agudas ou crônicas. Ideal para quem sofre com sintomas de cansaço, falta de ar
                  ou quer recuperar a capacidade física e respiratória com segurança.
                </p>
                <div className="text-center">
                  <Button className="bg-aire-beige hover:bg-aire-beige/80 text-aire-slate rounded-full px-8">
                    saiba mais
                  </Button>
                </div>
              </div>
              <div className="w-[241px] h-[291px] flex-shrink-0 relative">
                <Image
                  src="/escala.jpg"
                  alt="Fisioterapia Cardiopulmonar"
                  className="w-full h-full object-cover rounded-r-lg"
                  width={1000}
                  height={1000}
                />
                <div className="absolute inset-0 bg-white/20 rounded-r-lg"></div>
              </div>
            </CardContent>
          </Card>

          {/* Fisioterapia Pulmonar Pediátrica */}
          <Card className="bg-white/100 border-none shadow-lg overflow-hidden backdrop-blur-sm">
            <CardContent className="p-0 flex items-center">
              <div className="w-[241px] h-[291px] flex-shrink-0 relative">
                <Image
                  src="/bolinha.jpg"
                  alt="Fisioterapia Pulmonar Pediátrica"
                  className="w-full h-full object-cover rounded-l-lg"
                  width={1000}
                  height={1000}
                />
                <div className="absolute inset-0 bg-white/20 rounded-l-lg"></div>
              </div>
              <div className="flex-1 p-8">
                <h3 className="text-2xl font-bold text-aire-slate mb-4 text-center">
                  Fisioterapia Pulmonar Pediátrica
                </h3>
                <p className="text-aire-slate leading-relaxed text-center mb-6">
                  Com o objetivo de <strong>tratar e prevenir problemas respiratórios em bebês e crianças</strong>, a
                  AIRE utiliza técnicas modernas e seguras para melhorar a função pulmonar, facilitar a eliminação de
                  secreções e aliviar a dificuldade respiratória.
                </p>
                <div className="text-center">
                  <Button className="bg-aire-beige hover:bg-aire-beige/80 text-aire-slate rounded-full px-8">
                    saiba mais
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Fisioterapia em Oncologia */}
          <Card className="bg-white/100 border-none shadow-lg overflow-hidden backdrop-blur-sm">
            <CardContent className="p-0 flex items-center">
              <div className="flex-1 p-8">
                <h3 className="text-2xl font-bold text-aire-slate mb-4 text-center">Fisioterapia em Oncologia</h3>
                <p className="text-aire-slate leading-relaxed text-center mb-6">
                  Suporte essencial no cuidado do paciente com câncer, atuando de forma integrada para{" "}
                  <strong>minimizar os efeitos colaterais dos tratamentos</strong>, fortalecer a musculatura
                  respiratória e periférica, prevenir edemas, aliviar dores, reduzir a fadiga oncológica e evitar
                  complicações cardiopulmonares durante todas as fases do tratamento.
                </p>
                <div className="text-center">
                  <Button className="bg-aire-beige hover:bg-aire-beige/80 text-aire-slate rounded-full px-8">
                    saiba mais
                  </Button>
                </div>
              </div>
              <div className="w-[241px] h-[291px] flex-shrink-0 relative">
                <Image
                  src="/cancer.jpg"
                  alt="Fisioterapia em Oncologia"
                  className="w-full h-full object-cover rounded-r-lg"
                  width={1000}
                  height={1000}
                />
                <div className="absolute inset-0 bg-white/20 rounded-r-lg"></div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <Image
          src="/grafismoLaranja.png"
          alt=""
          className="w-full h-full object-cover absolute bottom-0 left-0"
          width={1000}
          height={1000}
        />
    </section>
  );
}
