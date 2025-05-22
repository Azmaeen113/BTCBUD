import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { X, LineChart, CandlestickChart, Copy, Check } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Header = () => {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();
  const contractAddress = "0x123456789abcdef123456789abcdef123456789";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(contractAddress);
    setCopied(true);
    toast({
      title: "Contract address copied!",
      description: "The contract address has been copied to your clipboard.",
      duration: 3000,
    });

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <header className="fixed w-full top-0 z-50 bg-btcbud-yellow backdrop-blur-sm border-b border-btcbud-black/20 py-4 px-4 md:px-8">
      <div className="container mx-auto flex justify-between items-center">
        <nav className="flex items-center gap-5">
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
        </nav>

        {/* Contract Address in top right corner */}
        <div className="flex items-center gap-2 bg-btcbud-black/10 backdrop-blur-sm rounded-lg px-3 py-2 border border-btcbud-black/20">
          <span className="text-xs md:text-sm font-medium text-btcbud-black font-mono">
            {contractAddress}
          </span>
          <Button
            variant="ghost"
            size="sm"
            className="p-1 h-7 w-7 text-btcbud-black hover:bg-btcbud-black/20"
            onClick={copyToClipboard}
          >
            {copied ? <Check size={14} /> : <Copy size={14} />}
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
