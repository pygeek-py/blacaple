import MainLayout from "../layouts/MainLayout";
import Hero from "../sections/Hero";
import Work from "../sections/Work";
import About from "../sections/About";
import Services from "../sections/Services";
import Process from "../sections/Process";
import Proof from "../sections/Proof";
import Testimonials from "../sections/Testimonials";
import FAQ from "../sections/FAQ";
import Pricing from "../sections/Pricing";
import Contact from "../sections/Contact";

export default function LandingPage() {
  return (
    <MainLayout>
      <Hero />
      <Work />
      <About />
      <Services />
      <Process />
      <Proof />
      <Testimonials />
      <FAQ />
      <Pricing />
      <Contact />
    </MainLayout>
  );
}
