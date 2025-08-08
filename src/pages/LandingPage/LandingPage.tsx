import { Link } from "react-router-dom";
import Header from "../../common/Header";
import ThemeButton from "../../common/ThemeButton";
import Hero from "./components/Hero";

export default function LandingPage() {
  return (
    <section className="relative w-screen min-h-screen overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse opacity-60" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-pulse opacity-40" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-pulse opacity-30" style={{ animationDelay: '4s' }} />
      </div>

      {/* Professional Navigation Bar */}
      <nav className="relative z-50 backdrop-blur-xl bg-background/80 border-b border-primary/10 shadow-lg">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-xl blur-sm opacity-30" />
                <img src="/logo.png" alt="FinBridge" className="relative w-12 h-12 rounded-xl shadow-lg" />
              </div>
              <div>
                <h1 className="text-2xl font-black bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  FinBridge
                </h1>
                <p className="text-xs text-primary/80 font-medium -mt-1">Financial Education Platform</p>
              </div>
            </div>

            {/* Professional Navigation Links */}
            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.to}
                  target={link.external ? "_blank" : "_self"}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className="group relative px-4 py-2 text-front/80 hover:text-primary font-medium transition-all duration-300 hover:scale-105"
                  onClick={link.scrollTo ? (e) => {
                    e.preventDefault();
                    document.getElementById(link.scrollTo)?.scrollIntoView({ behavior: 'smooth' });
                  } : undefined}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative z-10 flex items-center gap-x-2">
                    <span className="text-sm">{link.icon}</span>
                    {link.title}
                  </span>
                </Link>
              ))}
              
              {/* CTA Button */}
              <Link
                to="/home"
                className="group relative px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 hover:scale-105 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-secondary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10 flex items-center gap-x-2">
                  <span>🚀</span>
                  Get Started
                </span>
              </Link>
            </div>

            {/* Mobile menu button and theme toggle */}
            <div className="flex items-center space-x-4 lg:hidden">
              <ThemeButton className="p-3 bg-gradient-to-r from-primary/10 to-secondary/10 backdrop-blur-sm rounded-xl border border-primary/20 hover:border-primary/40 transition-all duration-300" />
              <button className="p-2 text-front/80 hover:text-primary">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>

            {/* Desktop theme toggle */}
            <div className="hidden lg:block">
              <ThemeButton className="p-3 bg-gradient-to-r from-primary/10 to-secondary/10 backdrop-blur-sm rounded-xl border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-110" />
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="lg:hidden border-t border-primary/10 py-4">
            <div className="flex flex-wrap items-center gap-3">
              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.to}
                  target={link.external ? "_blank" : "_self"}
                  className="px-3 py-2 text-sm bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg border border-primary/20 flex items-center gap-x-2"
                >
                  <span className="text-xs">{link.icon}</span>
                  {link.title}
                </Link>
              ))}
              <Link
                to="/home"
                className="px-4 py-2 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-lg text-sm"
              >
                🚀 Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <Hero />
    </section>
  );
}

const navLinks = [
  {
    title: "Features",
    to: "#features",
    icon: "✨",
    scrollTo: "features",
    external: false,
  },
  {
    title: "Courses",
    to: "#courses",
    icon: "📚",
    scrollTo: "courses",
    external: false,
  },
  {
    title: "Technology",
    to: "#technology",
    icon: "🔬",
    scrollTo: "technology",
    external: false,
  },
  {
    title: "GitHub",
    to: "https://github.com/naman9271/FinBridge",
    icon: "⭐",
    external: true,
  },
  {
    title: "Documentation",
    to: "#docs",
    icon: "📖",
    scrollTo: "docs",
    external: false,
  },
];
