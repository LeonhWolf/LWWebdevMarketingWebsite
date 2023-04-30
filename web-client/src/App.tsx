import Navbar from "./components/Navbar";
import Hero from "./views/Hero";
import Service from "./views/Service";
import "./i18n";
import "./App.scss";
import "./scss/full.scss";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Service />
    </div>
  );
}

export default App;
