import Head from "next/head";
import Navbar from "../components/Navbar";
import Home from "../components/Home";
import About from "../components/About";
import Skill from "../components/Skill";
import Project from "../components/Project";
import Certificate from "../components/Certificate";
import Footer from "../components/Footer";

export default function Portfolio() {
  return (
    <>
      <Head>
        <title>{"Gusman Wijaya's Portfolio"}</title>
        <meta name="description" content="Gusman Wijaya's Portfolio" />
      </Head>
      <Navbar />
      <Home />
      <About />
      <Skill />
      <Project />
      <Certificate />
      <Footer />
    </>
  );
}
