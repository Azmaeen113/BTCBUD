
import React from 'react';
import { Shield, DollarSign, ChartBarIncreasing, Briefcase } from 'lucide-react';

const Features = () => {
  return (
    <section className="py-16 px-4 bg-btcbud-yellow">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">UP ONLY. BRO MODE.</h2>
          <p className="text-lg max-w-2xl mx-auto">
            Join the $BTCBUD community and experience the power of crypto brotherhood.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-btcbud-cream rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border-2 border-btcbud-yellow transform hover:-translate-y-1 transition-transform">
            <div className="w-14 h-14 bg-btcbud-yellow rounded-full flex items-center justify-center mb-4">
              <Shield className="h-7 w-7 text-btcbud-black" />
            </div>
            <h3 className="text-xl font-bold mb-2">Community Shield</h3>
            <p>Protected by our strong community of crypto buddies looking out for each other.</p>
          </div>

          <div className="bg-btcbud-cream rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border-2 border-btcbud-yellow transform hover:-translate-y-1 transition-transform">
            <div className="w-14 h-14 bg-btcbud-yellow rounded-full flex items-center justify-center mb-4">
              <DollarSign className="h-7 w-7 text-btcbud-black" />
            </div>
            <h3 className="text-xl font-bold mb-2">Wealth Building</h3>
            <p>Creating opportunities for every bro to achieve financial freedom together.</p>
          </div>

          <div className="bg-btcbud-cream rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border-2 border-btcbud-yellow transform hover:-translate-y-1 transition-transform">
            <div className="w-14 h-14 bg-btcbud-green rounded-full flex items-center justify-center mb-4">
              <ChartBarIncreasing className="h-7 w-7 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">Green Candles</h3>
            <p>We love the pump, and the pump loves us back. Up only from here.</p>
          </div>

          <div className="bg-btcbud-cream rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border-2 border-btcbud-yellow transform hover:-translate-y-1 transition-transform">
            <div className="w-14 h-14 bg-btcbud-yellow rounded-full flex items-center justify-center mb-4">
              <Briefcase className="h-7 w-7 text-btcbud-black" />
            </div>
            <h3 className="text-xl font-bold mb-2">Diamond Hands</h3>
            <p>Holding strong through all market conditions. Bags are temporary, bros are forever.</p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-btcbud-cream rounded-xl p-6 border-2 border-btcbud-green transform hover:scale-105 transition-transform">
            <h3 className="text-2xl font-bold mb-2 flex items-center justify-center gap-2">
              <span className="text-btcbud-green">BAG OF FRIENDSHIP</span>
              <span>👜</span>
            </h3>
            <p className="text-lg">Everyone who holds $BTCBUD is a part of our brotherhood.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
