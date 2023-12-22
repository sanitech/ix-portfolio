import { useState } from "react";
import Consultant from "./Componets/Consultant/Consultant";
import Discover from "./Componets/Discover/Discover";
import Hero from "./Componets/hero/Hero";
import Navbar from "./Componets/Navbar/Navbar";
import Service from "./Componets/Service/Service";
import Skill from "./Componets/Skill/Skill";
import Footer from "./Componets/Footer/Footer";
import Projects from "./Componets/Projects/Project";

function App() {
  const [exploreStatus, setExploreStatus] = useState(false);

  const exploreHandler = () => {
    setExploreStatus(!exploreStatus);
  };
  return (
    <div className="App">
      <Navbar />
      <Hero explore={exploreHandler} />

      {exploreStatus && (
        <>
          <Service />
          <Discover />
          <Projects />
          <Skill />
          <Consultant />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
