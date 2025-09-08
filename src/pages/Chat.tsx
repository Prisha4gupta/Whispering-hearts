import React, { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';
import { useScrollEffects } from '@/hooks/use-scroll-effects';

type Message = {
  id: string;
  role: 'user' | 'assistant';
  text: string;
};

const Chat = () => {
  useScrollEffects();
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [meta, setMeta] = useState<{ lang: string; mode: string; topic: string }>({ lang: '', mode: '', topic: '' });
  const endRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const lang = localStorage.getItem('wh_lang') || 'English';
    const mode = localStorage.getItem('wh_mode') || 'Text';
    const topic = localStorage.getItem('wh_topic') || 'General support';
    setMeta({ lang, mode, topic });

    setMessages([
      {
        id: 'm0',
        role: 'assistant',
        text: `Hi! I’m here to listen. We’ll chat in ${lang}. You can tell me anything. If you want, we can start with what’s on your mind about “${topic}”.`,
      },
    ]);
  }, []);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages.length]);

  const send = () => {
    const trimmed = input.trim();
    if (!trimmed) return;
    const userMsg: Message = { id: crypto.randomUUID(), role: 'user', text: trimmed };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');

    // Simulated assistant reply
    setTimeout(() => {
      const reply: Message = {
        id: crypto.randomUUID(),
        role: 'assistant',
        text: `Thanks for sharing. I hear you. Would it help if we tried a short grounding exercise?` ,
      };
      setMessages((prev) => [...prev, reply]);
    }, 400);
  };

  const onKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  };

  return (
    <section className="min-h-screen px-4 py-24 bg-pattern">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-2 mb-4" data-reveal>
          <Heart className="w-5 h-5 text-accent" />
          <p className="text-sm text-muted-foreground">Language: {meta.lang} • Mode: {meta.mode} • Topic: {meta.topic}</p>
        </div>
        <Card className="glass-card" data-reveal>
          <CardContent className="p-0">
            <div className="h-[60vh] overflow-y-auto p-4 space-y-3">
              {messages.map((m) => (
                <div key={m.id} className={m.role === 'user' ? 'text-right' : 'text-left'}>
                  <div className={`inline-block px-4 py-2 rounded-2xl ${m.role === 'user' ? 'bg-primary/20 border border-primary/30' : 'bg-secondary/30 border border-secondary/40'} `}>
                    <span className="whitespace-pre-wrap leading-relaxed">{m.text}</span>
                  </div>
                </div>
              ))}
              <div ref={endRef} />
            </div>

            <div className="p-3 border-t border-border flex gap-2">
              <Input
                placeholder="Type a message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={onKeyDown}
              />
              <Button variant="hero" onClick={send}>Send</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Chat;


