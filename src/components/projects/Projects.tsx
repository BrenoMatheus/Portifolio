// Import Swiper React components

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import required modules
import SlideProjects from './SlideProject';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import Aos from 'aos';

export const Projects = () => {
  const [filterType, setFilterType] = useState('');
  const { t } = useTranslation();
  const projects = [
    {
      title: t('title_project_system-OS-front'),
      describe:
        t('Describe_project_system-OS-front'),
      status: 'Em contrução',
      url_project:'https://systemos-94uz.onrender.com',
      url_repositoy:'https://github.com/BrenoMatheus/Sistema-os-frontend',
      url_img:'./projects/system-OS.png',
      type: 'frontend',
      technologies: [
        {
          name: 'React JS',
          url: './icons/frontend/reactjs.png',
        },
        {
          name: 'JavaScript',
          url: './icons/frontend/js.png',
        },
        {
          name: 'TypeScript',
          url: './icons/frontend/typescript.png',
        },
      ],
    },
    {
      title: t('title_project_system-OS-back'),
      describe:
        t('Describe_project_system-OS-back'),
      status: 'Em contrução',
      url_project:'https://systemos-94uz.onrender.com',
      url_repositoy:'https://github.com/BrenoMatheus/Sistema-OS-backend',
      url_img:'./projects/system-OS.png',
      type: 'backend',
      technologies: [
        {
          name: 'Node JS',
          url: './icons/nodejs.png',
        },
        {
          name: 'JavaScript',
          url: './icons/frontend/js.png',
        },
        {
          name: 'TypeScript',
          url: './icons/frontend/typescript.png',
        },
        {
          name: 'KnexJS',
          url: './icons/knex.png',
        },
        {
          name: 'PostgreSQL',
          url: './icons/postgresql.png',
        },
      ],
    },
    {
      title: t('title_project_system-optical'),
      describe:
        t('Describe_project_system-optical'),
      status: 'Concluído',
      url_repositoy:'https://github.com/BrenoMatheus/Optical-System',
      url_img:'./projects/system.jpg',
      type: 'fullstack',
      technologies: [
        {
          name: 'Laravel',
          url: './icons/laravel-icon.png',
        },
        {
          name: 'JavaScript',
          url: './icons/frontend/js.png',
        },
        {
          name: 'Bootstrap',
          url: './icons/frontend/bootstrap.webp',
        },
        {
          name: 'MySQL',
          url: './icons/mysql.png',
        },
      ],
    },
    {
      title: t('title_project_register-client'),
      describe:
        t('Describe_project_register-client'),
      status: 'Concluído',
      url_repositoy:'https://github.com/BrenoMatheus/register-clients',
      url_img:'./projects/system.jpg',
      type: 'fullstack',
      technologies: [
        {
          name: 'Node JS',
          url: './icons/nodejs.png',
        },
        {
          name: 'TypeScript',
          url: './icons/frontend/typescript.png',
        },
        {
          name: 'React JS',
          url: './icons/frontend/reactjs.png',
        },
        {
          name: 'Vite',
          url: './icons/frontend/vite.png',
        },
        {
          name: 'Mongo DB',
          url: './icons/mongodb.png',
        },
      ],
    },
  ];

  useEffect(() => {
    Aos.init({duration:1200});
  });

  return (
    <div data-aos='fade-up' className="mt-20" id="Projects">
      <div className="text-center text-4xl">
        <h4 className="font-bold font-mono dark:text-gray-100 text-gray-900 ">
          {t('My Projects')}
        </h4>
      </div>
      <div className='flex justify-center p-2'>
        <button onClick={()=> (setFilterType('all'))} className='border rounded-l-lg p-1 pr-2 pl-2 dark:text-white text-gray-900 border-gray-900 dark:border-white hover:bg-gray-700 hover:text-white dark:hover:bg-gray-200 dark:hover:text-gray-900'>{t('All')}</button>
        <button onClick={()=> (setFilterType('frontend'))} className='border p-1 pr-2 pl-2 dark:text-white text-gray-900  border-gray-900 dark:border-white hover:bg-gray-700 hover:text-white dark:hover:bg-gray-200 dark:hover:text-gray-900'>{t('Front')}</button>
        <button onClick={()=> (setFilterType('backend'))} className='border p-1 pr-2 pl-2 dark:text-white text-gray-900  border-gray-900 dark:border-white hover:bg-gray-700 hover:text-white dark:hover:bg-gray-200 dark:hover:text-gray-900'>{t('Back')}</button>
        <button onClick={()=> (setFilterType('fullstack'))} className='border p-1 pr-2 pl-2 dark:text-white text-gray-900  border-gray-900 dark:border-white hover:bg-gray-700 hover:text-white dark:hover:bg-gray-200 dark:hover:text-gray-900'>{t('Full-Stack')}</button>
        <button onClick={()=> (setFilterType('others'))} className='border rounded-r-lg p-1 pr-2 pl-2 dark:text-white text-gray-900  border-gray-900 dark:border-white hover:bg-gray-700 hover:text-white dark:hover:bg-gray-200 dark:hover:text-gray-900'>{t('Others')}</button>
      </div>
      <SlideProjects projects={projects} filter={filterType}/>
    </div>
  );
};
