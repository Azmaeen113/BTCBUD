import React from 'react';
import { Button } from "@/components/ui/button";
import { X, LineChart, CandlestickChart } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed w-full top-0 z-50 bg-btcbud-yellow backdrop-blur-sm border-b border-btcbud-black/20 py-4 px-4 md:px-8">
      <div className="container mx-auto flex justify-between items-center">
        {/* Optional: Add logo here if needed */}
        <nav className="flex items-center justify-center gap-5">
          <a href="#" className="flex items-center gap-1 text-btcbud-black hover:text-btcbud-black/70 transition-colors" aria-label="DexScreener">
            <img src="/dexscreenerlogo.jpg" alt="DexScreener" className="h-12 w-12" />
            <span className="text-xs hidden md:block">DexScreener</span>
          </a>
          <a href="#" className="flex items-center gap-1 text-btcbud-black hover:text-btcbud-black/70 transition-colors" aria-label="Pump.fun">
            <img src="/pumpfunlogo.png" alt="Pump.fun" className="h-12 w-12" />
            <span className="text-xs hidden md:block">Pump.fun</span>
          </a>
          <a href="#" className="flex items-center gap-1 text-btcbud-black hover:text-btcbud-black/70 transition-colors" aria-label="X">
             <img src="/twitter.png" alt="X" className="h-12 w-12" />
            <span className="text-xs hidden md:block">X</span>
          </a>
          <Button variant="outline" size="sm" className="hidden sm:flex gap-1 border-btcbud-black text-btcbud-black hover:bg-btcbud-black hover:text-btcbud-yellow">
            <span className="font-bold">Connect</span>
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
