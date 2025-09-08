import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  MessageCircle, 
  Globe, 
  Users, 
  Heart, 
  Shield, 
  Megaphone, 
  Award, 
  Lock,
  ArrowRight
} from 'lucide-react';

const features = [
  {
    icon: MessageCircle,
    iconColor: 'text-purple-400',
    bgColor: 'from-purple-500/10 to-purple-600/10',
    title: 'AI Emotional Sanctuary',
    description: '24/7 confidential companion offering empathetic, therapeutic conversations with advanced safety guardrails and memory retention.',
    link: 'Learn more'
  },
  {
    icon: Globe,
    iconColor: 'text-blue-400',
    bgColor: 'from-blue-500/10 to-blue-600/10',
    title: 'Voice & Language Localization',
    description: 'Multilingual support in Hindi, Tamil, Marathi, Bengali with culturally relevant metaphors and voice emotion recognition.',
    link: 'Learn more'
  },
  {
    icon: Users,
    iconColor: 'text-green-400',
    bgColor: 'from-green-500/10 to-green-600/10',
    title: 'Anonymous Peer Groups',
    description: 'Safe community spaces with AI moderators for sharing experiences, coping tips, and encouragement without stigma.',
    link: 'Learn more'
  },
  {
    icon: Heart,
    iconColor: 'text-pink-400',
    bgColor: 'from-pink-500/10 to-pink-600/10',
    title: 'Personalized Wellbeing',
    description: 'AI-tailored daily self-care missions, resilience building, and stress management based on continuous mood tracking.',
    link: 'Learn more'
  },
  {
    icon: Shield,
    iconColor: 'text-red-400',
    bgColor: 'from-red-500/10 to-red-600/10',
    title: 'Smart Crisis Protocols',
    description: 'Detects distress markers and triggers instant escalation to trained counselors through confidential channels.',
    link: 'Learn more'
  },
  {
    icon: Megaphone,
    iconColor: 'text-yellow-400',
    bgColor: 'from-yellow-500/10 to-yellow-600/10',
    title: 'Stigma-Busting Campaigns',
    description: 'AI-powered storytelling and digital outreach to normalize mental health conversations and educate communities.',
    link: 'Learn more'
  },
  {
    icon: Award,
    iconColor: 'text-indigo-400',
    bgColor: 'from-indigo-500/10 to-indigo-600/10',
    title: 'Evidence-Based Platform',
    description: 'Validated AI models with Indian youth and mental health professionals ensuring cultural fit and clinical safety.',
    link: 'Learn more'
  },
  {
    icon: Lock,
    iconColor: 'text-teal-400',
    bgColor: 'from-teal-500/10 to-teal-600/10',
    title: 'Privacy-First Experience',
    description: 'No sign-up required, secure token access, encrypted conversations with complete user control over data footprint.',
    link: 'Learn more'
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 px-4 bg-pattern relative overflow-hidden" data-reveal>
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 gradient-text">
            Comprehensive Mental Wellness
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto fade-in-up delay-1">
            Eight powerful features designed to provide holistic emotional support tailored for
            India's diverse cultural landscape
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            const animationClass = index % 2 === 0 ? 'slide-in-left' : 'slide-in-right';
            const delay = `delay-${Math.min(index + 1, 4)}`;
            
            return (
              <Card 
                key={index} 
                className={`feature-card p-6 h-full group cursor-pointer ${animationClass} ${delay}`}
              >
                <CardHeader className="pb-4">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.bgColor} flex items-center justify-center mb-4 group-hover:scale-125 group-hover:rotate-6 transition-all duration-500`}>
                    <IconComponent className={`w-8 h-8 ${feature.iconColor} group-hover:scale-110 transition-transform duration-300`} />
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="text-muted-foreground mb-4 leading-relaxed group-hover:text-muted-foreground/80 transition-colors duration-300">
                    {feature.description}
                  </CardDescription>
                  <Button 
                    variant="ghost" 
                    className="p-0 h-auto text-primary hover:text-primary-glow font-medium group-hover:translate-x-2 transition-all duration-300"
                  >
                    {feature.link}
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:scale-125 transition-transform duration-300" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;