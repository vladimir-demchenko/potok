import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import InstructorItem from '../InstructorItem/InstructorItem';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import cls from './InstructorsList.module.scss';

export default function InstructorsList() {
  return (
    <div className={`${cls.content} container`}>
      <div>
        <h3 className={cls.upperText}>
          педагоги-практики с большим опытом
        </h3>
        <h2 className={cls.title}>Наши тренера и эксперты:</h2>
      </div>
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        navigation
        loop
        pagination={{ clickable: true }}
        grabCursor={false}
        centeredSlides
      >
        <SwiperSlide>
          <InstructorItem />
        </SwiperSlide>
        <SwiperSlide>
          <InstructorItem />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}