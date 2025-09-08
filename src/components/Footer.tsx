import React from 'react';
import { Button } from '@/components/ui/button';
import { Heart, Shield, Phone, Mail, Sparkles } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-card/30 backdrop-blur-md border-t border-card-border">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Heart className="w-6 h-6 text-accent" fill="currentColor" />
              <span className="text-xl font-bold gradient-text">Whispering Hearts</span>
            </div>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Providing safe, culturally sensitive mental health support through advanced AI 
              technology.
            </p>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Start Chat
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Crisis Support
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Peer Groups
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Resources
                </a>
              </li>
            </ul>
          </div>

          {/* Privacy & Security */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Privacy & Security</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Data Protection
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Security
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Emergency Support */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Emergency Support</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="w-4 h-4" />
                Crisis Helpline: 1800-XXX-XXXX
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="w-4 h-4" />
                emergency@whisperinghearts.com
              </div>
              <Button 
                variant="destructive" 
                size="sm" 
                className="w-full"
              >
                Emergency Chat
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-card-border pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Shield className="w-4 h-4" />
              Powered by Google Cloud • End-to-End Encrypted
            </div>
            <p className="text-sm text-muted-foreground">
              © 2024 Whispering Hearts. All rights reserved.
            </p>
          </div>
          
          {/* Disclaimer */}
          <div className="mt-6 p-4 bg-muted/20 rounded-lg">
            <p className="text-xs text-muted-foreground leading-relaxed">
              <strong>Important:</strong> Whispering Hearts provides emotional support and mental wellness resources. 
              In case of immediate danger or emergency, please contact local emergency services or visit your nearest hospital. 
              Our AI support is designed to complement, not replace, professional mental health care.
            </p>
          </div>
        </div>
      </div>

      {/* Powered by Badge */}
      <div className="bg-gradient-primary py-3">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 text-white">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Powered by Advanced AI & Cultural Intelligence</span>
            <Sparkles className="w-4 h-4" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;