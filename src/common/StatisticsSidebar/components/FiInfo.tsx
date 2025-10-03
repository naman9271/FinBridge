import React, { useEffect, useState } from "react";
import Icon, { IconType } from "../../Icon";
import { Link } from "react-router-dom";

export default function FiInfo() {
  const [seed, setSeed] = useState(Date.now());

  useEffect(() => {
    const interval = setInterval(() => {
      setSeed(Date.now());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative border-t border-primary/10 px-6 py-6 space-y-4">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />
      
      {/* Enhanced FinBridge card */}
      <div className="relative group p-4 rounded-2xl bg-gradient-to-r from-primary to-secondary overflow-hidden shadow-xl shadow-primary/25">
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full blur-xl transform translate-x-10 -translate-y-10" />
        <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/10 rounded-full blur-xl transform -translate-x-8 translate-y-8" />

        <div className="relative z-10 flex items-center">
          <div className="flex items-center gap-x-3">
            <div className="relative">
              <div className="absolute inset-0 bg-white/20 rounded-full blur-md" />
              <img 
                src="/logo.png" 
                alt="logo" 
                className="relative brightness-0 invert w-10 h-10 rounded-full p-1 bg-white/10" 
              />
            </div>
            <div>
              <p className="font-black text-xl text-white tracking-wide">FinBridge</p>
              <p className="text-white/80 text-xs font-medium">Financial Freedom</p>
            </div>
          </div>
          
          <div className="ml-auto">
            <div className="flex items-center gap-x-1 text-white/90 text-xs">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span>Active</span>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced time display */}
      <div className="relative p-3 rounded-xl bg-gradient-to-r from-background/80 to-background/60 border border-primary/20" key={seed}>
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-x-2">
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span className="font-mono text-accent font-bold">
              {new Date(Date.now()).toLocaleTimeString()}
            </span>
          </div>
          <span className="text-front/60 text-xs">
            {new Date(Date.now()).toLocaleDateString()}
          </span>
        </div>
      </div>

      {/* Enhanced social links */}
      <div className="space-y-3">
        <h3 className="text-sm font-bold text-front/80 flex items-center gap-x-2">
          <span>🌐</span>
          Connect with us
        </h3>
        <div className="grid grid-cols-2 gap-2">
          {socialLinks.map((social, key) => (
            <Link 
              to={social.link} 
              key={key}
              className="group flex items-center gap-x-2 p-3 rounded-xl bg-gradient-to-r from-background/60 to-background/40 border border-primary/20 hover:border-primary/40 hover:shadow-md hover:shadow-primary/10 transition-all duration-300 hover:scale-105"
            >
              <div className="p-1.5 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                <Icon icon={social.icon} className="text-sm text-primary" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-semibold text-front group-hover:text-primary transition-colors duration-300">
                  {social.name}
                </span>
                <span className="text-xs text-front/50">GitHub</span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Footer info */}
      <div className="pt-3 border-t border-primary/10">
        <p className="text-xs text-front/50 text-center">
          Made with ❤️ for financial literacy
        </p>
      </div>
    </div>
  );
}

const socialLinks: Array<{ link: string; icon: IconType ,name :string}> = [
  { link: "https://github.com/naman9271", icon: "github", name: "Naman" },
 
];
