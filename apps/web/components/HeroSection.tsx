import React from "react";
import Image from "next/image";
import {
  Play,
  ArrowUpRight,
  Globe,
  Server,
  Monitor,
  Activity,
} from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative w-full h-screen bg-[#050505] overflow-hidden flex flex-col justify-end pb-12 md:pb-24">
      {/* --- Background Assets --- */}

      {/* 1. Subtle linear Overlay for depth */}
      <div className="absolute inset-0 bg-linear-to-b from-black/20 via-transparent to-black/95 z-10 pointer-events-none" />

      {/* 2. The Network Map Image 
          Using a map that emphasizes global connectivity nodes. */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop"
          alt="Global DePin Network Map"
          fill
          className="object-cover opacity-50 grayscale mix-blend-screen"
          priority
        />
        {/* Radial linear mask creates the "spotlight" effect on the text area */}
        <div className="absolute inset-0 bg-[radial-linear(circle_at_bottom_left,transparent_0%,#050505_75%)]" />
      </div>

      {/* --- Main Content --- */}
      <div className="relative z-20 w-full mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
        {/* Left Side: Text & Buttons */}
        <div className="flex flex-col gap-6 md:gap-8 w-full min-w-6xl">
          {/* Badge for Uptime Status */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-900/30 border border-green-500/30 w-fit backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-green-400 text-xs font-mono uppercase tracking-wider">
              Network Operational
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.1] tracking-tight">
            Monitor the Web via <br />
            Global{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#CBF34D] to-green-600">
              DePIN Nodes{" "}
            </span>
          </h1>

          <p className="text-gray-400 text-lg md:text-xl max-w-lg leading-relaxed">
            Crowdsourced uptime monitoring powered by thousands of nodes.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-2">
            {/* Primary Button */}
            <button className="group relative flex items-center gap-2 bg-[#CBF34D] text-black px-8 py-3.5 rounded-full font-semibold transition-all hover:bg-[#bce63b] hover:scale-105 active:scale-95">
              Deploy Node
              <div className="bg-black text-[#CBF34D] rounded-full p-1 transition-transform group-hover:rotate-45">
                <ArrowUpRight size={18} />
              </div>
            </button>

            {/* Secondary Button */}
            <button className="flex items-center gap-2 px-8 py-3.5 rounded-full border border-gray-700 text-white font-medium backdrop-blur-sm hover:bg-white/10 transition-all active:scale-95">
              <span className="bg-gray-800 p-1 rounded-full border border-gray-600">
                <Activity size={14} className="text-gray-300 ml-0.5 mr-0.5" />
              </span>
              Live Map
            </button>
          </div>
        </div>

        {/* Right Side: Node Stats / Platforms */}
        <div className="flex flex-col items-start md:items-end justify-end gap-3 text-gray-400">
          <span className="text-sm font-medium tracking-wide">
            Run a verification node on:
          </span>

          <div className="flex gap-4">
            {/* Platform Icons */}
            {[
              { icon: <Globe size={24} />, label: "Browser Ext" },
              { icon: <Monitor size={24} />, label: "Desktop App" },
              { icon: <Server size={24} />, label: "Docker/CLI" },
            ].map((platform, index) => (
              <div
                key={index}
                className="w-12 h-12 rounded-full bg-white/5 border border-white/10 backdrop-blur-md flex items-center justify-center text-gray-300 hover:bg-[#CBF34D] hover:text-black hover:border-[#CBF34D] transition-all duration-300 cursor-pointer group"
                title={platform.label}
              >
                <div className="transition-transform group-hover:scale-110">
                  {platform.icon}
                </div>
              </div>
            ))}
          </div>

          <p className="text-xs text-gray-500 mt-2">
            *Supports Raspberry Pi & Light Clients
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
