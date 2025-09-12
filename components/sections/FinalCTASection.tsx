import { Button } from "@/components/ui/button";
import { FaWhatsapp } from "react-icons/fa";
import Image from "next/image";

export default function FinalCTASection() {
  return (
    <section id="contato" className="py-12 sm:py-16 lg:py-20 px-8 lg:px-6 relative overflow-hidden min-h-[400px] sm:min-h-[500px] lg:h-[800px]">
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
          <div className="max-w-lg text-center lg:text-left">
            <h2 className=" text-aire-purple mb-4 sm:mb-6 leading-tight text-2xl lg:text-4xl">
              Agende sua avaliação com quem entende de saúde cardiopulmonar
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-aire-purple mb-6 sm:mb-8 leading-relaxed">
              Responderemos rapidamente para entender suas necessidades e indicar a abordagem mais adequada
            </p>
            <div className="text-center mt-8 sm:mt-12 flex justify-center lg:justify-start">
              <Button className="text-sm sm:text-base lg:text-lg font-bold bg-aire-pink hover:bg-aire-purple text-white px-4 sm:px-6 py-3 flex items-center space-x-2 shadow-lg"
              >
                <FaWhatsapp className="h-4 w-4 sm:h-5 sm:w-5" />
                <span>Agende sua consulta avaliativa personalizada</span>
              </Button>
            </div>
          </div>
          <div className="hidden lg:block lg:w-1/2"></div>
        </div>
      </div>
    </section>
  );
}
