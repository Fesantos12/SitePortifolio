import { Footer } from '../components/Footer';
import { Header } from '../components/Header';

export default function About() {
  return (
    <>
      <div className="w-full h-screen flex flex-col">
        <Header Home="Home" About="About" Skills="Skills" Contact="Contact" />
        <div className="w-full flex flex-col flex-1 bg-[url(../src/assets/BackgroundPortifolio.png)] bg-cover items-center justify-center px-40 gap-16 max-lg:gap-10 max-sssm:px-20 max-ppq:px-0">
          <div className="w-full flex flex-col gap-8 items-center animate-bounceLimited max-lg:gap-4">
            <h2 className="font-bold text-4xl text-text-dark-white max-lg:text-2xl">
              About me
            </h2>
            <div className="w-16 h-1.5 bg-text-dark max-lg:w-14 max-lg:h-1"></div>
          </div>

          <div className="w-full flex items-center justify-between max-lg:gap-10 max-ssm:flex-col">
            <div className="w-1/2 flex flex-col items-start justify-center gap-3 animate-bounceLimited">
              <h2 className="text-5xl font-bold text-text-dark-white max-lg:text-3xl max-md:text-xl max-ssm:text-xl ">
                I am Fellipe Santos
              </h2>
              <h4 className="text-2xl font-normal text-text-dark-white opacity-75 max-lg:text-xl max-ssm:text-[10px]">
                Hello. My name is Fellipe, I'm 23 years old and I've been
                studying programming for 5 years. It all started in 2020 when I
                had the opportunity to take an HTML and CSS course at Senac.
                After that, I started learning JavaScript, TypeScript, ReactJS
                and React Native with Vite and Expo with Udemy courses or on
                Youtube. In addition, I learned some tools like Tailwind, Zod,
                Clerk, Axios, React Hook Forms, React Houter. I even learned a
                little about Back-End with NodeJs, Postgres, Prisma and FastiFy.
                Now I feel ready to apply for jobs and get my first job as a
                Dev.
              </h4>
            </div>
            <div className="w-1/2 h-full flex justify-end items-center animate-bounceLimited">
              <div className="w-[30rem] h-[28rem] rounded-2xl bg-[url(../src/assets/Euzinho2.jpg)] bg-center bg-no-repeat max-lg:w-[25rem] max-lg:h-[23rem] max-ssm:w-[20rem] max-ssm:h-[18rem] max-ssm:bg-cover max-sssm:w-[15rem] max-sssm:h-[13rem]"></div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
