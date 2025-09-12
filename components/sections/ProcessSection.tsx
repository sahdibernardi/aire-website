"use client";

import { useState } from "react";
import Image from "next/image";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

export default function ProcessSection() {
  const [expandedStep, setExpandedStep] = useState<number | null>(null);

  const toggleStep = (stepId: number) => {
    setExpandedStep(expandedStep === stepId ? null : stepId);
  };

  return (
    <section id="processSection" className="py-20 px-6 bg-aire-white relative overflow-hidden">
      {/* Grafismo de fundo */}
      <div className="absolute left-0 top-0 w-full h-full">
        <Image
          src="/grafismoRosaVertical.png"
          alt="Grafismo"
          fill
          className="object-cover object-left"
        />
      </div>
      
        <div className="container mx-auto relative z-10">
          {/* Título principal */}
          <h2 className="text-2xl max-w-[500px] mx-auto lg:text-4xl text-aire-purple leading-tight mb-16 text-center">
            CONFIRA OS DETALHES DE COMO SERÁ O SEU ATENDIMENTO
          </h2>
          
          {/* Versão Desktop - com SVG */}
          <div className="hidden lg:block">
            <div className="grid grid-cols-1 gap-12 items-center">
              {/* Processo */}
              <div className="relative min-h-[1000px]">
                {/* Linha conectora curva SVG */}
                <svg 
                  className="absolute inset-0 w-full h-full pointer-events-none" 
                  viewBox="0 0 757 1008"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <path
                    d="M16 27.4274C408.266 -54.0137 753 83.212 753 340.824C753 598.437 190.118 662.624 234.148 1007"
                    stroke="#77355B"
                    strokeOpacity="0.2"
                    strokeWidth="7"
                    fill="none"
                  />
                  <circle cx="15.5" cy="30.5" r="15.5" fill="#77355B"/>
                  <circle cx="628.5" cy="534.5" r="15.5" fill="#77355B"/>
                  <circle cx="233.5" cy="991.5" r="15.5" fill="#77355B"/>
                </svg>
                
                {/* Etapa 1 - Agendamento (Top-left) */}
                <div className="absolute" style={{ left: '12%', top: '8%', width: '320px' }}>
                  <div className="bg-white/90 backdrop-blur-sm border border-aire-pink/30 rounded-xl shadow-sm hover:shadow-lg transition-all duration-200">
                    <button
                      onClick={() => toggleStep(1)}
                      className="w-full p-4 text-left flex items-center justify-between hover:bg-white/50 rounded-xl transition-colors duration-200"
                    >
                      <h3 className="text-lg font-bold text-aire-purple">Agendamento</h3>
                      {expandedStep === 1 ? (
                        <FaChevronUp className="text-aire-purple text-sm" />
                      ) : (
                        <FaChevronDown className="text-aire-purple text-sm" />
                      )}
                    </button>
                    
                    {expandedStep === 1 && (
                      <div className="px-4 pb-4">
                        <p className="text-aire-slate leading-relaxed text-sm">
                          Na AIRE, o agendamento é simples, rápido e totalmente online. Por meio da nossa secretária virtual, você escolhe a modalidade de atendimento, informa suas preferências de dias e horários e compartilha brevemente sua necessidade. Nossa equipe analisa as informações e retorna em poucos minutos para confirmar os dados, esclarecer dúvidas e agendar sua consulta avaliativa com a Dra. Camila. Tudo isso com praticidade, agilidade e o cuidado que você merece – sem sair de casa.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
                
                {/* Etapa 2 - Consulta Avaliativa (Middle-right) */}
                <div className="absolute" style={{ right: '2%', top: '53%', width: '320px' }}>
                  <div className="bg-white/90 backdrop-blur-sm border border-aire-pink/30 rounded-xl shadow-sm hover:shadow-lg transition-all duration-200">
                    <button
                      onClick={() => toggleStep(2)}
                      className="w-full p-4 text-left flex items-center justify-between hover:bg-white/50 rounded-xl transition-colors duration-200"
                    >
                      <h3 className="text-lg font-bold text-aire-purple">Consulta Avaliativa</h3>
                      {expandedStep === 2 ? (
                        <FaChevronUp className="text-aire-purple text-sm" />
                      ) : (
                        <FaChevronDown className="text-aire-purple text-sm" />
                      )}
                    </button>
                    
                    {expandedStep === 2 && (
                      <div className="px-4 pb-4">
                        <p className="text-aire-slate leading-relaxed text-sm">
                          A consulta avaliativa com a Dra. Camila é o primeiro passo para um plano de cuidado realmente personalizado. Nessa etapa, ela realiza uma escuta atenta da sua história de saúde, analisa exames e aplica testes funcionais específicos de acordo com a sua condição (cardiovascular, pulmonar ou oncológica). A partir dessa avaliação detalhada, definimos os objetivos do tratamento e traçamos, junto com você, a melhor estratégia terapêutica – sempre com base científica, tecnologia atualizada e um olhar humanizado para sua realidade.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
                
              </div>
              
              {/* Etapa 3 - Plano de Tratamento (Abaixo do SVG) */}
              <div className="flex justify-center">
                <div className="w-80">
                  <div className="bg-white/90 backdrop-blur-sm border border-aire-pink/30 rounded-xl shadow-sm hover:shadow-lg transition-all duration-200">
                    <button
                      onClick={() => toggleStep(3)}
                      className="w-full p-4 text-left flex items-center justify-between hover:bg-white/50 rounded-xl transition-colors duration-200"
                    >
                      <h3 className="text-lg font-bold text-aire-purple">Plano de Tratamento</h3>
                      {expandedStep === 3 ? (
                        <FaChevronUp className="text-aire-purple text-sm" />
                      ) : (
                        <FaChevronDown className="text-aire-purple text-sm" />
                      )}
                    </button>
                    
                    {expandedStep === 3 && (
                      <div className="px-4 pb-4">
                        <p className="text-aire-slate leading-relaxed text-sm">
                          Após a consulta avaliativa, é elaborado um plano de tratamento individualizado, que define a frequência, intensidade e duração das sessões conforme seus objetivos terapêuticos, sua condição clínica e sua rotina. Em geral, as sessões ocorrem de 2 a 5 vezes por semana, com intensidade progressiva e adaptada à sua resposta ao tratamento. A duração do plano pode variar de algumas semanas a meses, sempre com reavaliações periódicas para garantir a eficácia e a segurança do processo.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Versão Mobile - Linha do tempo simples */}
          <div className="lg:hidden">
            <div className="space-y-6">
              {/* Linha do tempo vertical simples */}
              <div className="relative">
                {/* Linha vertical - só até a última bolinha */}
                <div className="absolute left-4 top-8 w-0.5 bg-aire-pink" style={{ height: 'calc(100% - 5rem)' }}></div>
                
                {/* Etapa 1 - Agendamento */}
                <div className="relative flex items-start mb-8">
                  <div className="flex-shrink-0 w-8 h-8 bg-aire-pink rounded-full flex items-center justify-center relative z-10">
                  </div>
                  <div className="ml-6 flex-1">
                    <div className="bg-white/90 backdrop-blur-sm border border-aire-pink/30 rounded-xl shadow-sm">
                      <button
                        onClick={() => toggleStep(1)}
                        className="w-full p-4 text-left flex items-center justify-between hover:bg-white/50 rounded-xl transition-colors duration-200"
                      >
                        <h3 className="text-lg font-bold text-aire-purple">Agendamento</h3>
                        {expandedStep === 1 ? (
                          <FaChevronUp className="text-aire-purple text-sm" />
                        ) : (
                          <FaChevronDown className="text-aire-purple text-sm" />
                        )}
                      </button>
                      
                      {expandedStep === 1 && (
                        <div className="px-4 pb-4">
                          <p className="text-aire-slate leading-relaxed text-sm">
                            Na AIRE, o agendamento é simples, rápido e totalmente online. Por meio da nossa secretária virtual, você escolhe a modalidade de atendimento, informa suas preferências de dias e horários e compartilha brevemente sua necessidade. Nossa equipe analisa as informações e retorna em poucos minutos para confirmar os dados, esclarecer dúvidas e agendar sua consulta avaliativa com a Dra. Camila. Tudo isso com praticidade, agilidade e o cuidado que você merece – sem sair de casa.
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Etapa 2 - Consulta Avaliativa */}
                <div className="relative flex items-start mb-8">
                  <div className="flex-shrink-0 w-8 h-8 bg-aire-pink rounded-full flex items-center justify-center relative z-10">
                  </div>
                  <div className="ml-6 flex-1">
                    <div className="bg-white/90 backdrop-blur-sm border border-aire-pink/30 rounded-xl shadow-sm">
                      <button
                        onClick={() => toggleStep(2)}
                        className="w-full p-4 text-left flex items-center justify-between hover:bg-white/50 rounded-xl transition-colors duration-200"
                      >
                        <h3 className="text-lg font-bold text-aire-purple">Consulta Avaliativa</h3>
                        {expandedStep === 2 ? (
                          <FaChevronUp className="text-aire-purple text-sm" />
                        ) : (
                          <FaChevronDown className="text-aire-purple text-sm" />
                        )}
                      </button>
                      
                      {expandedStep === 2 && (
                        <div className="px-4 pb-4">
                          <p className="text-aire-slate leading-relaxed text-sm">
                            A consulta avaliativa com a Dra. Camila é o primeiro passo para um plano de cuidado realmente personalizado. Nessa etapa, ela realiza uma escuta atenta da sua história de saúde, analisa exames e aplica testes funcionais específicos de acordo com a sua condição (cardiovascular, pulmonar ou oncológica). A partir dessa avaliação detalhada, definimos os objetivos do tratamento e traçamos, junto com você, a melhor estratégia terapêutica – sempre com base científica, tecnologia atualizada e um olhar humanizado para sua realidade.
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Etapa 3 - Plano de Tratamento */}
                <div className="relative flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-aire-pink rounded-full flex items-center justify-center relative z-10">
                  </div>
                  <div className="ml-6 flex-1">
                    <div className="bg-white/90 backdrop-blur-sm border border-aire-pink/30 rounded-xl shadow-sm">
                      <button
                        onClick={() => toggleStep(3)}
                        className="w-full p-4 text-left flex items-center justify-between hover:bg-white/50 rounded-xl transition-colors duration-200"
                      >
                        <h3 className="text-lg font-bold text-aire-purple">Plano de Tratamento</h3>
                        {expandedStep === 3 ? (
                          <FaChevronUp className="text-aire-purple text-sm" />
                        ) : (
                          <FaChevronDown className="text-aire-purple text-sm" />
                        )}
                      </button>
                      
                      {expandedStep === 3 && (
                        <div className="px-4 pb-4">
                          <p className="text-aire-slate leading-relaxed text-sm">
                            Após a consulta avaliativa, é elaborado um plano de tratamento individualizado, que define a frequência, intensidade e duração das sessões conforme seus objetivos terapêuticos, sua condição clínica e sua rotina. Em geral, as sessões ocorrem de 2 a 5 vezes por semana, com intensidade progressiva e adaptada à sua resposta ao tratamento. A duração do plano pode variar de algumas semanas a meses, sempre com reavaliações periódicas para garantir a eficácia e a segurança do processo.
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
}
