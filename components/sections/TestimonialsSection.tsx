import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FaWhatsapp } from "react-icons/fa";

export default function TestimonialsSection() {
  return (
    <section className="py-20 px-2 sm:px-4 lg:px-6 bg-aire-pink relative overflow-hidden">
      <div className="absolute inset-0">
        <svg className="w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="none">
          <path d="M0,400 Q300,200 600,300 T1200,250 L1200,800 L0,800 Z" fill="var(--aire-pink)" opacity="0.1" />
          <path d="M0,500 Q400,300 800,400 T1200,350 L1200,800 L0,800 Z" fill="var(--aire-purple)" opacity="0.05" />
        </svg>
      </div>

      <div className="container mx-auto relative z-10 max-w-full">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className=" text-aire-white mb-4 text-lg sm:text-xl lg:text-4xl">
            COMO AJUDAMOS
            <br />
            NOSSOS PACIENTES?
          </h2>
        </div>

        <div className="flex flex-col items-center space-y-4 sm:space-y-6">
          <Card className="bg-white border-none shadow-lg w-full max-w-[1000px]">
            <CardContent className="p-4 sm:p-6 lg:p-8 lg:px-12">
              <p className="text-aire-purple text-center font-bold leading-relaxed text-sm sm:text-base lg:text-lg">
                &ldquo;Tenho 87 anos e no ano passado fui diagnosticada com fibrose pulmonar idiopática. Foi um período muito dificil pra mim, porque eu tinha muito cansaço, quase não conseguia falar e tinha dificuldade para dormir porque a tosse era constante. Passei então a fazer o trabalho com a AIRE. Fiquei muito feliz, porque de lá para cá eu melhorei consideravelmente. Hoje eu consigo conversar, meu sono melhorou e o cansaço diminuiu. Eu fico feliz com a AIRE pelos cuidados, pelo carinho e pelo profissionalismo da Dra. Camila e equipe!&rdquo;
              </p>
              <p className="text-aire-purple text-center leading-relaxed text-xs sm:text-sm lg:text-md mt-3 sm:mt-5">
                —   Maria Luiza Mattos | Fisioterapia Cardiopulmonar
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white border-none shadow-lg w-full max-w-[1000px]">
            <CardContent className="p-4 sm:p-6 lg:p-8 lg:px-12">
              <p className="text-aire-purple text-center font-bold leading-relaxed text-sm sm:text-base lg:text-lg">
                &ldquo;Fui acometida por uma embolia pulmonar aos 86 anos, em 2025. Fiz contato com a AIRE para fisioterapia pulmonar. Foi um início difícil, pois também sou asmática, mas após três meses, consegui atingir um resultado respiratório excelente em um dos exercícios e dei um pulo de alegria! Há pouco fiz exames que mostraram um pulmão limpo. Cuide de sua saúde e viva mais!&rdquo;
              </p>
              <p className="text-aire-purple text-center leading-relaxed text-xs sm:text-sm lg:text-md mt-3 sm:mt-5">
                —   Inge Warken   |   Fisioterapia Cardiopulmonar
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white border-none shadow-lg w-full max-w-[1000px]">
            <CardContent className="p-4 sm:p-6 lg:p-8 lg:px-12">
              <p className="text-aire-purple text-center font-bold leading-relaxed text-sm sm:text-base lg:text-lg">
                &ldquo;Só tenho a agradecer à equipe da AIRE pelo cuidado com o meu bebê durante a bronquiolite. As sessões de fisioterapia respiratória fizeram muita diferença na recuperação dele e o acompanhamento fora dos atendimentos ajudaram a nos tranquilizar. Super recomendo esse trabalho incrível!&rdquo;
              </p>
              <p className="text-aire-purple text-center leading-relaxed text-xs sm:text-sm lg:text-md mt-3 sm:mt-5">
                —   Gabriela Duarte   |   Fisioterapia Pulmonar Pediátrica
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-8 sm:mt-12 flex justify-center">
          <Button className="text-sm sm:text-base lg:text-lg bg-aire-purple hover:bg-aire-blue text-white px-4 sm:px-6 py-3 flex items-center space-x-2 shadow-lg">
            <FaWhatsapp className="h-4 w-4 sm:h-5 sm:w-5" />
            <span>Agende sua consulta avaliativa personalizada</span>
          </Button>
        </div>
      </div>
    </section>
  );
}
