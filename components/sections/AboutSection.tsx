import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="sobre" className="py-12 sm:py-16 lg:py-20 px-10 lg:px-6 xl:px-40 bg-aire-pink">
      <div className="container mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-[1000px] items-center">
        <div className="relative order-2 lg:order-1">
          <Image
            src="/menino.jpg"
            alt="Menino com profissional de saúde usando estetoscópio"
            className="w-full max-w-[400px] h-auto rounded-3xl shadow-lg mx-auto"
            width={500}
            height={500}
          />
        </div>
        <div className="text-white order-1 lg:order-2">
          <h2 className="mb-4 sm:mb-6 text-3xl lg:text-4xl">SOBRE A AIRE</h2>
          <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">
            Cuidamos da sua saúde respiratória e cardiovascular com ciência, tecnologia e acolhimento
          </h3>
          <p className="text-sm sm:text-md mb-4 sm:mb-6 leading-relaxed">
            Na <strong>AIRE Cardiopulmonar</strong> oferecemos serviços especializados em fisioterapia cardiovascular, pulmonar e oncológica. Nosso compromisso vai além da técnica: promovemos um cuidado humanizado, baseado em evidências, centrado no paciente e alinhado às melhores práticas clínicas.
          </p>
          <p className="text-sm sm:text-md mb-4 sm:mb-6 leading-relaxed">
            O nome AIRE representa os pilares que sustentam nossa atuação: <strong>acolhimento</strong>, para tratar com empatia e escuta genuína; <strong>inovação</strong>, para aplicar tecnologias e abordagens modernas e baseadas em evidências; <strong>reabilitação</strong>, como caminho para reconquistar autonomia, funcionalidade e qualidade de vida; e <strong>excelência</strong>, presente em cada detalhe do nosso atendimento. Mais do que uma sigla, AIRE é ciência com alma — um serviço de saúde cardiopulmonar que transforma recomeços.
          </p>
        </div>
      </div>
    </section>
  );
}
