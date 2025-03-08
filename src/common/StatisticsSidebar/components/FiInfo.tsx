import React, { useEffect, useState } from "react";
import Icon, { IconType } from "../../Icon";
import { Link } from "react-router-dom";

export default function FiInfo() {
  const [seed, setSeed] = useState(Date.now());

  useEffect(() => {
    setInterval(() => {
      setSeed(Date.now());
    }, 100);
  }, []);

  return (
    <div className="border-t border-border px-6 py-4 flex flex-col gap-y-1 text-sm font-semibold">
      <div className="bg-primary p-2 rounded-lg mb-3 relative overflow-hidden">
        <div className="absolute-cover bg-gradient-to-r from-transparent to-front/50 h-full w-full" />

        <div className="flex relative z-10">
          <div className="w-1/3 flex flex-col items-center justify-center ml-2"> {/* Added margin-left */}
            <img src="/logo.png" alt="logo" className="brightness-0 invert" />
            <p className="font-black text-lg text-white">FinBridge</p>
          </div>

          <figure role="separator" className="flex-1" />
          {/* ...existing code... */}
        </div>
      </div>

      <div className="flex text-xs gap-x-2" key={seed}>
        <p>{new Date(Date.now()).toLocaleTimeString()}</p>
        <p>{new Date(Date.now()).toDateString()}</p>
      </div>

      <div className="flex items-center gap-x-3">
        Socials
        {socialLinks.map((social, key) => (
          <Link to={social.link} key={key}>
            <Icon icon={social.icon} />
          </Link>
        ))}
      </div>
    </div>
  );
}

const socialLinks: Array<{ link: string; icon: IconType }> = [
  { link: "https://github.com/naman9271", icon: "github" },
  { link: "https://github.com/hxrshxz", icon: "github" },
];
