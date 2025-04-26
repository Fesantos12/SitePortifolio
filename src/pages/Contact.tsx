import { useEffect } from 'react';

import email from '../assets/email-1572-svgrepo-com.svg';
import insta from '../assets/instagram-svgrepo-com.svg';
import linkedin from '../assets/linkedin-svgrepo-com.svg';

import { Footer } from '../components/Footer';
import { Header } from '../components/Header';

import { useFetchGithubApi } from '../hooks/useFetchGithubApi';

export default function Contact() {
  const { userData, handleFetch } = useFetchGithubApi();

  useEffect(() => {
    handleFetch();
  }, [handleFetch]);

  return (
    <>
      <div className="w-full h-screen flex flex-col">
        <Header Home="Home" About="About" Skills="Skills" Contact="Contact" />
        <div className="w-full flex flex-col flex-1 bg-[url(../src/assets/BackgroundPortifolio.png)] bg-cover items-center justify-center px-40 gap-10 max-sssm:px-5">
          <div className="w-full flex flex-col justify-center items-center gap-8 animate-bounceLimited max-lg:gap-3 max-ppq:gap-2">
            <h2 className="text-4xl font-bold text-text-dark-white max-ppq:text-2xl">
              Contacts
            </h2>
            <h4 className="text-lg font-normal text-text-dark-white max-ppq:text-base">
              Contact me to hire me
            </h4>
            <div className="w-16 h-1.5 bg-text-dark max-ppq:w-14 max-ppq:h-1"></div>
          </div>

          <div className="w-full flex flex-col items-center gap-7 animate-bounceLimited">
            <div className="w-1/2 h-44 bg-background-green rounded-2xl p-4 flex items-center justify-start gap-4 xl max-xl:w-full">
              {userData && userData.login ? (
                <>
                  <a
                    href={userData.html_url}
                    target="_blank"
                    className="w-full flex cursor-pointer"
                  >
                    <div className="w-sm flex flex-col items-center gap-2 justify-center">
                      <img
                        src={userData.avatar_url}
                        alt=""
                        className="w-20 h-20 rounded-full"
                      />
                      <div className="w-full text-center text-text-dark-white font-bold">
                        {userData.name}
                      </div>
                    </div>
                    <div className="w-full flex flex-col items-start justify-center gap-1 text-text-dark-white max-2xl:text-[14px] max-lg:text-[10px]">
                      {userData.bio}
                      <div className="font-bold">📍{userData.location}</div>
                      <div className="flex items-center gap-3 max-lg:hidden">
                        <div>Followers: {userData.followers}</div>
                        <div>Following: {userData.following}</div>
                      </div>
                    </div>
                  </a>
                </>
              ) : (
                <p className="text-center text-3xl font-bold text-text-dark-white w-full flex items-center justify-center">
                  Carregand...
                </p>
              )}
            </div>
            <div className="w-full flex items-center justify-center gap-4 animate-bounceLimited max-ppq:text-xl">
              <a
                href="https://www.instagram.com/fe_santos95/"
                target="_blank"
                className="flex items-center text-2xl font-medium text-text-dark-white gap-2"
              >
                <img src={insta} alt="Instagram logo" className="w-6 h-6" />
                Instagram
              </a>
              <a
                href="https://www.linkedin.com/in/fellipe-santos-9b5aa9199/"
                target="_blank"
                className="flex items-center text-2xl font-medium text-text-dark-white gap-2"
              >
                <img src={linkedin} alt="Linkedin logo" className="w-6 h-6" />
                Linkedin
              </a>
            </div>
            <div className="w-full flex flex-col items-center gap-2 animate-bounceLimited">
              <div className="flex items-center gap-3 text-2xl text-text-dark-white max-ppq:text-sm">
                <p>Email for contact</p>
                <img src={email} alt="Email icon" className="w-6 h-6" />
              </div>
              <div className="text-3xl font-bold text-text-dark-white max-ppq:text-xl">
                fellipeunker12@gmail.com
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
