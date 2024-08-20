// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import { ITechnologies, Technology } from '../Technology';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { IonIcon } from '@ionic/react';

export interface IProjects {
  title: string;
  describe: string;
  status: string;
  type: string;
  url_project?:string;
  url_repositoy:string;
  url_img:string;
  technologies: ITechnologies[];
}

interface ProjectsListProps {
  projects: IProjects[];
  filter: string;
}

export default function SlideProjects({ projects, filter }: ProjectsListProps) {

  const { t, i18n } = useTranslation();
  const [listProjects, setListProjects] = useState(projects);
  const [filterType, setFilterType] = useState('all');

  useEffect(() => {
    if (filter !== filterType && filter !== '') {
      setFilterType(filter);
    } else {
      if (filterType === 'all') {
        setListProjects(projects);
      } else {
        const filterProject = projects.filter(
          (project) => project.type === filterType
        );
        setListProjects(filterProject);
      }
    }
  }, [filter, filterType, projects]);

  // Atualiza a lista de projetos quando o idioma muda
  useEffect(() => {
    setListProjects(projects);
  }, [i18n.language, projects]);




  return (
    <div className="mt-5">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        coverflowEffect={{
          rotate: 100,
          stretch: -20,
          depth: 300,
          modifier: 0.5,
          slideShadows: true,
        }}
        pagination={true}
        navigation={true}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="mySwiper"
      >
        {listProjects.length === 0 && (
          <SwiperSlide className="w-10 bg-cover bg-center">
            <div className="flex flex-col border p-2 rounded-md dark:bg-gray-700 bg-gray-300 dark:text-red-300 text-red-400 items-center bg-center">
              {t('no-project')}
            </div>
          </SwiperSlide>
        )}
        {listProjects?.map((project) => (
          <SwiperSlide
            key={project.title}
            className="group w-10 bg-cover bg-center"
          >
            <div className="flex flex-col border p-2 rounded-md dark:bg-gray-900 bg-gray-300 items-center bg-center">
              <div className="text-center p-2 text-2xl">
                <h4 className="font-extrabold font-mono dark:text-gray-100 text-gray-900 ">
                  {t(project.title)}
                </h4>
              </div>
              <div className="p-2 bg-gray-100 dark:bg-gray-800 w-full flex flex-col text-start rounded-md">
                <h4 className="font-bold text-sm font-mono dark:text-gray-100 text-gray-900 ">
                  {t(project.describe)}
                </h4>
                <div className="bg-yellow-500 rounded-md p-1 mt-4">
                  <span className="p-2 font-bold text-xs font-mono dark:text-gray-100 text-gray-900 ">
                    {project.status}
                  </span>
                </div>
              </div>
              <div className=" bg-gray-100 dark:bg-gray-700 dark:text-gray-100 p-1 flex flex-wrap gap-1 text-md w-full rounded-md">
                <Technology technologies={project.technologies} />
              </div>
              <div className="flex flex-row justify-start m-2 pl-2 mb-8 float-start w-full">
                <div className="mr-2">
                  <a href={project.url_repositoy}>
                    <img
                      className="w-7 h-7 grayscale hover:grayscale-0 hover:scale-125 hover:duration-200 delay-200"
                      src='./icons/others/github-icon.png'
                      alt='GitHub-Repository'
                    />
                  </a>
                </div>
                {project.url_project && (<div className="h-7 mr-2 text-2xl">
                  <a href={project.url_project}>
                    <IonIcon name="link" className="font-extrabold hover:scale-125 hover:duration-200 delay-200 text-gray-500 dark:hover:text-white hover:text-black" />
                  </a>
                </div>)}
              </div>
            </div>
            <div className="group-hover:translate-y-full transition duration-300 absolute top-0 w-full h-full ">
              <img
                src={project.url_img}
                alt={project.title}
                className="top-auto object-left-top object-cover h-full rounded-sm group-hover:translate-y-full transition duration-300"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
