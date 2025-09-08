import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Heart, Shield } from 'lucide-react';
import { useScrollEffects } from '@/hooks/use-scroll-effects';
import { useNavigate } from 'react-router-dom';

const Start = () => {
  useScrollEffects();
  const navigate = useNavigate();
  const [language, setLanguage] = useState<string>("");
  const [mode, setMode] = useState<string>("");
  const [topic, setTopic] = useState<string>("");

  const persistAndGo = (skip: boolean) => {
    try {
      if (!skip) {
        localStorage.setItem("wh_lang", language.trim());
        localStorage.setItem("wh_mode", mode.trim());
        localStorage.setItem("wh_topic", topic.trim());
      } else {
        localStorage.setItem("wh_lang", language.trim() || "English");
        localStorage.setItem("wh_mode", mode.trim() || "Text");
        localStorage.setItem("wh_topic", topic.trim() || "General support");
      }
    } catch {}
    navigate('/chat');
  };

  return (
    <section className="min-h-screen px-4 py-24 bg-pattern">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10" data-reveal>
          <div className="flex justify-center mb-4">
            <Heart className="w-8 h-8 text-accent heartbeat" />
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold gradient-text">Start Your Journey</h1>
          <p className="text-muted-foreground mt-3">A few quick questions to personalize your experience. No sign up required.</p>
        </div>

        <Card className="glass-card" data-reveal>
          <CardHeader>
            <CardTitle>Get matched with the right support</CardTitle>
            <CardDescription>We’ll tailor tone and suggestions to your comfort.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="language">Preferred language</Label>
                <Input id="language" placeholder="e.g., English / Hindi" value={language} onChange={(e) => setLanguage(e.target.value)} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="mode">Conversation mode</Label>
                <Input id="mode" placeholder="Text only (voice soon)" value={mode} onChange={(e) => setMode(e.target.value)} />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="topic">What’s on your mind?</Label>
              <Input id="topic" placeholder="Stress, relationships, anxiety, self-esteem, etc." value={topic} onChange={(e) => setTopic(e.target.value)} />
            </div>

            <div className="flex items-start gap-2 text-sm text-muted-foreground">
              <Shield className="w-4 h-4 mt-0.5 text-success" />
              <p>Your responses are anonymous and processed locally where possible.</p>
            </div>

            <div className="flex gap-3 pt-2">
              <Button variant="hero" className="px-6" onClick={() => persistAndGo(false)}>Begin conversation</Button>
              <Button variant="glass" className="px-6" onClick={() => persistAndGo(true)}>Skip and continue</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Start;


