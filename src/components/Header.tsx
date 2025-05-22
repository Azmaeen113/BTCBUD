import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { X, LineChart, CandlestickChart, Copy, Check } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Header = () => {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();
  const contractAddress = "BtcFA4n32dCuBvpnco11SNFEoJyCGGC6r6sgemFWMZFQ";

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
    <header className="fixed w-full top-0 z-50 bg-btcbud-yellow backdrop-blur-sm border-b border-btcbud-black/20 py-2 md:py-4 px-2 md:px-8">
      <div className="container mx-auto">
        {/* Mobile Layout */}
        <div className="flex md:hidden flex-col gap-2">
          {/* Top row: Social icons */}
          <nav className="flex items-center justify-center gap-3">
            <a href="https://dexscreener.com/solana/BtcFA4n32dCuBvpnco11SNFEoJyCGGC6r6sgemFWMZFQ" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-btcbud-black hover:text-btcbud-black/70 transition-colors" aria-label="DexScreener">
              <img src="/dexscreenerlogo.jpg" alt="DexScreener" className="h-8 w-8" />
            </a>
            <a href="https://pump.fun/coin/BtcFA4n32dCuBvpnco11SNFEoJyCGGC6r6sgemFWMZFQ" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-btcbud-black hover:text-btcbud-black/70 transition-colors" aria-label="Pump.fun">
              <img src="/pumpfunlogo.png" alt="Pump.fun" className="h-8 w-8" />
            </a>
            <a href="https://x.com/i/communities/1925650218185269751/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-btcbud-black hover:text-btcbud-black/70 transition-colors" aria-label="X">
              <img src="/twitter.png" alt="X" className="h-8 w-8" />
            </a>
          </nav>

          {/* Bottom row: Contract Address */}
          <div className="flex items-center justify-center">
            <div className="flex items-center gap-2 bg-btcbud-black/10 backdrop-blur-sm rounded-lg px-2 py-1 border border-btcbud-black/20">
              <span className="text-xs font-medium text-btcbud-black font-mono truncate max-w-[200px]">
                {contractAddress}
              </span>
              <Button
                variant="ghost"
                size="sm"
                className="p-1 h-6 w-6 text-btcbud-black hover:bg-btcbud-black/20 flex-shrink-0"
                onClick={copyToClipboard}
              >
                {copied ? <Check size={12} /> : <Copy size={12} />}
              </Button>
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:flex justify-between items-center">
          <nav className="flex items-center gap-5">
            <a href="https://dexscreener.com/solana/BtcFA4n32dCuBvpnco11SNFEoJyCGGC6r6sgemFWMZFQ" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-btcbud-black hover:text-btcbud-black/70 transition-colors" aria-label="DexScreener">
              <img src="/dexscreenerlogo.jpg" alt="DexScreener" className="h-12 w-12" />
              <span className="text-xs">DexScreener</span>
            </a>
            <a href="https://pump.fun/coin/BtcFA4n32dCuBvpnco11SNFEoJyCGGC6r6sgemFWMZFQ" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-btcbud-black hover:text-btcbud-black/70 transition-colors" aria-label="Pump.fun">
              <img src="/pumpfunlogo.png" alt="Pump.fun" className="h-12 w-12" />
              <span className="text-xs">Pump.fun</span>
            </a>
            <a href="https://x.com/i/communities/1925650218185269751/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-btcbud-black hover:text-btcbud-black/70 transition-colors" aria-label="X">
              <img src="/twitter.png" alt="X" className="h-12 w-12" />
              <span className="text-xs">X</span>
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
      </div>
    </header>
  );
};

export default Header;
