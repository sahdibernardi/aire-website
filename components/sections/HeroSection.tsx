import { Button } from "@/components/ui/button";
import { FaWhatsapp } from "react-icons/fa";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="min-h-screen relative flex items-center px-10 lg:px-0">
      <div className="absolute inset-0">
        <Image
          src="/respirador.jpg"
          alt="Mulher usando dispositivo respiratório"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0" style={{ backgroundColor: '#FBFBFB9C', opacity: 0.99 }}></div>
      </div>

      <div className="container mx-auto px-2 sm:px-4 lg:px-6 relative z-10 max-w-full">
        <div className="flex flex-col lg:flex-row justify-center lg:justify-end min-h-screen">
          <div className="hidden lg:block lg:w-1/2"></div>
          <div className="flex flex-col justify-center items-center text-center lg:text-right space-y-6 lg:space-y-8 w-full lg:w-1/2 pt-20 lg:pt-0">
            <h1 className="text-center text-3xl lg:text-6xl text-aire-slate leading-tight max-w-[90vw] sm:max-w-[400px] lg:w-[400px]">
              INSPIRANDO SAÚDE, EXPIRANDO BEM-ESTAR
            </h1>
            <p className="text-sm text-center sm:text-base lg:text-lg text-aire-slate leading-relaxed sm:max-w-[450px] lg:w-[450px]">
              <span className="font-semibold">Fisioterapia cardiovascular, pulmonar e oncológica</span> com
              protocolos baseados em evidência, tecnologia de ponta e um olhar humanizado — no conforto da sua casa
            </p>
            <div className="flex justify-center w-full">
              <Button className="bg-aire-pink hover:bg-aire-purple text-white px-4 sm:px-6 py-3 text-sm sm:text-base flex items-center space-x-2 shadow-lg">
                <FaWhatsapp className="h-4 w-4 sm:h-5 sm:w-5" />
                <span>ENTRAR EM CONTATO</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
