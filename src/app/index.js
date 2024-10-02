import React from 'react';
import Header from "./Header/header.tsx";
import HeroSection from "./HeroSection/HeroSection.tsx";
import FeaturesSection from "./FeaturesSection/FeaturesSection.tsx";
import ZenPositionSection from "./ZenPositionSection/ZenPositionSection.tsx";
import CustomizableShellSection from "./CustomizableShellSection/CustomizableShellSection.tsx";
import SoundscapesSection from "./SoundscapesSection/SoundscapesSection.tsx";
import AromatherapySection from "./AromatherapySection/AromatherapySection.tsx";
import PeltierCoolingSection from "./PeltierCoolingSection/PeltierCoolingSection.tsx";
import TeamSection from "./TeamSection/TeamSection.tsx";
import ContactSection from "./ContactSection/ContactSection.tsx";
import Footer from "./Footer/footer.tsx";

export default function Index() {
  return (
    <>
      <Header />
      <div className='Radial-bg' style={{ background: 'radial-gradient(ellipse at center, #D2C0A7, #86827b, #424240)' }}>
        <HeroSection />
        <FeaturesSection />
      </div>
      <ZenPositionSection />
      <CustomizableShellSection />
      <SoundscapesSection />
      <AromatherapySection />
      <PeltierCoolingSection />
      <div style={{ background: 'radial-gradient(ellipse at top, #D2C0A7, #86827b, #424240)' }}>
        <TeamSection />
        <ContactSection />
      </div>
      <Footer />
    </>
  );
}