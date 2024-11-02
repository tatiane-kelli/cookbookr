import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination, Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import {
  SwiperImageContainer,
  Overlay,
  SwiperSlideImage,
  SwiperSlideTitle,
} from './styles.js';
import './styles.css';

function SwiperComponent() {
  const slides = [
    {
      title: 'Tortas',
      imageUrl: '/images/bolo-cenoura.jpg',
      route: '/recipes/category/tortas'
    },
    {
      title: 'Bolos',
      imageUrl: '/images/bolo-cenoura.jpg',
      route: '/recipes/category/bolos'
    },
    {
      title: 'Sobremesas',
      imageUrl: '/images/mousse-maracuja.jpg',
      route: '/recipes/category/sobremesas'
    },
    {
      title: 'Refeições',
      imageUrl: '/images/carne-creme-de-bacon.jpg',
      route: '/recipes/category/refeicoes'
    },
    {
      title: 'Sucos',
      imageUrl: '/images/suco-laramora.jpg',
      route: '/recipes/category/sucos'
    },
    {
      title: 'Pães',
      imageUrl: '/images/pao-de-mel.jpg',
      route: '/recipes/category/paes'
    },
    {
      title: 'Biscoitos',
      imageUrl: '/images/biscoitinho-whey.jpeg',
      route: '/recipes/category/biscoitos'
    }
  ];

  return (
    <Swiper
      slidesPerView={5}
      spaceBetween={15}
      loop={true}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[FreeMode, Pagination, Autoplay]}
      className="categoriesSwiper"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index} className="swiper-slide">
          <Link to={slide.route} style={{ textDecoration: 'none' }}>
            <SwiperImageContainer>
              <SwiperSlideImage src={slide.imageUrl} alt={slide.title} />
              <Overlay />
              <SwiperSlideTitle>{slide.title}</SwiperSlideTitle>
            </SwiperImageContainer>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default SwiperComponent;
