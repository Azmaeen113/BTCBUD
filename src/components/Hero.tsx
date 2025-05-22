import React from 'react';
import { ChartBarIncreasing, Clock, DollarSign, Shield, Briefcase, Copy, ExternalLink, CandlestickChart, LineChart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import Image from './Image';
import BitcoinLogo from './BitcoinLogo';

const Hero = () => {
  const { toast } = useToast();
  const contractAddress = "BtcFA4n32dCuBvpnco11SNFEoJyCGGC6r6sgemFWMZFQ";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(contractAddress);
    toast({
      title: "Contract address copied!",
      description: "The contract address has been copied to your clipboard.",
      duration: 3000,
    });
  };

  return (
    <section className="hero-gradient min-h-screen w-full px-4 overflow-hidden pt-28 md:pt-24">
      <div className="container mx-auto py-8 md:py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-4 md:space-y-6 text-center lg:text-left">
            {/* Main logo/hero image */}
            <Image
              src="/mainlogo.png"
              alt="$BTCBUD Main Logo"
              className="mb-4 md:mb-6 mx-auto lg:mx-0 w-full max-w-[300px] md:max-w-[400px] lg:max-w-[500px]"
            />

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight">
              <span className="text-white">$</span>
              <span className="text-red-600">BTC</span>
              <span className="text-btcbud-yellow">BUD</span>
            </h1>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-btcbud-yellow tracking-wide" style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)' }}>
              LET'S GET RICH
            </h2>

            <div className="space-y-4 max-w-xl mx-auto lg:mx-0">
              {/* Community section with pump messaging */}
              <div className="space-y-3">
                <Image
                  src="/PUMP FINAL.png"
                  alt="Pump Image"
                  className="w-full max-w-[300px] md:max-w-[400px] lg:max-w-[600px] mx-auto lg:mx-0"
                />
                <p className="text-lg md:text-xl font-medium text-white">
                  WE LOVE THE PUMP. AND IT LOVES US BACK.
                </p>
              </div>

              {/* Bros forever section */}
              <div className="space-y-3">
                <Image
                  src="/BAGS FINAL.png"
                  alt="Friendship Bag Image"
                  className="w-full max-w-[300px] md:max-w-[400px] lg:max-w-[600px] mx-auto lg:mx-0"
                />
                <p className="text-base md:text-lg font-bold text-white">
                  BAGS ARE TEMPORARY. BROS ARE FOREVER.
                </p>
              </div>

              <p className="text-base md:text-lg text-white">
                Join the community of crypto buddies riding the wave together!
              </p>
            </div>

            <div className="flex flex-wrap gap-3 md:gap-4 justify-center lg:justify-start pt-4">
              <Button
                className="bg-btcbud-yellow hover:bg-btcbud-yellow/90 text-btcbud-black font-bold text-base md:text-lg px-6 md:px-8 py-4 md:py-6 rounded-xl btn-pulse flex items-center gap-2"
                onClick={() => window.open('https://pump.fun/coin/BtcFA4n32dCuBvpnco11SNFEoJyCGGC6r6sgemFWMZFQ', '_blank')}
              >
                <LineChart size={20} className="md:w-6 md:h-6" />
                Buy on Pump.fun
              </Button>
              <Button
                variant="outline"
                className="border-2 border-btcbud-green text-btcbud-green hover:bg-btcbud-green hover:text-white font-bold text-base md:text-lg px-4 md:px-6 py-4 md:py-6 rounded-xl flex items-center gap-2"
                onClick={() => window.open('https://dexscreener.com/solana/BtcFA4n32dCuBvpnco11SNFEoJyCGGC6r6sgemFWMZFQ', '_blank')}
              >
                <CandlestickChart size={20} className="md:w-6 md:h-6" />
                View Chart
              </Button>
              <Button
                variant="outline"
                className="border-2 border-btcbud-yellow bg-btcbud-yellow hover:bg-btcbud-yellow/90 text-btcbud-black font-bold text-base md:text-lg px-4 md:px-6 py-4 md:py-6 rounded-xl flex items-center gap-2 shadow-md"
                onClick={copyToClipboard}
              >
                <Copy size={20} className="md:w-6 md:h-6" />
                Copy Address
              </Button>
            </div>
          </div>

          <div className="relative mt-8 lg:mt-0 flex flex-col items-center justify-center">
            {/* Bitcoin Logo Card */}
            <BitcoinLogo className="w-full max-w-[300px] md:max-w-[400px] lg:max-w-[500px] mx-auto" />

            {/* Bitcoin Buddies image - moved below the Bitcoin logo */}
            <div className="mt-16 lg:mt-20">
              <Image
                src="/BRO MODE FINAL.png"
                alt="Bitcoin Buddies"
                className="w-full max-w-[500px] md:max-w-[600px] lg:max-w-[700px] mx-auto float-animation opacity-90"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
