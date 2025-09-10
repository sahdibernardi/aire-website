import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";

export default function HomeCareSection() {
  return (
    <section className="py-20 px-40 bg-aire-white">
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 max-w-[1000px] tems-center">
        <div className="relative">
          <Image
            src="/monitor.jpg"
            alt="Fisioterapia Cardiopulmonar com monitoramento"
            className="w-[400px] h-auto rounded-3xl shadow-lg"
            width={500}
            height={500}
          />
        </div>
        <div className="text-aire-slate">
          <h2 className="font-bold mb-6">ATENDIMENTO EM AMBIENTE DOMICILIAR</h2>
          <p className="text-md mb-6 leading-relaxed">
            Atendemos <strong>adultos, idosos e crianças</strong> em Florianópolis e região, unindo tecnologia de ponta e uma equipe especializada para levar atendimento de excelência até a sua casa.
          </p>
          <p className="text-md mb-6 leading-relaxed">
            Escolher o atendimento domiciliar da AIRE é optar por: conforto e segurança, atendimento personalizado, economia de tempo e maior adesão ao tratamento, conhecimento técnico e científico, cuidado próximo e humanizado, equipamentos modernos e resultados visíveis nas capacidades física e respiratória.
          </p>
          <p className="text-md mb-6 leading-relaxed">
            Agende sua consulta avaliativa personalizada e dê o primeiro passo para uma reabilitação com mais qualidade, comodidade e resultados.
          </p>
          <div className="flex justify-start">
            <Button className="text-xl bg-aire-slate hover:bg-aire-purple text-white px-6 py-3 lg:flex items-center space-x-2 shadow-lg">
              <FaWhatsapp className="h-4 w-4 lg:h-5 lg:w-5" />
              <span>Clique aqui e agende agora</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
