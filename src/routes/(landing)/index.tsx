import {
  ColorSection,
  ConsultSection,
  HeroSection,
  IdealClientSection,
  ProcessSection,
  ServicesSection,
  TestimonialSection,
} from "./sections";

export default function LandingPage() {
  return (
    <main class="bg-background text-background">
      <ColorSection />
      <HeroSection />
      <ServicesSection />
      <ProcessSection />
      <TestimonialSection />
      <IdealClientSection />
      <ConsultSection />
    </main>
  );
}
