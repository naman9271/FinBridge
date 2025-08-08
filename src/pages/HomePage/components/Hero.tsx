export default function Hero() {
  return (
    <section className="px-24 flex flex-col items-center py-16 mobile:px-12 relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 pointer-events-none" />
      <div className="absolute top-0 right-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl transform translate-x-32 -translate-y-32" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl transform -translate-x-48 translate-y-48" />
      
      <div className="flex flex-col gap-y-10 w-full items-center mobile:justify-center relative z-10">
        {/* Enhanced title with gradient text */}
        <div className="text-center space-y-3">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mobile:text-3xl">
            My Learning Journey
          </h1>
          <p className="text-front/70 text-lg font-medium">Continue your path to financial mastery</p>
        </div>

        {/* Enhanced course cards with glassmorphism effect */}
        <div className="flex w-full scrollbar-primary gap-x-8 justify-center mobile:items-center mobile:flex-col mobile:gap-y-8">
          {myCourses.map((course, i) => (
            <div
              className="group relative backdrop-blur-lg bg-gradient-to-br from-background/80 to-background/40 border border-primary/30 rounded-2xl w-[30%] mobile:w-[80%] items-center px-6 flex flex-col gap-y-6 py-8 justify-between hover:scale-[1.05] hover:shadow-2xl hover:shadow-primary/20 duration-500 ease-out cursor-pointer overflow-hidden"
              key={i}
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
              
              {/* Animated border glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary via-secondary to-accent opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500" />
              
              <div className="flex flex-col items-center gap-y-4 relative z-10">
                {/* Enhanced image with glowing effect */}
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-lg opacity-30 group-hover:opacity-60 transition-opacity duration-500" />
                  <img
                    src={course.imgUrl}
                    alt={course.name}
                    className="relative w-[6vw] h-[6vw] rounded-full border-3 border-gradient-to-r from-primary to-secondary p-1 object-cover mobile:w-[18vw] mobile:h-[18vw] shadow-xl"
                  />
                  {/* Progress ring for in-progress courses */}
                  {course.status === 0 && (
                    <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-orange-400 animate-spin opacity-60" />
                  )}
                  {/* Checkmark for completed courses */}
                  {course.status === 1 && (
                    <div className="absolute -top-2 -right-2 bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold shadow-lg">
                      ✓
                    </div>
                  )}
                </div>

                <h1 className="text-xl font-bold text-center group-hover:text-primary transition-colors duration-300">
                  {course.name}
                </h1>
              </div>
              
              {/* Enhanced status badges */}
              <div className="relative z-10">
                {course.status == 0 && (
                  <div className="flex items-center gap-x-2 px-4 py-2 bg-gradient-to-r from-orange-400/20 to-orange-500/20 border border-orange-400/30 rounded-full backdrop-blur-sm">
                    <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse" />
                    <p className="text-sm font-semibold text-orange-500">In Progress</p>
                  </div>
                )}
                {course.status == 1 && (
                  <div className="flex items-center gap-x-2 px-4 py-2 bg-gradient-to-r from-green-400/20 to-green-500/20 border border-green-400/30 rounded-full backdrop-blur-sm">
                    <div className="w-2 h-2 bg-green-400 rounded-full" />
                    <p className="text-sm font-semibold text-green-500">Completed</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const myCourses = [


  {
    name: "PersonaL Finance",
    imgUrl:
      "https://i.pinimg.com/736x/78/2b/2c/782b2c9ce0bd50155e5e54fb2ec3aefb.jpg",
    status: 0,
  },
  {
    name: "Saving and Investing",
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGWE2vjJpER257F3OIq6vEY9thq98rCt6Sew&usqp=CAU",
    status: 1,
  },
  {
    name: "Budgeting",
    imgUrl:
      "https://c8.alamy.com/comp/2CR2RXM/budgeting-line-color-icon-event-management-sign-for-web-page-mobile-app-button-logo-vector-isolated-element-editable-stroke-2CR2RXM.jpg",
    status: 1,
  },
];
