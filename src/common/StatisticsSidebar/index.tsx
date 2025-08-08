import ThemeButton from "../ThemeButton";
import CourseStats from "./components/CourseStats";
import FiInfo from "./components/FiInfo";

export default function StatisticsSidebar() {
  return (
    <section className="relative flex flex-col border-l border-border/30 max-w-[20vw] h-screen mobile:hidden overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl transform translate-x-16 -translate-y-8" />
      <div className="absolute bottom-1/3 left-0 w-24 h-24 bg-secondary/10 rounded-full blur-2xl transform -translate-x-8" />
      
      {/* Main content */}
      <div className="relative z-10 backdrop-blur-sm bg-background/50 h-full">
        {/* Header section */}
        <div className="p-6 border-b border-primary/10">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-lg font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              FinBridge Milestones
            </h1>
            <ThemeButton className="text-xl p-2 aspect-square bg-gradient-to-r from-primary/10 to-secondary/10 backdrop-blur-sm rounded-xl flex justify-center items-center border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-110" />
          </div>
          
          {/* Enhanced stats cards */}
          <div className="grid grid-cols-2 gap-4">
            <div className="group relative p-4 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <h2 className="text-xs text-front/60 font-medium mb-1">Ongoing</h2>
                <div className="flex items-center gap-x-2">
                  <p className="font-mono text-primary text-2xl font-bold">12</p>
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                </div>
                <div className="mt-2 h-1 bg-primary/20 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-primary to-secondary rounded-full w-3/4 animate-pulse" />
                </div>
              </div>
            </div>
            
            <div className="group relative p-4 rounded-2xl bg-gradient-to-br from-green-500/10 to-green-500/5 border border-green-500/20 hover:border-green-500/40 transition-all duration-300 hover:scale-105 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <h2 className="text-xs text-front/60 font-medium mb-1">Complete</h2>
                <div className="flex items-center gap-x-2">
                  <p className="font-mono text-green-500 text-2xl font-bold">4</p>
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                </div>
                <div className="mt-2 h-1 bg-green-500/20 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-green-400 to-green-600 rounded-full w-full" />
                </div>
              </div>
            </div>
          </div>
          
          {/* Achievement section */}
          <div className="mt-6 p-4 rounded-2xl bg-gradient-to-r from-accent/10 to-accent/5 border border-accent/20">
            <div className="flex items-center gap-x-3 mb-2">
              <div className="w-8 h-8 bg-gradient-to-r from-accent to-primary rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-bold">🏆</span>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-accent">This Week</h3>
                <p className="text-xs text-front/60">3 modules completed</p>
              </div>
            </div>
            <div className="flex justify-between text-xs text-front/50">
              <span>XP Gained</span>
              <span className="font-mono text-accent font-bold">+150</span>
            </div>
          </div>
        </div>

        {/* Enhanced CourseStats section */}
        <div className="flex-1 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
          <CourseStats />
        </div>
        
        <figure role="separator" className="flex-1" />
        
        {/* Enhanced FiInfo section */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-t from-secondary/5 to-transparent" />
          <FiInfo />
        </div>
      </div>
    </section>
  );
}
