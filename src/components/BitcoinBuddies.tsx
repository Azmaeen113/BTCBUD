
import React from 'react';

const BitcoinBuddies = () => {
  return (
    <div className="relative h-[400px] w-full">
      {/* Main large buddy with sunglasses */}
      <div className="absolute top-10 left-1/2 transform -translate-x-1/2 animate-float z-20">
        <div className="relative">
          {/* Main body */}
          <div className="w-40 h-40 bg-btcbud-yellow rounded-full border-4 border-btcbud-black flex items-center justify-center relative">
            {/* Bitcoin logo */}
            <div className="absolute text-4xl font-bold">₿</div>
            {/* Face */}
            <div className="absolute top-6 w-full flex justify-center">
              {/* Sunglasses */}
              <div className="w-24 h-8 bg-btcbud-black rounded-lg"></div>
            </div>
            {/* Smile */}
            <div className="absolute bottom-8 w-16 h-6 border-b-4 border-btcbud-black rounded-lg"></div>
          </div>
          {/* Arms */}
          <div className="absolute top-16 -left-10 w-12 h-10 bg-btcbud-yellow border-4 border-btcbud-black rounded-full"></div>
          <div className="absolute top-16 -right-10 w-12 h-10 bg-btcbud-yellow border-4 border-btcbud-black rounded-full"></div>
          {/* Legs */}
          <div className="absolute -bottom-10 left-6 w-12 h-14 bg-btcbud-yellow border-4 border-btcbud-black rounded-full"></div>
          <div className="absolute -bottom-10 right-6 w-12 h-14 bg-btcbud-yellow border-4 border-btcbud-black rounded-full"></div>
        </div>
      </div>

      {/* Bitcoin buddy left */}
      <div className="absolute bottom-0 left-10 animate-float-delay z-10">
        <div className="relative">
          {/* Main body */}
          <div className="w-28 h-28 bg-btcbud-yellow rounded-full border-4 border-btcbud-black flex items-center justify-center relative">
            {/* Bitcoin logo */}
            <div className="absolute text-3xl font-bold">₿</div>
            {/* Eyes */}
            <div className="absolute top-8 w-full flex justify-center gap-6">
              <div className="w-3 h-3 bg-btcbud-black rounded-full"></div>
              <div className="w-3 h-3 bg-btcbud-black rounded-full"></div>
            </div>
            {/* Smile */}
            <div className="absolute bottom-6 w-12 h-4 border-b-4 border-btcbud-black rounded-lg"></div>
          </div>
          {/* Arms */}
          <div className="absolute top-12 -left-6 w-10 h-8 bg-btcbud-yellow border-4 border-btcbud-black rounded-full"></div>
          {/* Legs */}
          <div className="absolute -bottom-8 left-4 w-10 h-12 bg-btcbud-yellow border-4 border-btcbud-black rounded-full"></div>
          <div className="absolute -bottom-8 right-4 w-10 h-12 bg-btcbud-yellow border-4 border-btcbud-black rounded-full"></div>
        </div>
      </div>

      {/* Bitcoin buddy right */}
      <div className="absolute bottom-20 right-10 animate-float z-10">
        <div className="relative">
          {/* Main body */}
          <div className="w-28 h-28 bg-btcbud-yellow rounded-full border-4 border-btcbud-black flex items-center justify-center relative">
            {/* Bitcoin logo */}
            <div className="absolute text-3xl font-bold">₿</div>
            {/* Eyes */}
            <div className="absolute top-8 w-full flex justify-center gap-6">
              <div className="w-3 h-3 bg-btcbud-black rounded-full"></div>
              <div className="w-3 h-3 bg-btcbud-black rounded-full"></div>
            </div>
            {/* Smile */}
            <div className="absolute bottom-6 w-12 h-4 border-b-4 border-btcbud-black rounded-lg"></div>
          </div>
          {/* Arms */}
          <div className="absolute top-12 -right-6 w-10 h-8 bg-btcbud-yellow border-4 border-btcbud-black rounded-full transform rotate-45"></div>
          {/* Legs */}
          <div className="absolute -bottom-8 left-4 w-10 h-12 bg-btcbud-yellow border-4 border-btcbud-black rounded-full"></div>
          <div className="absolute -bottom-8 right-4 w-10 h-12 bg-btcbud-yellow border-4 border-btcbud-black rounded-full"></div>
        </div>
      </div>

      {/* Bitcoin buddy bottom */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-float-delay z-10">
        <div className="relative">
          {/* Main body */}
          <div className="w-32 h-32 bg-btcbud-yellow rounded-full border-4 border-btcbud-black flex items-center justify-center relative">
            {/* Bitcoin logo */}
            <div className="absolute text-3xl font-bold">₿</div>
            {/* Eyes */}
            <div className="absolute top-8 w-full flex justify-center gap-7">
              <div className="w-3 h-3 bg-btcbud-black rounded-full"></div>
              <div className="w-3 h-3 bg-btcbud-black rounded-full"></div>
            </div>
            {/* Smile */}
            <div className="absolute bottom-7 w-14 h-5 border-b-4 border-btcbud-black rounded-lg"></div>
          </div>
          {/* Arms */}
          <div className="absolute top-14 -left-8 w-12 h-10 bg-btcbud-yellow border-4 border-btcbud-black rounded-full"></div>
          <div className="absolute top-14 -right-8 w-12 h-10 bg-btcbud-yellow border-4 border-btcbud-black rounded-full"></div>
          {/* Legs */}
          <div className="absolute -bottom-10 left-6 w-10 h-14 bg-btcbud-yellow border-4 border-btcbud-black rounded-full"></div>
          <div className="absolute -bottom-10 right-6 w-10 h-14 bg-btcbud-yellow border-4 border-btcbud-black rounded-full"></div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 right-20 animate-spin-slow">
        <div className="w-16 h-16 bg-btcbud-yellow rounded-full border-4 border-btcbud-black flex items-center justify-center">
          <span className="text-2xl font-bold">$</span>
        </div>
      </div>
      
      <div className="absolute top-40 left-10 animate-pulse-gentle">
        <div className="w-20 h-20 bg-btcbud-green rounded-full border-4 border-btcbud-black flex items-center justify-center">
          <div className="h-14 w-4 bg-btcbud-green-dark"></div>
        </div>
      </div>

      <div className="absolute bottom-60 right-10">
        <div className="w-12 h-12 bg-btcbud-cream flex items-center justify-center">
          <div className="text-3xl">✨</div>
        </div>
      </div>
    </div>
  );
};

export default BitcoinBuddies;
