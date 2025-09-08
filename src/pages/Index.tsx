import React from 'react';
import FloatingHearts from '@/components/FloatingHearts';
import AnimatedBackground from '@/components/AnimatedBackground';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import FeaturesSection from '@/components/FeaturesSection';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';
import { useScrollEffects } from '@/hooks/use-scroll-effects';
 

const Index = () => {
  useScrollEffects();
  return (
    <div className="min-h-screen bg-gradient-background relative overflow-hidden">
      <Header />
      <AnimatedBackground />
      <FloatingHearts />
      <main className="relative z-10 pt-24">
        <Hero />
        <FeaturesSection />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
