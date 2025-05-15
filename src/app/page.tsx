import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { SpecificationsSection } from "@/components/SpecificationsSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { CarDisplay } from "@/components/CarDisplay";
import { ContactForm } from "@/components/ContactForm";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <SpecificationsSection />
      <CarDisplay />
      <FeaturesSection />
      <ContactForm />
      <Footer />
    </main>
  );
}
