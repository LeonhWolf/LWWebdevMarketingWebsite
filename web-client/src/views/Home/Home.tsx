import Navbar from "../../components/Navbar";
import Hero from "./components/Hero";
import Service from "./components/Service";
import Process from "./components/Process";
import References from "./components/References";
import About from "./components/About";
import Footer from "../../components/Footer";
import "../../i18n";

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Service />
      <Process />
      <References />
      <About />
      <Footer />
    </div>
  );
}

export default Home;
