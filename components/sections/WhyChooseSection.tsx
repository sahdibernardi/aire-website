import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FaWhatsapp } from "react-icons/fa";
import { FaHandHoldingHeart, FaLock } from "react-icons/fa6";
import { ImLab } from "react-icons/im";

export default function WhyChooseSection() {
  return (
    <section className="py-20 px-10 lg:px-6 bg-aire-beige">
      <div className="container mx-auto flex flex-col justify-center items-center">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl text-aire-purple mb-4">Por que escolher a AIRE?</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w[600px]">
          <Card className="bg-white border-none shadow-xl text-center max-w-[358px]">
            <CardContent className="p-8">
              <div className="h-16 w-16 flex items-center justify-center mx-auto mb-6">
                <ImLab className="h-10 w-10 text-aire-pink" />
              </div>
              <h4 className="font-bold text-aire-purple mb-4 mx-[40px]">Ciência e inovação</h4>
              <p className="text-aire-slate leading-relaxed">
                Sessões que combinam ciência e inovação para oferecer tratamentos modernos e baseados em evidências. Aqui na AIRE, investimos continuamente em tecnologia e qualificação da equipe para garantir uma reabilitação de excelência e alinhada às necessidades de cada paciente.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white border-none shadow-lg text-center max-w-[358px]">
            <CardContent className="p-8">
              <div className="h-16 w-16 flex items-center justify-center mx-auto mb-6">
                <FaHandHoldingHeart className="h-10 w-10 text-aire-pink" />
              </div>
              <h4 className="font-bold text-aire-purple mb-4 mx-[30px]">Cuidado humanizado</h4>
              <p className="text-aire-slate leading-relaxed">
                Atendimento acolhedor, empático e personalizado, que vai além dos protocolos clínicos. Valorizamos a escuta ativa, o respeito às necessidades individuais e o suporte integral — físico, emocional e social — durante todo o processo de tratamento e reabilitação.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white border-none shadow-lg text-center max-w-[358px]">
            <CardContent className="p-8">
              <div className="h-16 w-16 flex items-center justify-center mx-auto mb-6">
                <FaLock className="h-10 w-10 text-aire-pink" />
              </div>
              <h4 className="font-bold text-aire-purple mb-4 mx-[30px]">Segurança em primeiro lugar</h4>
              <p className="text-aire-slate leading-relaxed">
                Planos de tratamento cuidadosamente planejados para respeitar os limites individuais de cada paciente por meio de uma criteriosa estratificação dos riscos. O monitoramento constante e a expertise da equipe proporcionam eficiência e segurança para os atendimentos.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center flex justify-center mt-12">
          <Button className="bg-aire-purple hover:bg-aire-pink text-xl text-white px-6 py-3 lg:flex items-center space-x-2 shadow-lg">
            <FaWhatsapp className="h-4 w-4 lg:h-5 lg:w-5" />
            <span>Clique aqui e agende agora</span>
          </Button>
        </div>
      </div>
    </section>
  );
}
