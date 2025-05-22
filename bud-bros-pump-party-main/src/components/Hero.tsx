
import React from 'react';
import { ChartBarIncreasing, Clock, DollarSign, Shield, Briefcase, Copy, ExternalLink, CandlestickChart, LineChart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import ImagePlaceholder from './ImagePlaceholder';

const Hero = () => {
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
    <section className="hero-gradient pt-28 pb-16 md:pt-36 md:pb-24 px-4 overflow-hidden">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-center lg:text-left">
            {/* Image space for logo/hero image - will be replaced with actual image */}
            <ImagePlaceholder 
              label="Main Logo/Hero Image" 
              aspectRatio="4/3" 
              className="mb-6 mx-auto lg:mx-0 max-w-md"
            />
            
            <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight">
              <span className="text-btcbud-black">$</span>
              <span className="text-btcbud-yellow">BTC</span>
              <span className="text-btcbud-black">BUD</span>
            </h1>
            
            <h2 className="text-3xl md:text-4xl font-bold">
              LET'S GET RICH
            </h2>
            
            <div className="space-y-4 max-w-xl mx-auto lg:mx-0">
              {/* Community section with pump messaging - space for image 2 */}
              <div className="space-y-3">
                <ImagePlaceholder 
                  label="Pump Image" 
                  aspectRatio="widescreen" 
                />
                <p className="text-xl font-medium">
                  WE LOVE THE PUMP. AND IT LOVES US BACK.
                </p>
              </div>
              
              {/* Bros forever section - space for image 3 */}
              <div className="space-y-3">
                <ImagePlaceholder 
                  label="Friendship Bag Image" 
                  aspectRatio="widescreen" 
                />
                <p className="text-lg font-bold">
                  BAGS ARE TEMPORARY. BROS ARE FOREVER.
                </p>
              </div>
              
              <p className="text-lg">
                Join the community of crypto buddies riding the wave together!
              </p>
              
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start pt-2">
                <div className="flex items-center gap-2 bg-white/50 px-3 py-2 rounded-lg backdrop-blur-sm">
                  <Clock size={20} className="text-btcbud-yellow" />
                  <span className="font-medium">Early</span>
                </div>
                <div className="flex items-center gap-2 bg-white/50 px-3 py-2 rounded-lg backdrop-blur-sm">
                  <DollarSign size={20} className="text-btcbud-yellow" />
                  <span className="font-medium">Potential</span>
                </div>
                <div className="flex items-center gap-2 bg-white/50 px-3 py-2 rounded-lg backdrop-blur-sm">
                  <Shield size={20} className="text-btcbud-yellow" />
                  <span className="font-medium">Community</span>
                </div>
                <div className="flex items-center gap-2 bg-white/50 px-3 py-2 rounded-lg backdrop-blur-sm">
                  <Briefcase size={20} className="text-btcbud-yellow" />
                  <span className="font-medium">Hodl</span>
                </div>
                <div className="flex items-center gap-2 bg-white/50 px-3 py-2 rounded-lg backdrop-blur-sm">
                  <ChartBarIncreasing size={20} className="text-btcbud-green" />
                  <span className="font-medium">Pumping</span>
                </div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-4">
              <Button className="bg-btcbud-yellow hover:bg-btcbud-yellow/90 text-btcbud-black font-bold text-lg px-8 py-6 rounded-xl btn-pulse flex items-center gap-2">
                <LineChart size={24} />
                Buy on Pump.fun
              </Button>
              <Button variant="outline" className="border-2 border-btcbud-green text-btcbud-green hover:bg-btcbud-green hover:text-btcbud-cream font-bold text-lg px-6 py-6 rounded-xl flex items-center gap-2">
                <CandlestickChart size={24} />
                View Chart
              </Button>
              <Button 
                variant="outline" 
                className="border-2 border-btcbud-black hover:bg-btcbud-black hover:text-btcbud-cream text-btcbud-black font-bold text-lg px-6 py-6 rounded-xl flex items-center gap-2"
                onClick={copyToClipboard}
              >
                <Copy size={24} />
                Copy Address
              </Button>
            </div>
          </div>
          
          <div className="relative">
            {/* Space for additional accent image - image 4 */}
            <ImagePlaceholder 
              label="Bitcoin Buddies" 
              aspectRatio="square"
              className="float-animation"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
