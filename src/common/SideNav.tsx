import { NavLink } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import Icon, { IconType } from "./Icon";
import { useRef, useState } from "react";
import useClickOutside from "../hooks/useClickOutside";
import ThemeButton from "./ThemeButton";

export default function Navbar() {
  const navItems: Array<{ title: string; link: string; icon: IconType }> = [
    { title: "Home", link: "/home", icon: "home" },
    { title: "Community", link: "/community", icon: "description" },
    { title: "Leaderboard", link: "/leaderboard", icon: "analytics" },
    { title: "AR Advisor", link: "advisor", icon: "ar" },
    { title: "Finny Bot", link: "/finny", icon: "robot" },
    { title: "Account", link: "/account", icon: "person" },
    { title: "Logout", link: "/", icon: "logout" },
  ];

  const [hidden, setHidden] = useState(true);
  const outclickRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  // useClickOutside(outclickRef, () => !hidden && setHidden(false));

  return (
    <>
      <nav className="relative flex flex-col p-6 border-r border-border/30 mobile:hidden min-w-[280px] overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
        <div className="absolute top-0 left-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl transform -translate-x-8 -translate-y-8" />
        <div className="absolute bottom-1/4 right-0 w-24 h-24 bg-secondary/10 rounded-full blur-2xl transform translate-x-8" />
        
        {/* Content overlay */}
        <div className="relative z-10 backdrop-blur-sm bg-background/50 rounded-2xl p-4 h-full">
          {/* Enhanced logo section */}
          <div className="flex items-center gap-x-3 mb-8 p-4 rounded-xl bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-md opacity-30" />
              <img src="/logo.png" alt="logo" className="relative aspect-square w-12 rounded-full shadow-lg" />
            </div>
            <div className="flex flex-col gap-y-1">
              <h1 className="font-black text-2xl tracking-wider bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                FinBridge
              </h1>
              <p className="text-primary text-xs font-semibold opacity-80">
                Unlock Financial Wisdom
              </p>
            </div>
          </div>

          {/* Enhanced navigation items */}
          <div role="list" className="flex flex-col gap-y-2 py-4">
            {navItems.map((item, key) => (
              <NavLink
                to={item.link}
                key={key}
                role="listitem"
                className={({ isActive, isPending }) =>
                  twMerge(
                    "group relative p-4 rounded-xl transition-all duration-300 overflow-hidden",
                    isActive && "bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-primary/25 scale-105",
                    !isActive && "hover:bg-gradient-to-r hover:from-primary/10 hover:to-secondary/10 hover:shadow-md hover:scale-102 border border-transparent hover:border-primary/20",
                    isPending && "animate-pulse pointer-events-none"
                  )
                }
              >
                {/* Animated background for active state */}
                {({ isActive }) => (
                  <>
                    {isActive && (
                      <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                    )}
                    {!isActive && (
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                    )}
                    <span className="relative z-10 flex items-center gap-x-3 text-base font-semibold">
                      <div className={twMerge(
                        "p-2 rounded-lg transition-all duration-300",
                        isActive ? "bg-white/20" : "bg-primary/10 group-hover:bg-primary/20"
                      )}>
                        <Icon icon={item.icon} className="text-lg" />
                      </div>
                      {item.title}
                    </span>
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* Progress section */}
          <div className="mt-auto p-4 rounded-xl bg-gradient-to-r from-accent/10 to-accent/5 border border-accent/20">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-front/80">Daily Goal</span>
              <span className="text-xs font-mono text-accent font-bold">75%</span>
            </div>
            <div className="h-2 bg-accent/20 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-accent to-primary rounded-full w-3/4 transition-all duration-1000" />
            </div>
          </div>
        </div>
      </nav>

      {hidden && (
        <button onClick={() => setHidden(false)} className="widescreen:hidden">
          <Icon icon="menu" className="text-4xl absolute top-2 left-2" />
        </button>
      )}
      <div className="absolute right-3 top-3 widescreen:hidden">
        <ThemeButton className="text-2xl p-2 aspect-square bg-foreground rounded-full flex justify-center items-center border border-front border-opacity-40" />
      </div>
      {!hidden && (
        <nav
          className="z-10 flex flex-col p-6 border-r border-border widescreen:hidden absolute top-0 left-0 bg-background h-full"
          ref={outclickRef}
        >
          <div className="absolute bottom-8 right-8 flex items-center" onClick={() => (setHidden(true))}>
            <p className="underline">Close</p>
            <Icon icon="close" className="text-xl" />
          </div>
          <div className="flex items-center gap-x-2">
            <img src="/logo.png" alt="logo" className="aspect-square w-10" />
            <div className="flex flex-col gap-y-1">
              <h1 className="font-black text-2xl tracking-wider">FinBridge</h1>
              <p className="text-primary text-xs font-semibold">
                Unlock Financial Wisdom
              </p>
            </div>
          </div>

          <div role="list" className="flex flex-col gap-y-2 py-4">
            {navItems.map((item, key) => (
              <NavLink
                to={item.link}
                key={key}
                role="listitem"
                className={({ isActive, isPending }) =>
                  twMerge(
                    "p-2 rounded-lg",
                    isActive && "bg-primary text-back pointer-events-none",
                    !isActive && "hover:outline hover:outline-[1.5px]",
                    isPending && "animate-pulse pointer-events-none"
                  )
                }
              >
                <span className="flex items-center gap-x-2 text-base font-semibold">
                  <Icon icon={item.icon} className="text-lg" />
                  {item.title}
                </span>
              </NavLink>
            ))}
          </div>
        </nav>
      )}
    </>
  );
}
