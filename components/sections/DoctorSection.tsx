import Image from "next/image";

export default function DoctorSection() {
  return (
    <section className="bg-aire-light-blue relative overflow-hidden flex-col justify-center items-center">
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
      
      <div className="py-12 sm:py-16 lg:py-20 flex flex-col justify-center items-center relative z-10 w-full text-aire-purple">
        <div className="flex flex-col lg:flex-row justify-center items-start relative z-10 w-full max-w-5xl px-2 sm:px-4 lg:px-6">
          {/* Lado esquerdo - Conteúdo de texto */}
          <div className="space-y-4 sm:space-y-6 lg:space-y-8 w-full lg:w-1/2 lg:pr-8 order-2 lg:order-1">
            <h2 className="text-xl sm:text-2xl lg:text-4xl xl:text-4xl leading-tight">
              Trajetória e visão que inspiram a AIRE
            </h2>
            <h3 className="text-lg sm:text-xl font-semibold">Dra. Camila Adam, Msc, PhD</h3>

            <div className="space-y-4 sm:space-y-6">
              <p className="text-sm sm:text-base leading-relaxed">
              Minha trajetória acadêmica tem início na Universidade Federal de Santa Catarina (UFSC), onde me formei fisioterapeuta e conquistei os títulos de mestra e doutora - conquistas que marcaram profundamente minha caminhada e meu compromisso com a ciência e a excelência na saúde!
              </p>

              <p className="text-sm sm:text-base leading-relaxed">
              A paixão e dedicação à ciência me proporcionaram oportunidades incríveis, como a de realizar um período do meu doutorado na University College London (UCL), em Londres, uma das universidades mais renomadas do mundo. Essa vivência foi transformadora e permitiu uma imersão nas práticas mais avançadas em saúde cardiopulmonar.
              </p>
            </div>
          </div>

          {/* Lado direito */}
          <div className="relative flex justify-center items-center w-full lg:w-1/2 order-1 lg:order-2 mb-6 lg:mb-0">
            <div className="relative">          
              <div className="relative z-10 w-48 sm:w-64 lg:w-80 h-48 sm:h-64 lg:h-80">
                <Image
                  src="/camila.jpg"
                  alt="Dra. Camila Adam"
                  className="w-full h-full object-cover rounded-full"
                  fill
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-6 sm:mt-8 lg:mt-10 flex flex-col justify-center items-start relative z-10 w-full max-w-5xl px-2 sm:px-4 lg:px-6">
          <p className="text-sm sm:text-base leading-relaxed">
            Nos últimos anos, já no Brasil, realizei milhares de atendimentos em fisioterapia cardiopulmonar,
            acompanhando adultos e crianças em diferentes fases de suas jornadas de reabilitação. Com mais de 10
            anos de experiência em saúde e fisioterapia cardiopulmonar, minha atuação clínica se estende por
            contextos hospitalares, ambulatoriais e domiciliares com vivências práticas que fortaleceram minha
            expertise técnica.
          </p>

          <p className="text-sm sm:text-base leading-relaxed mt-4 sm:mt-6">
            Atualmente, sou idealizadora e responsável técnica da AIRE, um serviço que nasceu da vontade de
            proporcionar atendimentos especializados em fisioterapia cardiovascular, pulmonar e oncológica com
            excelência. A AIRE foi concebida com base em toda minha formação acadêmica e experiência prática ao
            longo dos anos e tem o compromisso de transformar recomeços com técnica, ciência e humanização.
          </p>

          <div className="mt-6 sm:mt-8 text-xs sm:text-sm font-light">
            <p>Dra. Camila Thaís Adam, PhD</p>
            <p>Fisioterapeuta | CREFITO 325911-F</p>
            <p>
              Doutora em Ciências Médicas pela Universidade Federal de Santa Catarina (UFSC) e University College
              London (UCL)
            </p>
            <p>Idealizadora e responsável técnica pela AIRE Cardiopulmonar</p>
          </div>
        </div>
      </div>
    </section>
  );
}
