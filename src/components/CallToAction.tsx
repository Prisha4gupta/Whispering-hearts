import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Heart, Shield, Sparkles, ArrowRight } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* CTA Header */}
        <div className="space-y-6 mb-12 fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold">
            Ready to Begin Your{' '}
            <span className="gradient-text">Healing Journey?</span>
          </h2>
          
          <p className="text-xl text-muted-foreground leading-relaxed fade-in-up delay-1">
            Join thousands who have found solace, support, and strength through our 
            culturally-sensitive AI companion. Your path to emotional wellness starts 
            with a single conversation.
          </p>
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 fade-in-up delay-2">
          <Badge variant="secondary" className="flex items-center gap-2 px-4 py-3 text-sm glass-card hover:scale-105 transition-transform duration-300">
            <Shield className="w-4 h-4 text-success" />
            100% Confidential
          </Badge>
          <Badge variant="secondary" className="flex items-center gap-2 px-4 py-3 text-sm glass-card hover:scale-105 transition-transform duration-300">
            <Heart className="w-4 h-4 text-accent" fill="currentColor" />
            Culturally Sensitive
          </Badge>
          <Badge variant="secondary" className="flex items-center gap-2 px-4 py-3 text-sm glass-card hover:scale-105 transition-transform duration-300">
            <Sparkles className="w-4 h-4 text-primary" />
            AI-Powered Support
          </Badge>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 fade-in-up delay-3">
          <Button 
            variant="hero" 
            size="lg" 
            className="text-lg px-10 py-4 h-auto font-semibold group"
          >
            Start Free Conversation
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button 
            variant="glass" 
            size="lg" 
            className="text-lg px-10 py-4 h-auto"
          >
            Learn More About Us
          </Button>
        </div>

        {/* Additional Info */}
        <p className="text-sm text-muted-foreground fade-in-up delay-4">
          No registration required • Available in multiple Indian languages • Crisis support available 24/7
        </p>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-gradient-to-r from-accent/20 to-primary-glow/20 blur-3xl animate-pulse delay-1000"></div>
      </div>
    </section>
  );
};

export default CallToAction;