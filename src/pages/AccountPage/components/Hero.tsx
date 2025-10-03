export default function Hero() {
  return (
      <div className="flex px-24 pt-12 pb-24 gap-x-8 items-center bg-dark-gray rounded-b-[8rem] mobile:px-6 mobile:justify-center  mobile:rounded-b-[4rem]">
        <img
          src="https://avatars.githubusercontent.com/u/179296103?v=4"
          alt="profile"
          className="w-[8vw] rounded-full mobile:w-[16vw]"
        />
        <div className="flex flex-col gap-y-2">
          <div>
            <h1 className="text-xl font-semibold">Naman Jain</h1>
            <p className="text-sm pt-1">1 Following  | 5 Followers</p>
          </div>
            <div className="text-sm">⭐ 5,470 XP</div>
            <div className="flex gap-x-2 text-sm">
              <img
                src="https://em-content.zobj.net/source/twitter/376/flag-india_1f1ee-1f1f3.png"
                className="w-[1.5vw]"
                alt="india"
              />
              <p>India - Lvl 10</p>
          </div>
        </div>
      </div>
  );
}
