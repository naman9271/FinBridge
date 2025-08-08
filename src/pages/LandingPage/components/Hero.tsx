import { Link } from "react-router-dom";
import Icon from "../../../common/Icon";
import botIcon from "../components/images/bot.png";
import xpIcon from "../components/images/xp.png";
import arIcon from "../components/images/ar.png"
import './styles.css'

export default function Hero() {
  return (
    <section className="relative px-8 md:px-24 py-12 md:py-24 flex min-h-screen items-center overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
      <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-primary/20 rounded-full blur-2xl animate-pulse-slow" />
      <div className="absolute bottom-1/3 left-1/4 w-24 h-24 bg-secondary/20 rounded-full blur-2xl animate-float" />
      
      <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center w-full max-w-7xl mx-auto">
        {/* Enhanced content section */}
        <div className="space-y-8">
          {/* Hero title with gradient text */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight">
              <span className="block text-front">Empower your</span>
              <span className="block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-gradient">
                wallet.
              </span>
              <span className="block text-2xl md:text-3xl lg:text-4xl font-semibold text-front/80 mt-4">
                FinBridge: Finance made simple
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-front/70 leading-relaxed max-w-2xl">
              Start your course to financial mastery with FinBridge. 
              <br className="hidden md:block" />
              You can rely on{" "}
              <span className="font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                FinBridge
              </span>{" "}
              to start your journey!
            </p>
          </div>

          {/* Enhanced CTA button */}
          <div className="flex flex-col sm:flex-row gap-4 items-start">
            <Link
              to="/home"
              className="group relative inline-flex items-center gap-x-4 px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white text-xl font-bold rounded-2xl shadow-2xl shadow-primary/30 hover:shadow-primary/50 transition-all duration-500 hover:scale-105 overflow-hidden"
            >
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-r from-secondary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shimmer" />
              
              <span className="relative z-10">Start Learning</span>
              <div className="relative z-10 p-2 bg-white/20 rounded-xl group-hover:bg-white/30 transition-colors duration-300">
                <Icon icon="lesson" className="text-2xl" />
              </div>
            </Link>
            
            <Link
              to="#features"
              className="group inline-flex items-center gap-x-2 px-6 py-3 text-primary font-semibold border-2 border-primary/30 rounded-xl hover:bg-primary/10 hover:border-primary/60 transition-all duration-300"
            >
              <span>Learn More</span>
              <Icon icon="arrow_forward" className="text-lg group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>

          {/* Enhanced feature grid */}
          <div className="grid sm:grid-cols-2 gap-6 mt-12">
            {[
              {
                icon: botIcon,
                title: "AI-Powered Learning",
                description: "AI Bot that is always there to help you during your learning journey"
              },
              {
                icon: xpIcon,
                title: "Gamified Experience",
                description: "Advance through modules and build a steady streak to accumulate even more XP!"
              },
              {
                icon: arIcon,
                title: "AR Technology",
                description: "Utilize AR service analysis to scan financial documents and extract key data using OCR!"
              },
              {
                icon: "https://img.icons8.com/fluency/48/group.png",
                title: "Community Driven",
                description: "Engage with the community, clear your doubts, share experiences, and expand your network!"
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="group relative p-6 rounded-2xl bg-gradient-to-br from-background/80 to-background/60 backdrop-blur-lg border border-primary/20 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 hover:scale-105 overflow-hidden"
              >
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-0 right-0 w-16 h-16 bg-primary/10 rounded-full blur-xl transform translate-x-8 -translate-y-8 group-hover:translate-x-4 group-hover:-translate-y-4 transition-transform duration-500" />
                
                <div className="relative z-10 flex gap-x-4">
                  <div className="relative flex-shrink-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
                    <img
                      draggable={false}
                      src={feature.icon}
                      alt={feature.title}
                      className="relative w-14 h-14 rounded-xl shadow-lg"
                    />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-bold text-front group-hover:text-primary transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-front/70 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced visual section */}
        <div className="relative flex items-center justify-center lg:justify-end">
          {/* Floating elements */}
          <div className="absolute top-10 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-float" />
          <div className="absolute bottom-10 right-10 w-16 h-16 bg-secondary/20 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 w-12 h-12 bg-accent/20 rounded-full blur-lg animate-pulse-slow" />
          
          {/* Main visual container */}
          <div className="relative group">
            {/* Outer glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-[3rem] blur-2xl group-hover:blur-3xl transition-all duration-700 animate-pulse-slow" />
            
            {/* Main container */}
            <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-[3rem] bg-gradient-to-br from-primary via-secondary to-accent p-1 shadow-2xl shadow-primary/25 group-hover:shadow-primary/40 transition-all duration-700 hover:scale-105">
              {/* Inner container */}
              <div className="w-full h-full rounded-[2.8rem] bg-gradient-to-br from-background/90 to-background/70 backdrop-blur-xl overflow-hidden flex items-center justify-center">
                {/* Image with overlay effects */}
                <div className="relative w-full h-full">
                  <img
                    src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg"
                    className="w-full h-full object-cover rounded-[2.8rem]"
                    alt="Financial Freedom"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-secondary/30 rounded-[2.8rem]" />
                  {/* Text overlay */}
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">Financial Freedom</h3>
                    <p className="text-white/80 text-sm">Start your journey today</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
