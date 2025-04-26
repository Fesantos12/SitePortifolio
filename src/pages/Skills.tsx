import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { SkillCard } from '../components/SkillCard';

import ReactIcon from '../assets/ReactIcon.png';
import JsIcon from '../assets/JsIcon.png';
import TsIcon from '../assets/TsIcon.png';
import HtmsIcon from '../assets/HtmlIcon.png';
import CssIcon from '../assets/CssIcon.png';

export default function Skills() {
  return (
    <>
      <div className="w-full h-screen flex flex-col">
        <Header Home="Home" About="About" Skills="Skills" Contact="Contact" />
        <div className="w-full flex flex-col flex-1 bg-[url(../src/assets/BackgroundPortifolio.png)] bg-cover items-center justify-center px-40 gap-10 max-pq:px-5">
          <div className="w-full flex flex-col justify-center items-center gap-8 animate-bounceLimited max-lg:gap-4">
            <h2 className="text-4xl font-bold text-text-dark-white max-lg:text-2xl">
              My Skills
            </h2>
            <h4 className="text-lg font-normal text-text-dark-white max-lg:text-sm max-lg:text-center">
              My skills that I learned during the years I studied programming
            </h4>
            <div className="w-16 h-1.5 bg-text-dark max-lg:w-14 max-lg:h-1"></div>
          </div>
          <div className="w-full grid grid-cols-3 grid-rows-2 items-center justify-center gap-x-12 gap-y-12 place-items-center max-w-3xl mx-auto animate-bounceLimited max-sssm:grid-cols-2 max-sssm:grid-rows-3">
            <SkillCard
              img={ReactIcon}
              alt="React Icon"
              skillName="ReactJS"
              description="I learned ReactJs with Udemy courses and Youtube videos about it."
            />
            <SkillCard
              img={JsIcon}
              alt="Java Script Icon"
              skillName="JavaScript"
              description="JavaScipt came first and I learned about it by taking courses."
            />
            <SkillCard
              img={TsIcon}
              alt="TypeScript Icon"
              skillName="TypeScript"
              description="I learned TypeScript as a complement, after all typing helps a lot."
            />
            <SkillCard
              img={HtmsIcon}
              alt="Html Icon"
              skillName="HTML"
              description="HTML was the first thing I learned, like many others."
            />
            <SkillCard
              img={CssIcon}
              alt="Css Icon"
              skillName="CSS"
              description="Without CSS, all the beauty of this site wouldn't exist."
            />
            <SkillCard
              img={ReactIcon}
              alt="React Native Icon"
              skillName="React Native"
              description="React Native was the most recent thing I learned, I love making apps using it."
            />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
