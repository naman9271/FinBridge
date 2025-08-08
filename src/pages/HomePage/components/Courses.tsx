import React from "react";
import { Link } from "react-router-dom";

export default function Courses() {
  return (
    <section className="mx-16 relative mobile:mx-4 mb-12">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-full blur-3xl -translate-x-32 -translate-y-16" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-l from-accent/5 to-primary/5 rounded-full blur-3xl translate-x-32 translate-y-32" />
      
      {/* Main content with glassmorphism */}
      <div className="relative backdrop-blur-xl bg-gradient-to-br from-background/70 via-background/50 to-background/30 border border-primary/20 p-8 rounded-3xl shadow-2xl shadow-primary/5">
        {/* Enhanced header */}
        <div className="text-center mb-8 space-y-4">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Explore Our Courses
          </h1>
          <p className="text-front/70 text-lg">Discover comprehensive financial education tailored for you</p>
        </div>

        {/* Enhanced filter buttons */}
        <div className="flex gap-x-3 mobile:overflow-x-scroll mobile:w-[90%] mobile:scrollbar-primary mobile:pb-4 justify-center mb-10">
          <button className="group relative px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-semibold border border-transparent mobile:text-sm mobile:whitespace-nowrap shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative z-10">All Sectors</span>
          </button>
          {sectors.map((sector, i) => (
            <button
              key={i}
              className="group relative px-5 py-3 rounded-xl border-2 border-primary/30 bg-background/50 backdrop-blur-sm text-primary font-medium hover:bg-primary/10 hover:border-primary/60 hover:scale-105 transition-all duration-300 mobile:text-sm mobile:whitespace-nowrap"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
              <span className="relative z-10">{sector}</span>
            </button>
          ))}
        </div>

        {/* Enhanced course cards */}
        <div className="flex flex-col gap-y-6">
          {courses.map((course, i) => (
            <Link
              to={"/course"}
              className="group relative backdrop-blur-lg bg-gradient-to-r from-background/80 to-background/60 border border-primary/20 rounded-2xl p-6 hover:shadow-2xl hover:shadow-primary/10 hover:scale-[1.02] hover:bg-gradient-to-r hover:from-primary/5 hover:to-secondary/5 cursor-pointer duration-500 ease-out mobile:flex-col mobile:gap-y-4 overflow-hidden"
              key={i}
            >
              {/* Animated background gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
              
              {/* Glowing border effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary via-secondary to-accent opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500" />
              
              <div className="relative z-10 flex gap-x-6 mobile:flex-col mobile:gap-y-4">
                {/* Enhanced course image */}
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
                  <img
                    src={course.imgUrl}
                    alt={course.name}
                    className="relative w-[8vw] h-[8vw] rounded-2xl border-2 border-primary/30 p-1 object-cover mobile:w-[20vw] mobile:h-[20vw] shadow-xl group-hover:shadow-2xl transition-shadow duration-500"
                  />
                  {/* Floating badge */}
                  <div className="absolute -top-2 -right-2 bg-gradient-to-r from-accent to-primary text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg">
                    NEW
                  </div>
                </div>

                {/* Course content */}
                <div className="flex-1 space-y-3">
                  <div className="flex justify-between items-start mobile:flex-col mobile:gap-y-2">
                    <h1 className="text-2xl font-bold group-hover:text-primary transition-colors duration-300">
                      {course.name}
                    </h1>
                    <div className="flex items-center gap-x-2 px-4 py-2 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-xl text-sm shadow-lg">
                      <span>📚</span>
                      <span>{course.modules} Modules</span>
                    </div>
                  </div>
                  
                  <p className="text-front/80 leading-relaxed group-hover:text-front transition-colors duration-300">
                    {course.description}
                  </p>
                  
                  {/* Progress bar */}
                  <div className="flex items-center gap-x-3 mt-4">
                    <div className="flex-1 h-2 bg-front/10 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-1000 group-hover:from-secondary group-hover:to-accent"
                        style={{ width: `${Math.random() * 60 + 20}%` }}
                      />
                    </div>
                    <span className="text-sm font-medium text-front/70">Progress</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

const sectors = [
  "Budgeting",
  "Investing",
  "Debt management",
  "Retirement planning",
];

const courses = [
  {
    name: "Personal Finance",
    description:
      "Master essential financial concepts to effectively manage your money and achieve your financial goals. In this comprehensive course, you'll learn how to create and stick to a budget, control expenses, save for emergencies, and make informed decisions about investments and retirement planning. Explore topics such as understanding income and expenses, debt management, savings strategies, investment vehicles, retirement accounts, and estate planning.",
    imgUrl:
      "https://i.pinimg.com/736x/78/2b/2c/782b2c9ce0bd50155e5e54fb2ec3aefb.jpg",
    modules: 10,
  },
  {
    name: "Saving and Investing",
    description:
      "Discover proven strategies for saving money and investing wisely to build wealth over the long term. In this comprehensive course, you'll learn about different investment options, risk management techniques, and portfolio diversification strategies to maximize returns and achieve financial independence. Explore topics such as the power of compounding, asset allocation, stock market fundamentals, bond investments, real estate investing, and alternative assets.",
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGWE2vjJpER257F3OIq6vEY9thq98rCt6Sew&usqp=CAU",
    modules: 5,
  },
  {
    name: "Budgeting",
    description:
      "Gain mastery over the art of budgeting to effectively manage your income, control expenses, and achieve financial stability. In this comprehensive course, you'll learn how to create a budget, track spending, identify saving opportunities, and prioritize financial goals to make the most of your money. Explore topics such as setting financial goals, expense categorization, budgeting tools and techniques, emergency funds, and dealing with unexpected expenses.",
    imgUrl:
      "https://c8.alamy.com/comp/2CR2RXM/budgeting-line-color-icon-event-management-sign-for-web-page-mobile-app-button-logo-vector-isolated-element-editable-stroke-2CR2RXM.jpg",
    modules: 8,
  },
  {
    name: "Credit Management",
    description:
      "Explore the fundamentals of credit management and learn how to use credit wisely to achieve financial goals. In this comprehensive course, you'll understand how credit scores work, strategies for improving creditworthiness, and smart borrowing practices to avoid debt traps and build a solid financial foundation. Explore topics such as credit reports, credit scoring models, types of credit, credit card management, and debt consolidation. ",
    imgUrl:
      "https://www.creativefabrica.com/wp-content/uploads/2020/03/04/Credit-Card-Icon-Graphics-3068208-1-1-580x386.jpg",
    modules: 2,
  },
  {
    name: "Retirement Planning",
    description:
      "Prepare for a financially secure retirement by understanding key retirement planning concepts and strategies. In this comprehensive course, you'll learn about retirement accounts, investment options, income planning, and risk management techniques to build a retirement nest egg that lasts a lifetime. Explore topics such as retirement savings goals, employer-sponsored retirement plans, individual retirement accounts (IRAs), Social Security benefits, and annuities.",
    imgUrl: "https://cdn-icons-png.flaticon.com/512/5798/5798292.png",
    modules: 7,
  },
  {
    name: "Tax Planning",
    description:
      "Navigate the complexities of tax laws and optimize your tax situation with effective tax planning strategies. In this comprehensive course, you'll learn about deductions, credits, tax-deferred investment accounts, and tax-efficient investment strategies to minimize tax liability and maximize savings. Explore topics such as tax brackets, tax deductions and credits, tax-advantaged investment accounts, and tax planning for different life events.",
    imgUrl:
      "https://static.vecteezy.com/system/resources/previews/033/064/598/original/tax-planning-financial-advisor-color-icon-illustration-vector.jpg",
    modules: 8,
  },
  {
    name: "Estate Planning",
    description:
      "Protect your assets and ensure your wishes are carried out with proper estate planning. In this comprehensive course, you'll learn about wills, trusts, power of attorney, and healthcare directives, and understand the importance of estate planning in preserving wealth and providing for loved ones. Explore topics such as probate process, estate taxes, beneficiary designations, and charitable giving..",
    imgUrl: "https://cdn-icons-png.flaticon.com/512/1029/1029022.png",
    modules: 9,
  },
];
