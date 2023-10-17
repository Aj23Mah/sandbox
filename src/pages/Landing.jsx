import React from "react";
import Hero from "../components/modules/Landing/Hero";
import Services from "../components/modules/Landing/Services";
import About from "../components/modules/Landing/About";
import Review from "../components/modules/Landing/Review";
import Team from "../components/modules/Landing/Team";
import Support from "../components/modules/Landing/Support";

const Landing = () => {
  return (
    <div>
      <Hero />
      <Services />
      <About />
      <Review />
      <Team />
      <Support />
    </div>
  );
};

export default Landing;
