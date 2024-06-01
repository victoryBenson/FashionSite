import React from "react";

import { Unleash } from "../../components/Unleash";
import { Footer } from "../../components/Footer.jsx";
import { Trending } from "../../components/Trending";
import { Faq } from "../../components/Faq";
import { Subscribe } from "../../components/Subscribe";
import { NewArrivals } from "../../components/NewArrivals";
import { Hero } from "../../components/Hero";
import { Features } from "../../components/Features";

export const LandingPage = () => {
  return (
    <div className="w-[100%] h-auto bg-white">
      <Hero />

      <Trending />
      <NewArrivals />
      <Features />
      <Faq />
      <Unleash />
      <Subscribe />
      <Footer />
    </div>
  );
};
