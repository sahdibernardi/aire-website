"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FaChevronUp, FaChevronDown, FaWhatsapp } from "react-icons/fa";

interface ProcessStep {
  id: number;
  title: string;
  description: string;
  isExpanded: boolean;
}

export default function ProcessSection() {
  const [steps, setSteps] = useState<ProcessStep[]>([
    {
      id: 1,
      title: "Agendamento",
      description: "Entre em contato conosco para agendar sua primeira consulta. Nossa equipe irá verificar a disponibilidade e confirmar o melhor horário para você.",
      isExpanded: false
    },
    {
      id: 2,
      title: "Consulta Avaliativa",
      description: "Realizamos uma avaliação completa para entender suas necessidades específicas. Nossos especialistas farão um diagnóstico detalhado do seu quadro clínico.",
      isExpanded: false
    },
    {
      id: 3,
      title: "Plano de Tratamento",
      description: "Desenvolvemos um plano personalizado para sua recuperação, utilizando as melhores técnicas e equipamentos para garantir resultados eficazes.",
      isExpanded: false
    }
  ]);

  const toggleStep = (id: number) => {
    setSteps(steps.map(step => 
      step.id === id 
        ? { ...step, isExpanded: !step.isExpanded }
        : { ...step, isExpanded: false }
    ));
  };

  return (
    <section className="py-20 px-6 bg-aire-white relative overflow-hidden">
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
        {/* Timeline com imagem SVG */}
        <div className="relative min-h-[800px]">
          {/* Imagem da linha ondulada - mesmo tamanho da seção */}
          <div className="absolute left-0 mt-[-100px] h-full">
            <Image
              src="/grafismoLinha.svg"
              alt="Linha da timeline"
              width={450}
              height={450}
              className="object-cover object-center"
            />
          </div>
          
          {/* Elementos do processo alinhados com as bolinhas */}
          <div className="space-y-16">
            {steps.map((step, index) => {
              const positions = [
                { left: 'left-1/4', top: 'top-55' }, // Primeira bolinha
                { left: 'left-1/4', top: 'top-107' }, // Segunda bolinha  
                { left: 'left-1/4', top: 'bottom-27' }  // Terceira bolinha
              ];
              
              return (
                <div key={step.id} className={`absolute ${positions[index].left} ${positions[index].top} transform -translate-x-1/2 -translate-y-1/2`}>
                  {/* Botão do processo */}
                  <button
                    onClick={() => toggleStep(step.id)}
                    className="bg-white/90 backdrop-blur-sm border border-aire-pink/30 text-aire-purple px-6 py-4 rounded-xl font-semibold text-left flex items-center justify-between hover:bg-white hover:shadow-lg transition-all duration-200 shadow-sm min-w-[280px] -ml-40"
                  >
                    <span>{step.title}</span>
                    {step.isExpanded ? (
                      <FaChevronUp className="text-gray-500 text-sm" />
                    ) : (
                      <FaChevronDown className="text-gray-500 text-sm" />
                    )}
                  </button>
                  
                  {/* Conteúdo expandido */}
                  {step.isExpanded && (
                    <div className="mt-4 p-6 bg-white/95 backdrop-blur-sm rounded-xl shadow-lg border border-aire-pink/20 min-w-[320px] -ml-40">
                      <p className="text-aire-slate leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Conteúdo principal posicionado à direita */}
        <div className="absolute right-0 top-20 w-1/2 space-y-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-aire-purple leading-tight">
            CONFIRA OS DETALHES DE COMO SERÁ O SEU ATENDIMENTO
          </h2>
          
          <div className="space-y-6">
            <p className="text-aire-purple leading-relaxed text-lg">
              Atendemos adultos, idosos e crianças em Florianópolis e região, unindo tecnologia de ponta e uma equipe especializada para levar atendimento de excelência até a sua casa.
            </p>
            
            <p className="text-aire-purple leading-relaxed text-lg">
              Escolher o <strong>atendimento domiciliar</strong> da AIRE é optar por: conforto e segurança, atendimento personalizado, economia de tempo e maior adesão ao tratamento, conhecimento técnico e científico, cuidado próximo e humanizado, equipamentos modernos e resultados visíveis nas capacidades física e respiratória.
            </p>
            <p className="text-aire-purple leading-relaxed text-lg">
              Agende sua consulta avaliativa personalizada e dê o primeiro passo para uma reabilitação com mais qualidade, comodidade e resultados.
            </p>
          </div>
          
          <div className="pt-4">
            <Button className="bg-aire-purple hover:bg-aire-purple/90 text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center space-x-3 shadow-lg hover:shadow-xl transition-all duration-200">
              <FaWhatsapp className="text-xl" />
              <span>Clique aqui e agende agora</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
