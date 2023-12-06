import type { NextPage } from "next";
import Head from "next/head";
import Hero from "../components/Hero/Hero";
import Slider from "../components/Slider/Slider";
import { SliderData } from "../components/Slider/SliderData";
import Instagram from "../components/InstagramGallery/Instagram";
import Portfolio from "../components/Portfolio/Portfolio";
import Newsletter from "../components/Newsletter/Newsletter";
import Footer from "../components/Footer/Footer";
import Features from "../components/Features/Features";
import Testimonials from "../components/Testimonials/Testimonials";
import Contact from "../components/Contact/Contact";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Trace AI</title>
        <meta
          name="description"
          content="Created as template for future work"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero heading="The first AI-powered Knowledge Base for Industrial Facilities" message="Trace AI revolutionizes the way facility engineers query and comprehend technical documents, diagrams, and data." />
      <Features />
      {/* <Slider slides={SliderData} />
      <Instagram />
      <Portfolio /> */}
      <Newsletter />      
      <Testimonials />

      {/* <Contact /> */}
      <Footer />
    </>
  );
};

export default Home;
