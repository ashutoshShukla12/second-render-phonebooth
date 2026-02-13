import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Clients from "@/components/Clients";
import Services from "@/components/Services";
import About from "@/components/About";
import GoogleReviews from "@/components/GoogleReviews";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <section className="snap-start">
        <Hero />
      </section>
      <section className="snap-start">
        <Clients />
      </section>
      <section className="snap-start">
        <Services />
      </section>
      <section className="snap-start">
        <About />
      </section>
      <section className="snap-start">
        <GoogleReviews />
      </section>
      <section className="snap-start">
        <Contact />
      </section>
      <section className="snap-start">
        <Footer />
      </section>
    </main>
  );
}
