import NavbarFooterTemplate from "../../templates/NavbarFooterTemplate";
import Hero from "./sections/Hero";
import Service from "./sections/Service";
import Process from "./sections/Process";
import References from "./sections/References";
import About from "./sections/About";
import "../../i18n";

function Home() {
  return (
    <NavbarFooterTemplate doAddNavbarMargin={false}>
      <Hero />
      <Service />
      <Process />
      <References />
      <About />
    </NavbarFooterTemplate>
  );
}

export default Home;
