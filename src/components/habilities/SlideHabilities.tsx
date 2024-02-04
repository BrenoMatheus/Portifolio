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

export interface IHabilites {
  title: string;
  technologies: ITechnologies[];
}

interface HabilitesListProps {
  habilities: IHabilites[];
}

export default function SlideHabilites({ habilities }: HabilitesListProps) {
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
        {habilities?.map((hability) => (
          <SwiperSlide key={hability.title} className="bg-cover bg-center">
            <div className="flex flex-col border p-2 rounded-md dark:bg-gray-900 bg-gray-300 items-center bg-center">
              <div className="text-center p-2 text-4xl">
                <h4 className="font-bold font-mono dark:text-gray-100 text-gray-900 ">
                  {hability.title}
                </h4>
              </div>
              <div className="p-2 text-4xl bg-gray-100 dark:bg-gray-800 w-full flex flex-col text-center rounded-md items-center">
                <div className="w-full text-lg text-gray-800 dark:text-gray-100">
                  <Technology technologies={hability.technologies} />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
