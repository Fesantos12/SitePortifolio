import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { TypeAnimationText } from './components/TypeAnimationText';
import { TypeAnimationText2 } from './components/TypeAnimationText2';

export default function App() {
  return (
    <>
      <div className="w-full h-screen flex flex-col">
        <Header Home="Home" Skills="Skills" About="About" Contact="Contact" />
        <div className="w-full flex flex-1 bg-[url(../src/assets/BackgroundPortifolio.png)] bg-cover items-center justify-around px-40 gap-4 max-md:flex-col-reverse max-md:justify-center max-md:px-20 max-md:gap-6">
          <div className="flex flex-col items-start gap-5 max-md:items-center">
            <div className="flex flex-col gap-2 max-md:items-center">
              <h1 className=" w-full text-8xl font-bold text-text-dark flex flex-wrap gap-4 max-lg:text-5xl max-md:flex-nowrap max-md:flex-col max-md:items-center max-md:text-center">
                <div className="text-text-dark-white">I am </div>
                <TypeAnimationText />
              </h1>
              <h3 className="font-semibold text-4xl text-text-dark max-lg:text-2xl max-md:text-center">
                i’m Fellipe, <TypeAnimationText2 />
              </h3>
            </div>
            <button className="w-52 h-16 bg-transparent border-4 border-text-dark rounded-2xl flex items-center justify-center font-bold text-text-dark-white text-2xl max-lg:w-36 max-lg:h-10 max-lg:text-sm max-lg:rounded-xl">
              <a href="https://github.com/Fesantos12" target="_blank">
                My Github
              </a>
            </button>
          </div>
          <div className="w-96 h-96 bg-[url(../src/assets/Euzinho.jpg)] bg-cover rounded-full max-lg:size-60 shrink-0" />
        </div>
        <Footer />
      </div>
    </>
  );
}
