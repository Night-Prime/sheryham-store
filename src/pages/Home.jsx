import React from "react";
import Hero from "../components/Hero";
import SubHero from "../components/SubHero";
import Info from "../components/Info";
import Slider from "../components/Slider";

export const Home = () => {
  return (
    <div>
      <Hero />
      <SubHero />
      <Slider name="collections" sliderName="New Arrivals" id="3" />
      <Info />
    </div>
  );
};
