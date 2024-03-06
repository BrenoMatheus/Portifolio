import { useTranslation } from 'react-i18next';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import required modules
import SlideHabilities from './SlideHabilities';
import { useEffect } from 'react';
import Aos from 'aos';

export const Habilities = () => {
  const {t} = useTranslation();
  const habilities = [
    {
      title: 'Backend',
      technologies: [
        {
          name: 'Node JS',
          url: './icons/nodejs.png',
        },
        {
          name: 'Nest JS',
          url: './icons/nestjs.webp',
        },
        {
          name: 'Laravel',
          url: './icons/laravel-icon.png',
        },
        {
          name: 'GoLang',
          url: './icons/golang.png',
        },
        {
          name: 'RabbitMQ',
          url: './icons/rabbitmq.svg',
        },
        {
          name: 'MySQL',
          url: './icons/mysql.png',
        },
        {
          name: 'PostgreSQL',
          url: './icons/postgresql.png',
        },
        {
          name: 'Mongo DB',
          url: './icons/mongodb.png',
        },
        {
          name: 'KnexJS',
          url: './icons/knex.png',
        },
        {
          name: 'TypeORM',
          url: './icons/typeorm.svg',
        },
        {
          name: 'JSON Web Token',
          url: './icons/jwt-icon.png',
        },
      ],
    },
    {
      title: 'Frontend',
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
          name: 'Next JS',
          url: './icons/frontend/nextjs.webp',
        },
        {
          name: 'TypeScript',
          url: './icons/frontend/typescript.png',
        },
        {
          name: 'Tailwind',
          url: './icons/frontend/tailwind.png',
        },
        {
          name: 'Vite',
          url: './icons/frontend/vite.png',
        },
        {
          name: 'Bootstrap',
          url: './icons/frontend/bootstrap.webp',
        },
        {
          name: 'VueJS',
          url: './icons/frontend/vue.svg',
        },
      ],
    },
    {
      title: 'Tests',
      technologies: [
        {
          name: 'Jest',
          url: './icons/tests/jest-icon.png',
        },
      ],
    },
    {
      title: t('Others'),
      technologies: [
        {
          name: 'Linux',
          url: './icons/others/linux.png',
        },
        {
          name: 'Docker',
          url: './icons/others/docker-icon.png',
        },
        {
          name: 'Git',
          url: './icons/others/git-icon.png',
        },
        {
          name: 'GitHub',
          url: './icons/others/github-icon.png',
        },
      ],
    },
  ];

  useEffect(() => {
    Aos.init({duration:1200});
  });

  return (
    <div data-aos='fade-up' className="mt-20" id='Skills'>
      <div className="text-center text-4xl">
        <h4 className="font-bold font-mono dark:text-gray-100 text-gray-900 ">
          {t('Skills and Tools')}
        </h4>
      </div>
      <SlideHabilities habilities={habilities} />
    </div>
  );
};
