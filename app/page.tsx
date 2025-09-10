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
  Footer
} from "@/components/sections";

export default function WellnessWebsite() {
  return (
    <div className="min-h-screen bg-aire-white">
      <Header />
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
