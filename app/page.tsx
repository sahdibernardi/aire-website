import {
  Header,
  HeroSection,
  AboutSection,
  ServicesSection,
  HomeCareSection,
  WhyChooseSection,
  ProcessSection,
  TestimonialsSection,
  DoctorSection,
  FinalCTASection,
  Footer,
  WhatsAppButton
} from "@/components/sections";

export default function WellnessWebsite() {
  return (
    <div className="min-h-screen bg-aire-white">
      <Header />
      <WhatsAppButton />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <HomeCareSection />
      <WhyChooseSection />
      <ProcessSection />
      <TestimonialsSection />
      <DoctorSection />
      <FinalCTASection />
      <Footer />
    </div>
  );
}
