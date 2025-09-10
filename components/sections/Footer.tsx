import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="py-12 px-6 bg-aire-slate">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="h-10 w-10 rounded-full bg-aire-pink flex items-center justify-center">
                <img src="/logo.png" alt="AIRE Logo" className="h-6 w-6" />
              </div>
              <span className="text-xl font-bold text-white">AIRE</span>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              Transformando ideias em soluções digitais inovadoras através de inteligência artificial, desenvolvimento web e mobile.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <FaInstagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <FaFacebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <FaLinkedin className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <FaWhatsapp className="h-5 w-5 text-aire-pink" />
                <span className="text-gray-300">(11) 99999-9999</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaEnvelope className="h-5 w-5 text-aire-pink" />
                <span className="text-gray-300">contato@aire.com.br</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaMapMarkerAlt className="h-5 w-5 text-aire-pink" />
                <span className="text-gray-300">São Paulo, SP</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Links Rápidos</h3>
            <div className="space-y-2">
              <a href="#" className="block text-gray-300 hover:text-white transition-colors">Sobre</a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors">Serviços</a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors">Contato</a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors">Agendamento</a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-600 text-center">
          <p className="text-gray-300">&copy; 2024 AIRE. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
