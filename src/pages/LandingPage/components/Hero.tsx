import { Link } from "react-router-dom";
import Icon from "../../../common/Icon";
import botIcon from "../components/images/bot.png";
import xpIcon from "../components/images/xp.png";
import arIcon from "../components/images/ar.png"
import './styles.css'

export default function Hero() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative px-6 lg:px-8 py-20 lg:py-32 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div className="space-y-8">
              {/* Hero Text */}
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-full">
                  <span className="text-sm font-medium text-primary">🎯 Smart Financial Education</span>
                </div>
                
                <h1 className="text-5xl lg:text-7xl font-black leading-tight">
                  <span className="block text-front">Master Your</span>
                  <span className="block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                    Financial Future
                  </span>
                </h1>
                
                <p className="text-xl lg:text-2xl text-front/70 leading-relaxed max-w-2xl">
                  Unlock the power of financial literacy with FinBridge's AI-driven platform. 
                  Learn, practice, and excel in personal finance through interactive courses and cutting-edge technology.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/home"
                  className="group relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white text-lg font-bold rounded-2xl shadow-2xl shadow-primary/30 hover:shadow-primary/50 transition-all duration-500 hover:scale-105 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-secondary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shimmer" />
                  <span className="relative z-10 flex items-center gap-x-3">
                    <span>Start Learning Now</span>
                    <Icon icon="arrow_forward" className="text-xl group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </Link>
                
                <Link
                  to="#features"
                  className="group inline-flex items-center justify-center px-8 py-4 text-primary font-bold border-2 border-primary/30 rounded-2xl hover:bg-primary/10 hover:border-primary/60 transition-all duration-300"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <span className="flex items-center gap-x-2">
                    <span>Explore Features</span>
                    <Icon icon="expand_more" className="text-lg group-hover:translate-y-1 transition-transform duration-300" />
                  </span>
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-primary/10">
                {[
                  { number: "50K+", label: "Active Learners" },
                  { number: "100+", label: "Courses Available" },
                  { number: "95%", label: "Success Rate" }
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl lg:text-4xl font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                      {stat.number}
                    </div>
                    <div className="text-sm text-front/60 font-medium mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual */}
            <div className="relative">
              {/* Floating elements */}
              <div className="absolute top-10 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-float" />
              <div className="absolute bottom-10 right-10 w-16 h-16 bg-secondary/20 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }} />
              <div className="absolute top-1/2 left-1/2 w-12 h-12 bg-accent/20 rounded-full blur-lg animate-pulse" />
              
              {/* Main visual */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-[3rem] blur-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-700" />
                <div className="relative bg-gradient-to-br from-primary via-secondary to-accent p-1 rounded-[3rem] shadow-2xl">
                  <div className="bg-gradient-to-br from-background/95 to-background/80 backdrop-blur-xl rounded-[2.8rem] p-8">
                    <img
                      src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg"
                      alt="Financial Education"
                      className="w-full h-80 lg:h-96 object-cover rounded-2xl shadow-xl"
                    />
                    <div className="absolute inset-8 bg-gradient-to-t from-black/50 via-transparent to-transparent rounded-2xl flex items-end">
                      <div className="text-white p-6">
                        <h3 className="text-2xl font-bold mb-2">Smart Learning</h3>
                        <p className="text-white/80">AI-powered financial education</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative px-6 lg:px-8 py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl lg:text-5xl font-black bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Revolutionary Features
            </h2>
            <p className="text-xl text-front/70 max-w-3xl mx-auto">
              Experience the future of financial education with our cutting-edge technology and innovative learning methods.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: botIcon,
                title: "AI Learning Assistant",
                description: "Get personalized guidance and instant support from our intelligent AI bot throughout your learning journey."
              },
              {
                icon: xpIcon,
                title: "Gamified Learning",
                description: "Earn XP, unlock achievements, and build streaks as you progress through engaging financial lessons."
              },
              {
                icon: arIcon,
                title: "AR Document Scanner",
                description: "Use augmented reality to scan and analyze financial documents with advanced OCR technology."
              },
              {
                icon: "https://img.icons8.com/fluency/48/group.png",
                title: "Community Network",
                description: "Connect with learners worldwide, share experiences, and grow your financial knowledge together."
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="group relative p-8 rounded-3xl bg-gradient-to-br from-background/80 to-background/60 backdrop-blur-lg border border-primary/20 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:scale-105 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-full blur-xl transform translate-x-12 -translate-y-12 group-hover:translate-x-8 group-hover:-translate-y-8 transition-transform duration-500" />
                
                <div className="relative z-10 space-y-4">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
                    <img
                      src={feature.icon}
                      alt={feature.title}
                      className="relative w-16 h-16 rounded-2xl shadow-lg"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-front group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-front/70 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="relative px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl lg:text-5xl font-black bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Comprehensive Courses
            </h2>
            <p className="text-xl text-front/70 max-w-3xl mx-auto">
              Master every aspect of personal finance with our expertly crafted curriculum designed for real-world application.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Personal Finance Fundamentals",
                description: "Build a solid foundation in budgeting, saving, and financial planning.",
                modules: 12,
                level: "Beginner",
                color: "from-blue-500 to-purple-600"
              },
              {
                title: "Investment & Wealth Building",
                description: "Learn advanced strategies for growing your wealth through smart investments.",
                modules: 18,
                level: "Intermediate",
                color: "from-green-500 to-teal-600"
              },
              {
                title: "Business Finance & Entrepreneurship",
                description: "Master business finance, startup funding, and entrepreneurial financial planning.",
                modules: 24,
                level: "Advanced",
                color: "from-orange-500 to-red-600"
              }
            ].map((course, index) => (
              <div 
                key={index}
                className="group relative p-8 rounded-3xl bg-gradient-to-br from-background/80 to-background/60 backdrop-blur-lg border border-primary/20 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:scale-105"
              >
                <div className="space-y-6">
                  <div className={`inline-flex items-center px-3 py-1 bg-gradient-to-r ${course.color} text-white text-sm font-semibold rounded-full`}>
                    {course.level}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-front group-hover:text-primary transition-colors duration-300">
                    {course.title}
                  </h3>
                  
                  <p className="text-front/70 leading-relaxed">
                    {course.description}
                  </p>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-primary/10">
                    <span className="text-sm font-medium text-front/60">
                      {course.modules} Modules
                    </span>
                    <Link
                      to="/home"
                      className="inline-flex items-center gap-x-2 px-4 py-2 bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30 text-primary font-semibold rounded-lg hover:bg-primary/30 transition-all duration-300"
                    >
                      <span>Start Course</span>
                      <Icon icon="arrow_forward" className="text-sm" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section id="technology" className="relative px-6 lg:px-8 py-20 bg-gradient-to-br from-secondary/5 to-accent/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl lg:text-5xl font-black bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Cutting-Edge Technology
            </h2>
            <p className="text-xl text-front/70 max-w-3xl mx-auto">
              Built with modern technologies to deliver the best learning experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "React & TypeScript", description: "Modern frontend architecture" },
              { name: "AI & Machine Learning", description: "Personalized learning paths" },
              { name: "Augmented Reality", description: "Interactive document analysis" },
              { name: "Real-time Analytics", description: "Track your progress" },
              { name: "Mobile Responsive", description: "Learn anywhere, anytime" },
              { name: "Secure & Private", description: "Your data is protected" }
            ].map((tech, index) => (
              <div 
                key={index}
                className="group p-6 rounded-2xl bg-gradient-to-br from-background/60 to-background/40 backdrop-blur-lg border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105"
              >
                <h3 className="text-lg font-bold text-front group-hover:text-primary transition-colors duration-300 mb-2">
                  {tech.name}
                </h3>
                <p className="text-front/70 text-sm">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Documentation Section */}
      <section id="docs" className="relative px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto text-center">
          <div className="space-y-8">
            <h2 className="text-4xl lg:text-5xl font-black bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Ready to Transform Your Financial Future?
            </h2>
            <p className="text-xl text-front/70 max-w-3xl mx-auto">
              Join thousands of learners who have already started their journey to financial independence with FinBridge.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/home"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white text-lg font-bold rounded-2xl shadow-2xl shadow-primary/30 hover:shadow-primary/50 transition-all duration-500 hover:scale-105"
              >
                Start Your Journey Today
              </Link>
              <Link
                to="https://github.com/naman9271/FinBridge"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 text-primary font-bold border-2 border-primary/30 rounded-2xl hover:bg-primary/10 hover:border-primary/60 transition-all duration-300"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                </svg>
                View on GitHub
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
