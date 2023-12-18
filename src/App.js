import { useState } from "react";
import Consultant from "./Componets/Consultant/Consultant";
import Discover from "./Componets/Discover/Discover";
import Hero from "./Componets/hero/Hero";
import Navbar from "./Componets/Navbar/Navbar";
import Service from "./Componets/Service/Service";
import Skill from "./Componets/Skill/Skill";

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
          <Skill />
          <Consultant />
        </>
      )}
    </div>
  );
}

export default App;
