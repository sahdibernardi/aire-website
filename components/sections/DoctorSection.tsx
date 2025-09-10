import Image from "next/image";

export default function DoctorSection() {
  return (
    <section className="bg-aire-light-blue relative overflow-hidden">
      {/* Grafismo de fundo */}
      <div className="absolute w-full h-full">
        <Image
          src="/grafismoRosaHorizontal.png"
          alt="Grafismo"
          width={2000}
          height={2000}
          className="rotate-270"
        />
      </div>
      
      <div className="py-20 px-6 container mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Lado esquerdo - Conteúdo de texto */}
        <div className="space-y-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-aire-purple leading-tight">
            Trajetória e visão que inspiram a AIRE
          </h2>
          <h3 className="text-xl font-semibold text-aire-purple">Dra. Camila Adam, Msc, PhD</h3>

          <div className="space-y-6 text-aire-slate">
            <p className="leading-relaxed">
              Minha trajetória acadêmica tem início na Universidade Federal de Santa Catarina (UFSC), onde me formei
              fisioterapeuta e conquistei os títulos de mestra e doutora - conquistas que marcaram profundamente minha
              caminhada e meu compromisso com a ciência e a excelência na saúde!
            </p>

            <p className="leading-relaxed">
              A paixão e dedicação à ciência me proporcionaram oportunidades incríveis, como a de realizar um período
              do meu doutorado na University College London (UCL), em Londres, uma das universidades mais renomadas do
              mundo. Essa vivência foi transformadora e permitiu uma imersão nas práticas mais avançadas em saúde
              cardiopulmonar.
            </p>

            <p className="leading-relaxed">
              Nos últimos anos, já no Brasil, realizei milhares de atendimentos em fisioterapia cardiopulmonar,
              acompanhando adultos e crianças em diferentes fases de suas jornadas de reabilitação. Com mais de 10
              anos de experiência em saúde e fisioterapia cardiopulmonar, minha atuação clínica se estende por
              contextos hospitalares, ambulatoriais e domiciliares com vivências práticas que fortaleceram minha
              expertise técnica.
            </p>

            <p className="leading-relaxed">
              Atualmente, sou idealizadora e responsável técnica da AIRE, um serviço que nasceu da vontade de
              proporcionar atendimentos especializados em fisioterapia cardiovascular, pulmonar e oncológica com
              excelência. A AIRE foi concebida com base em toda minha formação acadêmica e experiência prática ao
              longo dos anos e tem o compromisso de transformar recomeços com técnica, ciência e humanização.
            </p>

            <div className="mt-8 space-y-2 text-sm">
              <p className="font-semibold">Dra. Camila Thaís Adam, PhD</p>
              <p>Fisioterapeuta | CREFITO 325911-F</p>
              <p>
                Doutora em Ciências Médicas pela Universidade Federal de Santa Catarina (UFSC) e University College
                London (UCL)
              </p>
              <p>Idealizadora e responsável técnica pela AIRE Cardiopulmonar</p>
            </div>
          </div>
        </div>

        {/* Lado direito - Foto com grafismo rosa vertical */}
        <div className="relative flex justify-center">
          <div className="relative">          
            {/* Foto da Dra. Camila */}
            <div className="relative z-10 w-80 h-80">
              <img
                src="/camila.jpg"
                alt="Dra. Camila Adam"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
