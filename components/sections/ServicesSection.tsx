"use client";
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

// Componente individual do card expansível
function ServiceCard({ 
  title, 
  description, 
  image, 
  imageAlt, 
  imagePosition = 'right',
  expandedContent 
}: {
  title: string;
  description: React.ReactNode;
  image: string;
  imageAlt: string;
  imagePosition?: 'left' | 'right';
  expandedContent?: React.ReactNode;
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Card className="bg-white/100 border-none shadow-lg overflow-hidden backdrop-blur-sm transition-all duration-300">
      <CardContent className="p-0">
        {!isExpanded && (
          <div className="flex items-center">
            {imagePosition === 'left' && (
              <div className="w-[241px] h-[291px] flex-shrink-0 relative">
                <Image
                  src={image}
                  alt={imageAlt}
                  className="w-full h-full object-cover rounded-l-lg"
                  width={1000}
                  height={1000}
                />
                <div className="absolute inset-0 bg-white/20 rounded-l-lg"></div>
              </div>
            )}

            <div className="flex-1 p-8">
              <h3 className="text-2xl font-bold text-aire-slate mb-4 text-center">{title}</h3>
              <p className="text-aire-slate leading-relaxed text-center mb-6">
                {description}
              </p>
              <div className="text-center">
                <Button 
                  onClick={toggleExpanded}
                  className="bg-aire-beige hover:bg-aire-beige/80 text-aire-slate rounded-full px-8"
                >
                  saiba mais
                </Button>
              </div>
            </div>

            {imagePosition === 'right' && (
              <div className="w-[241px] h-[291px] flex-shrink-0 relative">
                <Image
                  src={image}
                  alt={imageAlt}
                  className="w-full h-full object-cover rounded-r-lg"
                  width={1000}
                  height={1000}
                />
                <div className="absolute inset-0 bg-white/20 rounded-r-lg"></div>
              </div>
            )}
          </div>
        )}

        {isExpanded && (
          <div>
            <div className="w-full h-[300px] relative">
              <Image
                src={image}
                alt={imageAlt}
                className="w-full h-full object-cover object-[50%_35%]"
                width={1000}
                height={1000}
              />
              <div className="absolute inset-0 bg-aire-white/80"></div>
              
              {/* Texto sobreposto à imagem */}
              <div className="absolute inset-0 flex flex-col justify-center items-center p-8 text-center">
                <h3 className="text-3xl font-bold text-aire-slate mb-4 drop-shadow-lg">{title}</h3>
                <p className="text-aire-slate leading-relaxed mb-6 drop-shadow-lg max-w-2xl">
                  {description}
                </p>
              </div>
            </div>

            <div className="p-8">
              {expandedContent}

              <div className="text-center mt-6">
                <Button 
                  onClick={toggleExpanded}
                  className="bg-aire-beige hover:bg-aire-beige/80 text-aire-slate rounded-full px-8 flex items-center gap-2 mx-auto"
                >
                  fechar <FaChevronUp size={16} />
                </Button>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export default function ServicesSection() {
  return (
    <section className="py-20 px-6 bg-aire-light-blue relative overflow-hidden">
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
          <h2 className="text-2xl md:text-3xl lg:text-4xl text-aire-purple mb-4">
            NOSSOS SERVIÇOS:
            <br />
            ENTENDA COMO
            <br />
            PODEMOS TE AJUDAR
          </h2>
        </div>

        <div className="space-y-8 max-w-5xl mx-auto mb-40">
          {/* Fisioterapia Cardiopulmonar */}
          <ServiceCard
            title="Fisioterapia Cardiopulmonar"
            description={
              <>
                Programa de <strong>exercícios físicos supervisionados para adultos e idosos</strong> com disfunções
                cardiorrespiratórias agudas ou crônicas. Ideal para quem sofre com sintomas de cansaço, falta de ar
                ou quer recuperar a capacidade física e respiratória com segurança.
              </>
            }
            image="/escala.jpg"
            imageAlt="Fisioterapia Cardiopulmonar"
            imagePosition="right"
            expandedContent={
              <>
              <div className="space-y-6">
                <p className="text-aire-slate leading-relaxed">
                  Nosso serviço de fisioterapia cardiopulmonar abrange programas de reabilitação
                  cardíaca, reabilitação pulmonar e fisioterapia respiratória, reabilitação autonômica,
                  tratamento para distúrbios do sono e exercícios físicos funcionais monitorizados para
                  idosos.
                </p>
                <p className="text-aire-slate font-semibold">
                  Clique e descubra qual modalidade é mais adequada para o seu caso:
                </p>
              </div>
              <div className="space-y-3 mt-6">
              <details className="border-2  border-aire-slate rounded-lg">
                <summary className="p-4 cursor-pointer rounded-lg font-medium text-aire-slate flex justify-between items-center">
                  Reabilitação cardíaca
                  <FaChevronDown size={16} />
                </summary>
                <div className="p-4 border-t">
                  <p className="text-aire-slate mb-3">
                    A reabilitação cardíaca é <strong>indicada para pacientes que sofreram problemas
                    cardíacos ou passaram por procedimentos cardíacos</strong>, como infarto do miocárdio
                    (ataque cardíaco), insuficiência cardíaca, cirurgia de revascularização do
                    miocárdio, colocação de stents ou angioplastia.
                  </p>
                  <p className="text-aire-slate mb-3">
                    Também é útil para quem tem angina (dor no peito por falta de oxigênio no
                    coração), cardiopatias congênitas, já passou por transplante cardíaco, ou
                    apresenta arritmias como a fibrilação atrial, quando recomendado.
                  </p>
                  <p className="text-aire-slate">
                    Além disso, pessoas com fatores de risco cardiovascular elevados, como
                    hipertensão, diabetes, obesidade e sedentarismo, podem se beneficiar da
                    reabilitação como forma de prevenir novos problemas cardíacos.
                  </p>
                </div>
              </details>

              <details className="border-2 border-aire-slate rounded-lg">
                <summary className="p-4 cursor-pointer rounded-lg font-medium text-aire-slate flex justify-between items-center">
                  Reabilitação pulmonar e fisioterapia respiratória
                  <FaChevronDown size={16} />
                </summary>
                <div className="p-4 border-t">
                  <p className="text-aire-slate mb-3">
                    Indicadas para pacientes com <strong>doenças que afetam a função pulmonar e dificultam a respiração</strong>. Isso inclui pessoas com Doença Pulmonar Obstrutiva Crônica (DPOC), como enfisema e bronquite crônica, asma grave ou de difícil controle, fibrose pulmonar e outras doenças intersticiais pulmonares, bronquiectasias e pacientes com câncer de pulmão. 
                  </p>
                  <p className="text-aire-slate">
                    Também se aplica a quem passou por cirurgias torácicas ou abdominais, pacientes em ventilação mecânica ou que acabaram de ser extubados, e aqueles com doenças neuromusculares que afetam a musculatura respiratória (como ELA e distrofias musculares).
                  </p>
                </div>
              </details>

              <details className="border-2 border-aire-slate rounded-lg">
                <summary className="p-4 cursor-pointer rounded-lg font-medium text-aire-slate flex justify-between items-center">
                  Reabilitação autonômica
                  <FaChevronDown size={16} />
                </summary>
                <div className="p-4 border-t">
                  <p className="text-aire-slate mb-3">
                    Para indivíduos com <strong>síncopes (desmaios)</strong> — especialmente causadas por disfunções autonômicas, como a <strong>síncope vasovagal</strong> ou <strong>hipotensão ortostática</strong> — com o objetivo de melhorar a regulação da pressão arterial e da frequência cardíaca, aumentando a tolerância ortostática (ficar em pé por longos períodos) e prevenindo novos episódios. 
                  </p>
                </div>
              </details>

              <details className="border-2 border-aire-slate rounded-lg">
                <summary className="p-4 cursor-pointer rounded-lg font-medium text-aire-slate flex justify-between items-center">
                  Tratamento para distúrbios respiratórios do sono
                  <FaChevronDown size={16} />
                </summary>
                <div className="p-4 border-t">
                  <p className="text-aire-slate mb-3">
                    Para indivíduos com <strong>alterações dos padrões de respiração que ocorrem durante o sono</strong>, resultando em pausas respiratórias, roncos, queda na oxigenação e fragmentação do sono. Os métodos mais eficazes para o tratamento de Distúrbios Respiratórios do Sono, como a Apneia do Sono, incluem o uso de dispositivos de pressão positiva.
                  </p>
                  <p className="text-aire-slate">
                    Aqui na AIRE, oferecemos avaliação funcional completa e tratamento especializado para os distúrbios do sono, com acompanhamento durante o processo de adaptação e titulação do CPAP e Binível (BiPAP), garantindo o melhor ajuste e adesão ao tratamento.
                  </p>
                </div>
              </details>

              <details className="border-2 border-aire-slate rounded-lg">
                <summary className="p-4 cursor-pointer rounded-lg font-medium text-aire-slate flex justify-between items-center">
                  Programa de exercícios físicos funcionais monitorizados para idosos
                  <FaChevronDown size={16} />
                </summary>
                <div className="p-4 border-t">
                  <p className="text-aire-slate mb-3">
                    Indicado para aqueles que desejam manter ou recuperar a autonomia, prevenir quedas e melhorar sua qualidade de vida de forma segura e eficaz. 
                  </p>
                  <p className="text-aire-slate">
                    Beneficia especialmente <strong>idosos com perda de força muscular</strong>, dificuldades de equilíbrio, histórico de quedas, doenças crônicas como hipertensão ou diabetes, mobilidade reduzida ou em recuperação após hospitalizações. 
                  </p>
                </div>
              </details>
            </div>
              </>
            }
          />

          {/* Fisioterapia Pulmonar Pediátrica */}
          <ServiceCard
            title="Fisioterapia Pulmonar Pediátrica"
            description={
              <>
                Com o objetivo de <strong>tratar e prevenir problemas respiratórios em bebês e crianças</strong>, a
                AIRE utiliza técnicas modernas e seguras para melhorar a função pulmonar, facilitar a eliminação de
                secreções e aliviar a dificuldade respiratória.
              </>
            }
            image="/bolinha.jpg"
            imageAlt="Fisioterapia Pulmonar Pediátrica"
            imagePosition="left"
            expandedContent={
              <>
              <div className="space-y-6">
                <p className="text-aire-slate leading-relaxed">
                  Nossa abordagem pediátrica é especializada no atendimento de bebês e crianças,
                  utilizando técnicas lúdicas e apropriadas para cada faixa etária. Trabalhamos
                  com conditions como bronquiolite, pneumonia, asma, fibrose cística e outras
                  disfunções respiratórias infantis.
                </p>
                <p className="text-aire-slate leading-relaxed">
                  O tratamento é realizado de forma gentil e adaptada ao desenvolvimento da criança,
                  sempre buscando tornar a experiência o mais confortável possível para pacientes
                  e familiares.
                </p>
              </div>
            </>
            }
          />

          {/* Fisioterapia em Oncologia */}
          <ServiceCard
            title="Fisioterapia em Oncologia"
            description={
              <>
                Suporte essencial no cuidado do paciente com câncer, atuando de forma integrada para{" "}
                <strong>minimizar os efeitos colaterais dos tratamentos</strong>, fortalecer a musculatura
                respiratória e periférica, prevenir edemas, aliviar dores, reduzir a fadiga oncológica e evitar
                complicações cardiopulmonares durante todas as fases do tratamento.
              </>
            }
            image="/cancer.jpg"
            imageAlt="Fisioterapia em Oncologia"
            imagePosition="right"
            expandedContent={
              <div className="space-y-6">
                <p className="text-aire-slate leading-relaxed">
                  A fisioterapia oncológica atua em todas as fases do tratamento do câncer:
                  pré-operatório, pós-operatório, durante quimioterapia e radioterapia, e no
                  acompanhamento de longo prazo.
                </p>
                <p className="text-aire-slate leading-relaxed">
                  Nossos profissionais são especializados em técnicas específicas para cada
                  tipo de câncer e tratamento, sempre trabalhando em colaboração com a equipe
                  médica multidisciplinar para proporcionar o melhor cuidado possível.
                </p>
                <p className="text-aire-slate leading-relaxed">
                  Os benefícios incluem melhora na qualidade de vida, redução da fadiga,
                  prevenção de complicações respiratórias e circulatórias, e manutenção
                  da capacidade funcional durante e após o tratamento.
                </p>
              </div>
            }
          />
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
