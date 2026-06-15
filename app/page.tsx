import { Header } from "@/components/Header/header";
import { Hero } from "@/components/hero";
import { Categories } from "@/components/categories";
import { EventsSection } from "@/components/events-section";
import { Features } from "@/components/features";
import { Testimonials } from "@/components/testimonials";
import { CTA } from "@/components/cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Categories />
      <EventsSection />
      <Features />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
