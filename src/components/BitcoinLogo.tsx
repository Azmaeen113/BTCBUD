import React, { useState, useEffect } from 'react';

type BitcoinLogoProps = {
  className?: string;
};

const BitcoinLogo = ({ className = "" }: BitcoinLogoProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [sparkles, setSparkles] = useState<Array<{id: number, left: string, top: string, delay: string, duration: string}>>([]);

  // Generate random sparkles on component mount
  useEffect(() => {
    const newSparkles = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: `${Math.random() * 5}s`,
      duration: `${3 + Math.random() * 3}s`
    }));
    setSparkles(newSparkles);
  }, []);

  // Add more sparkles on hover
  const addSparkles = () => {
    if (isHovered) {
      const newSparkle = {
        id: Date.now(),
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        delay: '0s',
        duration: `${1 + Math.random() * 2}s`
      };
      setSparkles(prev => [...prev.slice(-30), newSparkle]); // Keep max 30 sparkles
    }
  };

  // Add sparkles periodically when hovered
  useEffect(() => {
    if (!isHovered) return;

    const interval = setInterval(addSparkles, 300);
    return () => clearInterval(interval);
  }, [isHovered]);

  const handleClick = () => {
    // Add a click animation effect
    const card = document.querySelector('.bitcoin-logo-card');
    card?.classList.add('bitcoin-logo-click');

    // Add burst of sparkles on click
    const burstSparkles = Array.from({ length: 15 }).map((_, i) => ({
      id: Date.now() + i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: '0s',
      duration: `${1 + Math.random()}s`
    }));
    setSparkles(prev => [...prev, ...burstSparkles].slice(-40));

    // Add sparkling line click effect
    const sparklingLine = document.querySelector('.sparkling-line');
    sparklingLine?.classList.add('sparkling-line-click');

    setTimeout(() => {
      card?.classList.remove('bitcoin-logo-click');
      sparklingLine?.classList.remove('sparkling-line-click');
    }, 500);
  };

  return (
    <div
      className={`bitcoin-logo-card relative ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      {/* Main card container */}
      <div className="w-full h-full bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] rounded-xl overflow-hidden relative z-10 flex items-center justify-center p-6 shadow-lg">
        {/* Bitcoin logo image */}
        <div className="relative w-[90%] h-[90%] bitcoin-symbol flex items-center justify-center">
          <img
            src="/bitcoin (2).png"
            alt="Bitcoin Logo"
            className="w-[95%] h-[95%] object-contain drop-shadow-lg"
            style={{
              filter: 'brightness(1.05) contrast(1.05)',
              transform: 'scale(2.1)'
            }}
          />
        </div>

        {/* Subtle hexagonal pattern background */}
        <div className="absolute inset-0 opacity-10 z-0">
          <div className="w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4NiIgaGVpZ2h0PSIxMDAiPgogIDxnIGZpbGw9IiNmZmQ3MDAiIGZpbGwtb3BhY2l0eT0iMC4xIj4KICAgIDxwYXRoIGQ9Ik00MyAwbDQzIDI1djUwbC00MyAyNUwwIDc1VjI1eiIvPgogIDwvZz4KPC9zdmc+')]"></div>
        </div>
      </div>

      {/* Neon border effect */}
      <div className={`absolute inset-0 rounded-xl border-2 border-btcbud-yellow z-0 ${isHovered ? 'border-opacity-100' : 'border-opacity-70'}`}></div>

      {/* Sparkling particles */}
      <div className="absolute inset-0 overflow-hidden rounded-xl z-20 pointer-events-none">
        <div className="sparkle-container">
          {sparkles.map((sparkle) => (
            <div
              key={sparkle.id}
              className={`sparkle-particle bg-btcbud-yellow`}
              style={{
                left: sparkle.left,
                top: sparkle.top,
                animationDelay: sparkle.delay,
                animationDuration: sparkle.duration
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Glow effect */}
      <div className={`absolute inset-0 rounded-xl glow-effect ${isHovered ? 'glow-effect-hover' : ''}`}></div>

      {/* Sparkling moving line effect */}
      <div className="absolute inset-0 rounded-xl overflow-hidden pointer-events-none z-30">
        <div className="sparkling-line"></div>
      </div>
    </div>
  );
};

export default BitcoinLogo;
