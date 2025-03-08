import { Link } from "react-router-dom";
import Icon from "../../../common/Icon";
import botIcon from "../components/images/bot.png";
import xpIcon from "../components/images/xp.png";
import arICon from "../components/images/ar.png"
import './styles.css'

<img src={botIcon} alt="robot" className="aspect-square w-14 h-14" />

export default function Hero() {
  return (
    <section className="px-24 widescreen:py-24 flex h-screen mobile:px-12 mobile:py-6 section-gradient-bg section-hover-shiny section-animate-shine">
      <div className="flex flex-col gap-y-5 widescreen:py-12 mobile:pt-24">
        <h1 className="text-5xl font-semibold leading-snug mobile:text-3xl">
          Empower your wallet.
          <br />
          FinBridge: Finance made simple
        </h1>
        <p className="text-lg text-front text-opacity-60">
          Start your course to financial mastery with FinBridge. <br />
          You can rely on{" "}
          <span className="font-semibold text-primary">FinBridge</span> to start
          your journey!
        </p>
        <div className="my-10 mobile:my-2">
          <Link
            to="/home"
            className="relative text-2xl font-semibold flex items-center gap-x-4 mobile:text-xl"
          >
            Start Learning
            <span className="bg-primary/5 border border-primary/30 rounded-full p-3">
              <Icon icon="lesson" className="text-[2.1rem] mobile:text-[1.5rem]" />
            </span>
          </Link>
        </div>
        <div className="my-3 flex gap-y-8 flex-col widescreen:max-w-[45vw] gap-x-8 mobile:w-full">
            <div className="flex gap-x-4 mobile:flex-col mobile:gap-y-8">
              <div className="flex widescreen:max-w-[45%] gap-x-5 mobile:w-full icon-container">
                <img
                  draggable={false}
                  src={botIcon}
                  alt="robot"
                  className="aspect-square w-14 h-14"
                />
                <p className="text-sm text-front text-opacity-50">
                  AI Bot that is always there to help you during your learning journey
                </p>
              </div>
              <div className="flex widescreen:max-w-[45%] gap-x-5 mobile:w-full icon-container">
                <img
                  draggable={false}
                  src={xpIcon}
                  alt="xp"
                  className="aspect-square w-14 h-14"
                />
                <p className="text-sm text-front text-opacity-50">
                Advance through modules and build a steady streak to accumulate even more XP along the way!
                </p>
              </div>
            </div>
            <div className="flex gap-x-4 mobile:w-full mobile:flex-col mobile:gap-y-6">
              <div className="flex widescreen:max-w-[45%] gap-x-5 icon-container">
                <img
                  draggable={false}
                  src={arICon}
                  alt="xp"
                  className="aspect-square w-14 h-14"
                />
                <p className="text-sm text-front text-opacity-50">
                Utilize AR service analysis to scan financial documents and efficiently extract key data using OCR technology!                </p>
              </div>
              <div className="flex widescreen:max-w-[45%] gap-x-5 icon-container">
                <img
                  draggable={false}
                  src="https://img.icons8.com/fluency/48/group.png"
                  alt="xp"
                  className="aspect-square w-14 h-14"
                />
                <p className="text-sm text-front text-opacity-50">
                Engage with the community, clear your doubts, share your experiences, and expand your network!                </p>
              </div>
            </div>
        </div>
      </div>
      <div className="flex flex-1 flex-col items-center justify-center mobile:hidden">
        <div className="h-[100%] w-[80%] rounded-t-full rounded-bl-full rounded-br-[145rem] bg-primary flex items-center justify-center overflow-hidden">
          <img
            src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg"
            className="w-full h-full object-cover"
          />
          {/* bg-[url('https://www.wbcsd.org/var/site/storage/images/media/images/finance_img/25992-1-eng-GB/finance_img_i1140.jpg')]" */}
        </div>
      </div>
    </section>
  );
}
