import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Certificate from "../components/Certificate";

export default function certificate() {
  return (
    <>
      <Header title="Certificate" />
      <section className="px-8 py-8 md:px-20">
        <Navbar />
      </section>

      <section className="px-8 py-8 md:px-20">
        <Certificate />
      </section>

      <section>
        <Footer />
      </section>
    </>
  );
}
