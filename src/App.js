import "./App.css";
import NavBar from "./component/Nav";
import HeroSection from "./component/HeroSection";
import AboutSection from "./component/About";
import Services from "./component/Services";


function App() {
  return (
    <div className="App">
      <NavBar />
      <HeroSection />
      <AboutSection />
      <Services />
    </div>
  );
}

export default App;
