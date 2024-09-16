import React from 'react';
import Header from "./Header/header.tsx";
import HeroSection from "./HeroSection/HeroSection.tsx";
import FeaturesSection from "./FeaturesSection/FeaturesSection.tsx";
import ZenPositionSection from "./ZenPositionSection/ZenPositionSection.tsx";
import CustomizableShellSection from "./CustomizableShellSection/CustomizableShellSection.tsx";
import SoundscapesSection from "./SoundscapesSection/SoundscapesSection.tsx";
import AromatherapySection from "./AromatherapySection/AromatherapySection.tsx";
import PeltierCoolingSection from "./PeltierCoolingSection/PeltierCoolingSection.tsx";
import Footer from "./Footer/footer.tsx";

export default function Index() {
  return (
    <>
      <div style={{ background: 'radial-gradient(ellipse at center, #D2C0A7, #86827b, #424240)' }}>
        <Header />
        <HeroSection />
        <FeaturesSection />
      </div>
      <ZenPositionSection />
      <CustomizableShellSection />
      <SoundscapesSection />
      <AromatherapySection />
      <PeltierCoolingSection />
      <Footer />
    </>
  );
}