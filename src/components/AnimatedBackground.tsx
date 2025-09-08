import React from 'react';

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 blur-3xl animate-pulse opacity-50"></div>
      <div className="absolute top-3/4 right-1/4 w-80 h-80 rounded-full bg-gradient-to-r from-accent/10 to-primary-glow/10 blur-3xl animate-pulse delay-1000 opacity-50"></div>
      <div className="absolute top-1/2 left-1/3 w-64 h-64 rounded-full bg-gradient-to-r from-primary-glow/10 to-primary/10 blur-3xl animate-pulse delay-2000 opacity-50"></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>
      
      {/* Gradient mesh */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 50%, hsl(var(--primary)) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, hsl(var(--accent)) 0%, transparent 50%),
            radial-gradient(circle at 40% 80%, hsl(var(--primary-glow)) 0%, transparent 50%)
          `,
          backgroundSize: '100% 100%',
          animation: 'pulse 4s ease-in-out infinite',
        }}
      />
    </div>
  );
};

export default AnimatedBackground;