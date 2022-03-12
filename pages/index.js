import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Project from "../components/Project";
import SeeCertificate from "../components/SeeCertificate";

export default function Home() {
  return (
    <>
      <Header title="Welcome" />
      <section className="px-8 py-8 md:px-20">
        <Navbar />
      </section>

      <section>
        <Hero />
      </section>

      <section id="project" className="px-8 py-8 md:px-20">
        <Project />
      </section>

      <section className="px-8 py-8 md:px-20">
        <SeeCertificate />
      </section>

      <section>
        <Footer />
      </section>
    </>
  );
}
