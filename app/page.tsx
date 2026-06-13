import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { LogoMarquee } from "@/components/LogoMarquee";
import { TestimonialGrid } from "@/components/TestimonialGrid";
import { Services } from "@/components/Services";
import { CaseStudies } from "@/components/CaseStudies";
import { Benefits } from "@/components/Benefits";
import { FeaturedTestimonial } from "@/components/FeaturedTestimonial";
import { Process } from "@/components/Process";
import { About } from "@/components/About";
import { FAQ } from "@/components/FAQ";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-beige flex flex-col font-sans">
      <Navigation />
      <Hero />
      <LogoMarquee />
      <TestimonialGrid />
      <Services />
      <CaseStudies />
      <Benefits />
      <FeaturedTestimonial />
      <Process />
      <About />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
