import Header from "../../components/Header";
import HeroSection from "../../components/HeroSection";
import CardsRouter from "../../components/CardsRouter";
import About from "../../components/About";
import Services from "../../components/Services";
import Contact from "../../components/Contact";

const Home = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <CardsRouter />
      <About />
      <Services />
      <Contact />
    </>
  );
};

export default Home;
