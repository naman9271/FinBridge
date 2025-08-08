import { Link } from "react-router-dom";
import Header from "../../common/Header";
import ThemeButton from "../../common/ThemeButton";
import Hero from "./components/Hero";

export default function LandingPage() {
  return (
    <section className="relative w-screen min-h-screen overflow-hidden">
      {/* Enhanced background with animated gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-accent/15 rounded-full blur-3xl animate-pulse-slow" />
      
      {/* Enhanced navigation bar */}
      <nav className="relative z-20 backdrop-blur-xl bg-background/70 border-b border-primary/20 shadow-lg">
        <div className="flex items-center justify-between px-8 py-4">
          {/* Logo section */}
          <div className="flex items-center gap-x-3">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-md opacity-30" />
              <img src="/logo.png" alt="logo" className="relative w-10 h-10 rounded-full shadow-lg" />
            </div>
            <div>
              <h1 className="font-black text-xl tracking-wider bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                FinBridge
              </h1>
            </div>
          </div>

          {/* Enhanced navigation links */}
          <div className="hidden md:flex items-center gap-x-8">
            {navLinks.map((navLink, i) => (
              <div key={i} className="flex items-center gap-x-4">
                <Link 
                  to={navLink.to} 
                  target="_blank" 
                  className="group relative px-4 py-2 text-front/80 hover:text-primary font-medium transition-all duration-300 hover:scale-105"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative z-10">{navLink.title}</span>
                </Link>
                {i < navLinks.length - 1 && (
                  <div className="w-1 h-1 bg-primary/40 rounded-full" />
                )}
              </div>
            ))}
            
            <div className="w-1 h-1 bg-primary/40 rounded-full" />
            
            <Link
              to="/Amex_Hackathon.pdf"
              target="_blank"
              className="group relative px-4 py-2 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-secondary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
              <span className="relative z-10">📄 PPT</span>
            </Link>
            
            <Link
              to="https://youtu.be/ZniI5oX7PiA"
              target="_blank"
              className="group relative px-4 py-2 bg-gradient-to-r from-accent/20 to-accent/10 border border-accent/30 text-accent font-semibold rounded-xl hover:shadow-lg hover:shadow-accent/25 transition-all duration-300 hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-accent/30 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
              <span className="relative z-10">🎥 Video</span>
            </Link>
          </div>

          {/* Enhanced theme button */}
          <ThemeButton className="relative p-3 bg-gradient-to-r from-primary/10 to-secondary/10 backdrop-blur-sm rounded-xl border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-110 shadow-lg" />
        </div>

        {/* Mobile navigation */}
        <div className="md:hidden flex justify-center pb-4">
          <div className="flex items-center gap-x-4 overflow-x-auto px-4">
            {navLinks.map((navLink, i) => (
              <Link 
                key={i}
                to={navLink.to} 
                target="_blank" 
                className="whitespace-nowrap px-3 py-2 text-sm bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg border border-primary/20"
              >
                {navLink.title}
              </Link>
            ))}
            <Link
              to="/Amex_Hackathon.pdf"
              target="_blank"
              className="whitespace-nowrap px-3 py-2 text-sm bg-gradient-to-r from-primary to-secondary text-white rounded-lg"
            >
              PPT
            </Link>
            <Link
              to="https://youtu.be/ZniI5oX7PiA"
              target="_blank"
              className="whitespace-nowrap px-3 py-2 text-sm bg-gradient-to-r from-accent/20 to-accent/10 border border-accent/30 text-accent rounded-lg"
            >
              Video
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero section */}
      <Hero />
    </section>
  );
}

const navLinks = [
  {
    title: "Home",
    to: "/",
  },
  {
    title: "Team",
    to: "/team",
  },
];
