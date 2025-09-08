import React from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { Heart } from 'lucide-react';

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="fixed top-0 inset-x-0 z-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mt-4 rounded-2xl border border-card-border/60 bg-card/40 backdrop-blur-xl shadow-card">
          <div className="flex items-center justify-between px-4 py-3 md:px-6">
            <a href="/" className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-accent" fill="currentColor" />
              <span className="text-sm md:text-base font-semibold tracking-tight gradient-text">Whispering Hearts</span>
            </a>
            <nav className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
              <a href="#features" className="hover:text-foreground transition-colors">Features</a>
              <a href="#about" className="hover:text-foreground transition-colors">About</a>
              <a href="#support" className="hover:text-foreground transition-colors">Support</a>
            </nav>
            <div className="flex items-center gap-2">
              <Button variant="glass" size="sm" className="hidden md:inline-flex" onClick={() => navigate('/start')}>Learn more</Button>
              <Button variant="hero" size="sm" className="px-4" onClick={() => navigate('/start')}>Start now</Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

