import { Button } from "@/components/ui/button";
import { FaWhatsapp } from "react-icons/fa";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="min-h-screen relative flex items-center">
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

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-row justify-end min-h-screen">
          <div className="w-1/2"></div>
          <div className="flex flex-col justify-center items-center text-right space-y-8 w-1/2">
            <h1 className="mt-20 font-bold text-aire-slate leading-tight w-[400px] text-center">
              INSPIRANDO SAÚDE, EXPIRANDO BEM-ESTAR
            </h1>
              <p className="text-center lg:text-lg text-aire-slate leading-relaxed w-[450px]">
                <span className="font-semibold">Fisioterapia cardiovascular, pulmonar e oncológica</span> com
                protocolos baseados em evidência, tecnologia de ponta e um olhar humanizado — no conforto da sua casa
              </p>
            <div className="flex justify-end">
              <Button className="bg-aire-pink hover:bg-aire-purple text-white px-6 py-3 lg:flex items-center space-x-2 shadow-lg">
                <FaWhatsapp className="h-4 w-4 lg:h-5 lg:w-5" />
                <span>ENTRAR EM CONTATO</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
