import { Link } from "react-router-dom";
import ThemeButton from "../../common/ThemeButton";

export default function TeamPage() {
  return (
    <section className="relative w-screen">
   <div
        className="border-b pb-6 border-front/20 flex absolute pt-6 items-center w-full text-lg mobile:text-base mobile:gap-x-3 mobile:py-4
      -tracking-wide justify-center gap-x-8"
      >
        {navLinks.map((navLink, i) => (
          <>
            <Link to={navLink.to} target={`_newABC`} className="cursor-pointer">
              {navLink.title}
            </Link>
            <span className="text-3xl mobile:text-xl">•</span>
          </>
        ))}
        <Link
          to="/Amex_Hackathon.pdf"
          target={`_newABC`}
          className="cursor-pointer"
        >
          PPT
        </Link>

        <span className="text-3xl mobile:text-xl">•</span>
        <Link
          to="https://youtu.be/ZniI5oX7PiA"
          target={`_newABC`}
          className="cursor-pointer"
        >
          Video
        </Link>
      </div>
      <ThemeButton className="absolute top-4 right-8 mobile:top-3 text-2xl mobile:text-xl mobile:right-4 p-2 aspect-square bg-foreground rounded-full flex justify-center items-center border border-front border-opacity-40" />
      <div className="p-page py-28 flex flex-col items-center">
        <h1 className="text-3xl font-bold">Our team</h1>
        <div className="flex flex-wrap items-center justify-around pt-6 gap-y-12">
          {team.map((member, i) => (
            <div
            key={i}
            className="w-[40%] mobile:w-[80%] bg-primary/10 rounded-xl flex flex-col items-center px-6 py-10 border border-primary/40"
          >
            <img src={member.imgUrl} className="w-[15vw] rounded-full mobile:w-[40vw] aspect-square object-cover" />
            <h1 className="mt-6 text-2xl font-bold">{member.name}</h1>
          </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const team = [
  {
    name: "Naman",
    imgUrl: "https://avatars.githubusercontent.com/u/179296103?s=400&u=04d2e161673e27bafbbc55e80f311553ab391869&v=4",
  }
];

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
