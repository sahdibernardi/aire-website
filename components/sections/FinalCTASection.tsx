import { Button } from "@/components/ui/button";
import { FaWhatsapp } from "react-icons/fa";

export default function FinalCTASection() {
  return (
    <section className="py-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/bolinha.jpg"
          alt="Profissional de saúde com equipamento médico"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-lg">
            <h2 className="text-4xl lg:text-5xl font-bold text-aire-purple mb-6 leading-tight">
              Agende sua avaliação
              <br />
              com quem entende de
              <br />
              saúde cardiopulmonar
            </h2>
            <p className="text-lg text-aire-slate mb-8 leading-relaxed">
              Responderemos rapidamente para entender suas necessidades e indicar a abordagem mais adequada
            </p>
            <Button className="bg-aire-pink hover:bg-aire-purple text-white px-8 py-4 text-lg rounded-full flex items-center space-x-3">
              <FaWhatsapp className="h-5 w-5" />
              <span>Agende sua consulta avaliativa personalizada</span>
            </Button>
          </div>
          <div></div>
        </div>
      </div>
    </section>
  );
}
