
import React from 'react';

type ImagePlaceholderProps = {
  label: string;
  aspectRatio?: string; // e.g. "square", "video", "4/3", "16/9"
  className?: string;
};

const ImagePlaceholder = ({ label, aspectRatio = "square", className = "" }: ImagePlaceholderProps) => {
  // Define CSS classes for different aspect ratios
  const aspectRatioClasses = {
    square: "aspect-square",
    video: "aspect-video",
    portrait: "aspect-[3/4]",
    landscape: "aspect-[4/3]",
    widescreen: "aspect-[16/9]",
  };

  // Determine which aspect ratio class to use
  const aspectClass = aspectRatio in aspectRatioClasses 
    ? aspectRatioClasses[aspectRatio as keyof typeof aspectRatioClasses]
    : `aspect-[${aspectRatio}]`;

  return (
    <div className={`bg-white/30 backdrop-blur-sm rounded-xl p-4 ${className}`}>
      <div className={`${aspectClass} bg-gradient-to-r from-btcbud-cream/70 via-white/50 to-btcbud-cream/70 animate-shimmer bg-[length:200%_100%] rounded-lg flex items-center justify-center`}>
        <div className="flex flex-col items-center gap-2">
          <div className="w-12 h-12 rounded-full bg-btcbud-yellow/30 flex items-center justify-center">
            <span className="text-xl">📷</span>
          </div>
          <span className="text-sm font-medium text-btcbud-black/60 text-center px-2">{label}</span>
        </div>
      </div>
    </div>
  );
};

export default ImagePlaceholder;
