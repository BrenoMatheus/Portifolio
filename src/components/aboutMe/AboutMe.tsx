import { useTranslation } from 'react-i18next';
import { NavContact } from '../NavContact';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export const AboutMe = () => {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({duration:1200});
  });

  return (
    <div className="mt-10 md:mt-20 " id='About'>
      <div className="p-8 rounded-xl md:flex md:p-0 flex-col">
        <div data-aos='fade-up' className="text-4xl text-center w-full">
          <h4 className="font-bold dark:text-gray-100 text-gray-900 ">
            {t('About-me')}
          </h4>
        </div>
        <div className="md:flex md:flex-row-reverse justify-between pt-6 text-center space-y-4 md:text-left md:p-8  dark:text-white text-gray-900">
          <div data-aos='slide-left' className="flex-auto">
            <img
              className="hover:scale-125 hover:duration-200 delay-200 h-40 rounded-full mx-auto md:w-48 md:h-auto"
              src="./breno.jpeg"
              alt="Breno"
            />
          </div>
          <div data-aos='slide-right' className="flex-auto md:w-64">
            <p className="text-lg font-semibold ">{t('About-me-describe')}</p>
          </div>
        </div>
      </div>
      <NavContact/>
    </div>
  );
};
