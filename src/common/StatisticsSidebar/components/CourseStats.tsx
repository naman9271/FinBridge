import React, { useRef } from "react";
import { linearMapColor, rgbToHex } from "../../../utils";
import useIdleScrollbar from "../../../hooks/useIdleScrollbar";
import { twMerge } from "tailwind-merge";

export default function CourseStats() {
  const containerRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useIdleScrollbar(containerRef);

  const totalcourse = 4;

  return (
    <div
      className="relative border-y border-primary/10 px-6 py-6 flex flex-col gap-y-4 max-h-[50vh] overflow-y-scroll scrollbar-primary"
      ref={containerRef}
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-secondary/5 pointer-events-none" />
      
      <div className="relative z-10 flex items-center justify-between gap-x-3 mb-2">
        <h1 className="text-lg font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Daily Challenge
        </h1>
        <div className="px-3 py-2 bg-gradient-to-r from-accent/20 to-accent/10 border border-accent/30 text-accent font-semibold rounded-xl text-sm">
          Total: {totalcourse}
        </div>
      </div>

      <div className="relative z-10 space-y-3">
        {courses.map((course, key) => (
          <div 
            key={key}
            className="group relative p-3 rounded-xl bg-gradient-to-r from-background/80 to-background/60 border border-primary/20 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 hover:scale-102 overflow-hidden"
          >
            {/* Hover gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
            
            <div className="relative z-10">
              <div className="flex gap-x-3 items-center mb-3">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-lg blur-sm opacity-20 group-hover:opacity-40 transition-opacity duration-300" />
                  <img
                    src={course.img}
                    alt={course.name}
                    className="relative aspect-square rounded-lg h-12 w-12 object-cover border border-primary/30 shadow-md"
                  />
                  {/* Status indicator */}
                  <div className={twMerge(
                    "absolute -top-1 -right-1 w-4 h-4 rounded-full border-2 border-background shadow-sm",
                    course.status ? "bg-green-500" : "bg-orange-400"
                  )} />
                </div>

                <div className="flex-1 min-w-0">
                  <h1 className="font-semibold text-sm group-hover:text-primary transition-colors duration-300 truncate">
                    {course.name}
                  </h1>
                  <p className="text-xs text-front/60">{course.modules}</p>
                </div>
              </div>

              {/* Progress section */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className={twMerge(
                    "font-medium px-2 py-1 rounded-full",
                    course.status 
                      ? "text-green-600 bg-green-100 dark:bg-green-900/30 dark:text-green-400" 
                      : "text-orange-600 bg-orange-100 dark:bg-orange-900/30 dark:text-orange-400"
                  )}>
                    {course.complete}
                  </span>
                  <span className="text-front/50 font-mono">
                    {course.status ? "100%" : "65%"}
                  </span>
                </div>
                
                {/* Progress bar */}
                <div className="h-1.5 bg-front/10 rounded-full overflow-hidden">
                  <div 
                    className={twMerge(
                      "h-full rounded-full transition-all duration-1000",
                      course.status 
                        ? "bg-gradient-to-r from-green-400 to-green-600 w-full" 
                        : "bg-gradient-to-r from-orange-400 to-orange-600 w-2/3"
                    )}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const courses = [
  {
    img: "https://c8.alamy.com/comp/2CR2RXM/budgeting-line-color-icon-event-management-sign-for-web-page-mobile-app-button-logo-vector-isolated-element-editable-stroke-2CR2RXM.jpg",
    name: "Complete 5 Budgeting modules",
    modules: "Total Modules: 12",
    complete: "Completed Modules: 4",
    status: 0,
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGWE2vjJpER257F3OIq6vEY9thq98rCt6Sew&usqp=CAU",
    name: "Complete 2 Investment modules",
    modules: "Total Modules: 15",
    complete: "Completed Modules: 7",
    status: 1,
  },
  {
    img: "https://www.shutterstock.com/image-vector/high-quality-fire-emoticon-isolated-260nw-1716411895.jpg",
    name: "Maintain a streak of 5 days",
    modules: "Required Streak: 5",
    complete: "Current Streak: 3",
    status: 0,
  },
  
];
