import { React, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  CarouselContainer,
  Carousel,
  CarouselSlide,
  CarouselImageContainer,
  Overlay,
  CarouselSlideImage,
  CarouselSlideTitle,
  CarouselButtonsContainer,
  PrevSlideButton,
  NextSlideButton
} from './styles.js';

function CarouselComponent() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const navigate = useNavigate();
  
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
  const totalSlides = slides.length;

  function handleSlideClick(route) {
    navigate(route);
  };

  function nextSlide() {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setActiveIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    }
  };

  function prevSlide() {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setActiveIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
    }
  };

  useEffect(() => {
    function handleTransitionEnd() {
      setTimeout(() => {
        setIsTransitioning(false);
      }, 500); 
    }

    return () => clearTimeout(handleTransitionEnd);
  }, [activeIndex]);

  return (
    <>
    <CarouselContainer>
      <Carousel style={{ transform: `translateX(-${activeIndex * 100}%)`, transition: 'transform 0.5s ease-in-out' }}>
        {slides.map((slide, index) => (
            <CarouselSlide
              key={index}
              className="carousel-slide"
              onClick={() => handleSlideClick(slide.route)}
            >
              <CarouselImageContainer>
                <CarouselSlideImage src={slide.imageUrl} alt={slide.title} className="carousel-image" />
                <Overlay />
              </CarouselImageContainer>
              <CarouselSlideTitle className="carousel-title">{slide.title}</CarouselSlideTitle>
            </CarouselSlide>
          ))}
      </Carousel>
    </CarouselContainer>

    <CarouselButtonsContainer>
      <PrevSlideButton onClick={prevSlide}>
        <svg 
          fill="#A47963" 
          height="30px" 
          width="30px" 
          version="1.1" 
          id="Layer_1" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 512 512" 
          stroke="#A47963" 
          strokeWidth="3.072"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0" />
          <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
          <g id="SVGRepo_iconCarrier">
            <g>
              <g>
                <path d="M256,0C114.62,0,0,114.62,0,256s114.62,256,256,256s256-114.62,256-256S397.38,0,256,0z M256,486.4 C128.956,486.4,25.6,383.044,25.6,256S128.956,25.6,256,25.6S486.4,128.956,486.4,256S383.044,486.4,256,486.4z" />
              </g>
            </g>
            <g>
              <g>
                <path d="M170.146,265.045l128,128.009c5.001,5.001,13.099,5.001,18.099,0c5.001-5,5.001-13.099,0-18.099L197.299,256 l118.955-118.946c5.001-5,5.001-13.099,0-18.099c-2.5-2.509-5.777-3.755-9.054-3.755c-3.277,0-6.554,1.246-9.054,3.746l-128,128 C165.146,251.947,165.146,260.045,170.146,265.045z" />
              </g>
            </g>
          </g>
        </svg>
      </PrevSlideButton>

      <NextSlideButton onClick={nextSlide}>
        <svg 
          fill="#A47963" 
          height="30px" 
          width="30px" 
          version="1.1" 
          id="Layer_1" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 512 512" 
          stroke="#A47963" 
          strokeWidth="3.072"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0" />
          <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
          <g id="SVGRepo_iconCarrier">
            <g>
              <g>
                <path d="M256,0C114.62,0,0,114.62,0,256s114.62,256,256,256s256-114.62,256-256S397.38,0,256,0z M256,486.4 C128.956,486.4,25.6,383.044,25.6,256S128.956,25.6,256,25.6S486.4,128.956,486.4,256S383.044,486.4,256,486.4z" />
              </g>
            </g>
            <g>
              <g>
                <path d="M341.854,246.955l-128-128.009c-5.001-5.001-13.099-5.001-18.099,0c-5.001,5-5.001,13.099,0,18.099L314.701,256 L195.746,374.946c-5.001,5-5.001,13.099,0,18.099c2.5,2.509,5.777,3.755,9.054,3.755c3.277,0,6.554-1.246,9.054-3.746l128-128 C346.854,260.053,346.854,251.955,341.854,246.955z" />
              </g>
            </g>
          </g>
        </svg>
      </NextSlideButton>
    </CarouselButtonsContainer>

    </>
  );
};

export default CarouselComponent;
