import Navbar from "./components/Navbar";
import Hero from "./views/Hero";
import Service from "./views/Service";
import Process from "./views/Process";
import References from "./views/References";
import About from "./views/About";
import "./i18n";
import "./App.scss";
import "./scss/full.scss";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Service />
      <Process />
      <References />
      <About />
    </div>
  );
}

export default App;
