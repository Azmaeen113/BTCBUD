
import React from 'react';
import { Twitter, Copy, CandlestickChart, LineChart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const Footer = () => {
  const { toast } = useToast();
  const contractAddress = "0x123456789abcdef123456789abcdef123456789";
  
  const copyToClipboard = () => {
    navigator.clipboard.writeText(contractAddress);
    toast({
      title: "Contract address copied!",
      description: "The contract address has been copied to your clipboard.",
      duration: 3000,
    });
  };

  return (
    <footer className="bg-btcbud-black text-white py-12 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-btcbud-yellow">$BTCBUD</h3>
            <p className="mb-4">Join the ultimate crypto community where friendship and profits go hand in hand.</p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="hover:text-btcbud-yellow transition-colors flex items-center gap-2" aria-label="Twitter">
                <Twitter size={24} />
                <span className="text-sm">Twitter</span>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Trading Platforms</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-btcbud-yellow transition-colors flex items-center gap-2">
                  <LineChart size={20} />
                  <span>Buy on Pump.fun</span>
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-btcbud-yellow transition-colors flex items-center gap-2">
                  <CandlestickChart size={20} />
                  <span>Chart on DexScreener</span>
                </a>
              </li>
            </ul>
            
            <div className="mt-6">
              <h4 className="text-lg font-bold mb-2">Contract Address</h4>
              <div className="flex items-center gap-2 bg-btcbud-black/60 p-2 rounded border border-btcbud-yellow/30">
                <div className="text-sm text-gray-400 truncate">{contractAddress}</div>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={copyToClipboard}
                  className="h-8 w-8 p-0 text-btcbud-yellow hover:text-white hover:bg-btcbud-yellow/20"
                >
                  <Copy size={16} />
                </Button>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Legal</h4>
            <p className="text-sm text-gray-400">
              $BTCBUD is a meme coin with no intrinsic value or financial return. 
              There is no formal team or roadmap. This token is meant for entertainment purposes only.
            </p>
            <p className="text-sm mt-4 text-gray-400">
              © 2025 BTCBUD. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
