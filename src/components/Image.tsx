import React from 'react';

type ImageProps = {
  src: string;
  alt: string;
  aspectRatio?: string;
  className?: string;
};

const Image = ({ src, alt, aspectRatio = "square", className = "" }: ImageProps) => {
  return (
    <div className={`relative bg-white/30 backdrop-blur-sm rounded-xl p-4 ${className}`}>
      {/* Running LED border effect */}
      <div className="absolute inset-0 rounded-xl overflow-hidden pointer-events-none">
        <div className="absolute inset-0 rounded-xl border-2 border-transparent bg-gradient-to-r from-btcbud-yellow via-transparent to-btcbud-yellow bg-[length:200%_100%] animate-[led-strip_3s_linear_infinite] opacity-80"></div>
      </div>

      {/* Glowing effect */}
      <div className="absolute inset-0 rounded-xl bg-btcbud-yellow/20 blur-sm animate-pulse pointer-events-none"></div>

      <div className="relative rounded-lg overflow-hidden flex items-center justify-center z-10">
        <img
          src={src}
          alt={alt}
          className="w-auto h-auto max-w-full max-h-full object-contain"
        />
      </div>
    </div>
  );
};

export default Image;