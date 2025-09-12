import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";

export default function HomeCareSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 px-2 sm:px-4 lg:px-6 xl:px-40 bg-aire-white">
      <div className="container mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-[1000px] items-center">
        <div className="relative order-2 lg:order-1">
          <Image
            src="/monitor.jpg"
            alt="Fisioterapia Cardiopulmonar com monitoramento"
            className="w-full max-w-[400px] h-auto rounded-3xl shadow-lg mx-auto"
            width={500}
            height={500}
          />
        </div>
        <div className="text-aire-slate order-1 lg:order-2">
          <h2 className="mb-4 sm:mb-6 text-lg sm:text-xl lg:text-4xl">ATENDIMENTO EM AMBIENTE DOMICILIAR</h2>
          <p className="text-sm sm:text-md mb-4 sm:mb-6 leading-relaxed">
            Atendemos <strong>adultos, idosos e crianças</strong> em Florianópolis e região, unindo tecnologia de ponta e uma equipe especializada para levar atendimento de excelência até a sua casa.
          </p>
          <p className="text-sm sm:text-md mb-4 sm:mb-6 leading-relaxed">
            Escolher o atendimento domiciliar da AIRE é optar por: conforto e segurança, atendimento personalizado, economia de tempo e maior adesão ao tratamento, conhecimento técnico e científico, cuidado próximo e humanizado, equipamentos modernos e resultados visíveis nas capacidades física e respiratória.
          </p>
          <p className="text-sm sm:text-md mb-4 sm:mb-6 leading-relaxed">
            Agende sua consulta avaliativa personalizada e dê o primeiro passo para uma reabilitação com mais qualidade, comodidade e resultados.
          </p>
          <div className="flex justify-center lg:justify-start">
            <Button className="text-sm sm:text-base lg:text-xl bg-aire-slate hover:bg-aire-purple text-white px-4 sm:px-6 py-3 flex items-center space-x-2 shadow-lg">
              <FaWhatsapp className="h-4 w-4 sm:h-5 sm:w-5" />
              <span>Clique aqui e agende agora</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
