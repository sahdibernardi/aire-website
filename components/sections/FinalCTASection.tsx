import { Button } from "@/components/ui/button";
import { FaWhatsapp } from "react-icons/fa";
import Image from "next/image";

export default function FinalCTASection() {
  return (
    <section className="py-20 px-6 relative overflow-hidden h-[800px]">
      <div className="absolute inset-0">
        <Image
          src="/contato.jpg"
          alt="Profissional de fisioterapia cardiopulmonar com equipamento médico"
          className="w-full h-full object-cover object-[50%_35%]"
          width={1000}
          height={1000}
        />
        <div className="absolute inset-0 bg-aire-white/40"></div>
      </div>

      <div className="relative z-10">
        <div className="flex justify-center items-center h-full">
          <div className="max-w-lg">
            <h2 className="font-bold text-aire-purple mb-6 leading-tight max-w-[500px]">
              Agende sua avaliação com quem entende de saúde cardiopulmonar
            </h2>
            <p className="text-lg text-aire-purple mb-8 leading-relaxed">
              Responderemos rapidamente para entender suas necessidades e indicar a abordagem mais adequada
            </p>
            <div className="text-center mt-12 flex justify-center">
              <Button className="text-lg font-bold bg-aire-pink hover:bg-aire-purple text-white px-6 py-3 lg:flex items-center space-x-2 shadow-lg">
                <FaWhatsapp className="h-4 w-4 lg:h-5 lg:w-5" />
                <span>Agende sua consulta avaliativa personalizada</span>
              </Button>
            </div>
          </div>
          <div className="w-1/2"></div>
        </div>
      </div>
    </section>
  );
}
