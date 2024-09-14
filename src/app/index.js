import React from 'react';
import Header from "./Header/header.tsx";
import HeroSection from "./HeroSection/HeroSection.tsx";
import FeaturesSection from "./FeaturesSection/FeaturesSection.tsx";
import Footer from "./Footer/footer.tsx";

export default function Index() {
  return (
    <>
      <Header />
      <HeroSection />
      <FeaturesSection />
      <Footer />
    </>
  );
}