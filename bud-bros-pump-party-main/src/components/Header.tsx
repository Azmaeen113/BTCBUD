
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Mail, Twitter, Copy, Check, LineChart, CandlestickChart } from "lucide-react";
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
    <header className="fixed w-full top-0 z-50 bg-btcbud-cream/90 backdrop-blur-sm border-b border-btcbud-yellow/20 py-4 px-4 md:px-8">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="flex items-center justify-center sm:justify-start w-full sm:w-auto">
          <div className="bg-white/70 rounded-lg px-3 py-2 flex items-center gap-2 max-w-full overflow-hidden border border-btcbud-yellow/30">
            <span className="text-xs md:text-sm font-medium whitespace-nowrap overflow-hidden text-ellipsis">
              {contractAddress.slice(0, 6)}...{contractAddress.slice(-6)}
            </span>
            <Button 
              variant="ghost" 
              size="sm" 
              className="p-1 h-7 w-7"
              onClick={copyToClipboard}
            >
              {copied ? <Check size={16} className="text-btcbud-green" /> : <Copy size={16} />}
            </Button>
          </div>
        </div>
        
        <nav className="flex items-center justify-center gap-5">
          <a href="#" className="flex flex-col items-center gap-1 hover:text-btcbud-yellow transition-colors" aria-label="DexScreener">
            <CandlestickChart size={22} />
            <span className="text-xs hidden md:block">DexScreener</span>
          </a>
          <a href="#" className="flex flex-col items-center gap-1 hover:text-btcbud-yellow transition-colors" aria-label="Pump.fun">
            <LineChart size={22} />
            <span className="text-xs hidden md:block">Pump.fun</span>
          </a>
          <a href="#" className="flex flex-col items-center gap-1 hover:text-btcbud-yellow transition-colors" aria-label="Twitter">
            <Twitter size={22} />
            <span className="text-xs hidden md:block">Twitter</span>
          </a>
          <Button variant="outline" size="sm" className="hidden sm:flex gap-1 border-btcbud-yellow text-btcbud-black hover:bg-btcbud-yellow hover:text-btcbud-black">
            <span className="font-bold">Connect</span>
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
