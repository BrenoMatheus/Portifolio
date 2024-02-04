import { AboutMe } from './components/aboutMe/AboutMe';
import { Projects } from './components/projects/Projects';
import { Habilities } from './components/habilities/Habilities';
import { ContactForm } from './components/contact/ContactForm';
import { Footer } from './components/footer/Footer';
import './i18n/index';
import { useTranslation } from 'react-i18next';
import { IonIcon } from '@ionic/react';
import { Menu } from './components/menu/Menu';

export default function App() {
  const { t } = useTranslation();

  return (
    <>
      <div className="min-h-full dark:bg-gray-800 bg-gray-100">
        <Menu />
        <header className="dark:text-gray-100  text-gray-800 shadow">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <div className="items-center flex flex-col p-2 text-center mt-10 md:mt-32">
              <h4 className="animate-fade-down animate-delay-500 animate-ease-out  lg:text-8xl md:text-6xl text-5xl p-4 mt-4">
                {t('slogan-start')}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-violet-600">
                  {t('slogan-mid')}
                </span>
                {t('slogan-end')}
              </h4>
              <h4 className="animate-fade-up animate-delay-500 animate-ease-in-out md:text-2xl text-md pl-8 mb-4 dark:text-gray-400 text-gray-700">
                {t('Hi')}
                <span className="hover:p-1 hover:animate-pulse bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-violet-600">
                  {' { '}Breno Matheus{' } '}
                </span>
                {t('Hi-end')}
              </h4>
              <div className="flex justify-center gap-2 m-4 animate-fade animate-delay-700 animate-ease-out">
                <a
                  href="https://www.linkedin.com/in/breno-jesus-b4a860279/"
                  className="items-center border border-gray-600 flex m-4 rounded-md p-2 pb-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-gray-300 duration-300 hover:text-black"
                >
                  <IonIcon name="logo-linkedin" className="pr-2 text-sky-600" />
                  Linkedin
                </a>
                <a
                  href="https://github.com/BrenoMatheus"
                  className="items-center border border-gray-600 flex m-4 rounded-md p-2 pb-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-gray-300 duration-300 hover:text-black"
                >
                  <IonIcon
                    name="logo-github"
                    className="dark:text-white text-black pr-2"
                  />
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </header>
        <main>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8 ">
            <AboutMe />
            <Habilities/>
            <Projects/>
            <ContactForm/>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
