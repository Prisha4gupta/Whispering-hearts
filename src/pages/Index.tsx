import React from 'react';
import FloatingHearts from '@/components/FloatingHearts';
import AnimatedBackground from '@/components/AnimatedBackground';
import Hero from '@/components/Hero';
import FeaturesSection from '@/components/FeaturesSection';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-background relative overflow-hidden">
      <AnimatedBackground />
      <FloatingHearts />
      <main className="relative z-10">
        <Hero />
        <FeaturesSection />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
