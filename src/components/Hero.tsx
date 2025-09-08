import React from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Heart, Shield, Globe } from 'lucide-react';

const Hero = () => {
  const navigate = useNavigate();
  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center px-4 py-20 bg-pattern overflow-hidden" data-reveal>
      <div className="max-w-6xl mx-auto text-center space-y-8">
        {/* Main Title */}
        <div className="space-y-4 fade-in-up">
          <div className="flex items-center justify-center gap-3 mb-6 scale-in">
            <Heart className="w-8 h-8 text-accent heartbeat" fill="none" />
            <h1 className="text-5xl lg:text-7xl font-bold">
              <span className="gradient-text">Whispering Hearts</span>
            </h1>
          </div>
          
          <h2 className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed fade-in-up delay-1">
            Safe, judgement-free, and culturally sensitive emotional support through{' '}
            <span className="gradient-text font-semibold">advanced AI</span>
          </h2>
        </div>

        {/* Description */}
        <p className="text-lg lg:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed fade-in-up delay-2">
          Your 24/7 confidential companion offering empathetic conversations, personalized
          wellbeing plans, and crisis support in multiple languages including Hindi, Tamil,
          Marathi, and Bengali.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center fade-in-up delay-3">
          <Button 
            variant="hero" 
            size="lg" 
            className="text-lg px-8 py-4 h-auto font-semibold"
            onClick={() => navigate('/start')}
          >
            Start Your Journey
          </Button>
          <Button 
            variant="glass" 
            size="lg" 
            className="text-lg px-8 py-4 h-auto"
          >
            Learn More
          </Button>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-4 pt-8 fade-in-up delay-4">
          <Badge variant="secondary" className="flex items-center gap-2 px-4 py-2 text-sm glass-card">
            <Shield className="w-4 h-4 text-success" />
            100% Anonymous
          </Badge>
          <Badge variant="secondary" className="flex items-center gap-2 px-4 py-2 text-sm glass-card">
            <Globe className="w-4 h-4 text-primary" />
            Multilingual Support
          </Badge>
          <Badge variant="secondary" className="flex items-center gap-2 px-4 py-2 text-sm glass-card">
            <Heart className="w-4 h-4 text-accent" fill="currentColor" />
            Culturally Sensitive
          </Badge>
        </div>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-primary/10 blur-xl animate-pulse" data-parallax data-speed="0.2"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-accent/10 blur-xl animate-pulse delay-1000" data-parallax data-speed="0.35"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 rounded-full bg-primary-glow/10 blur-lg animate-pulse delay-2000" data-parallax data-speed="0.25"></div>
      </div>
    </section>
  );
};

export default Hero;