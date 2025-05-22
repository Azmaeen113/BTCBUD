import React from 'react';
import { X, CandlestickChart, LineChart } from "lucide-react";

const Footer = () => {

  return (
    <footer className="bg-btcbud-black text-white py-12 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-btcbud-yellow">$</span>
              <span className="text-red-600">BTC</span>
              <span className="text-btcbud-yellow">BUD</span>
            </h3>
            <p className="mb-4">Join the ultimate crypto community where friendship and profits go hand in hand.</p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="hover:text-btcbud-yellow transition-colors flex items-center gap-2" aria-label="X">
                <X size={24} />
                <span className="text-sm">X</span>
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
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Legal</h4>
            <p className="text-sm text-gray-400">
              <span className="text-btcbud-yellow">$</span><span className="text-red-600">BTC</span><span className="text-btcbud-yellow">BUD</span> is a meme coin with no intrinsic value or financial return.
              There is no formal team or roadmap. This token is meant for entertainment purposes only.
            </p>
            <p className="text-sm mt-4 text-gray-400">
              © 2025 <span className="text-red-600">BTC</span><span className="text-btcbud-yellow">BUD</span>. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
