import "./App.css";
import NavBar from "./component/Nav";
import HeroSection from "./component/HeroSection";
import AboutSection from "./component/About";
import Services from "./component/Services";
import Benefits from "./component/Benefit";


function App() {
  return (
    <div className="App">
      <NavBar />
      <HeroSection />
      <AboutSection />
      <Services />
      <Benefits />

    </div>
  );
}

export default App;
