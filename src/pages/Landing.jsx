import React from "react";
import Hero from "../components/modules/Landing/Hero";
import Details from "../components/modules/Landing/Details";
import Review from "../components/modules/Landing/Review";
import Team from "../components/modules/Landing/Team";
import Support from "../components/modules/Landing/Support";
import Offer from "../components/modules/Landing/Offer";
import Questionnaire from "../components/modules/Landing/Questionnaire";
import Brand from "../components/modules/Landing/Brand";

const Landing = () => {
  return (
    <div>
      <Hero />
      <Brand />
      <Details />
      <Review />
      <Team />
      <Support />
      <Offer />
      <Questionnaire />
    </div>
  );
};

export default Landing;
