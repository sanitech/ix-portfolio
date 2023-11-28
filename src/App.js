import Consultant from "./Componets/Consultant/Consultant";
import Discover from "./Componets/Discover/Discover";
import Hero from "./Componets/Hero";
import Navbar from "./Componets/Navbar";
import Service from "./Componets/Service/Service";
import Skill from "./Componets/Skill/Skill";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Service />
      <Discover />
      <Skill />
      <Consultant />
    </div>
  );
}

export default App;
