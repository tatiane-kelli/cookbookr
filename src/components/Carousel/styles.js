import styled from 'styled-components';

export const CarouselContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
  padding-left: 25px;
  padding-right: 25px;
`;

export const Carousel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
  scroll-behavior: smooth;
  transition: transform 0.5s ease-in-out;
`;

export const CarouselSlide = styled.div`
  max-width: 100%;
  transition: transform 0.5s ease-in-out;
  position: relative;
  margin: 0 10px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CarouselImageContainer = styled.div`
  position: relative;
  width: 300px;
  height: 400px;
  overflow: hidden;

  &:hover div {
    opacity: 0;
    transition: transform 2s smooth;
  }
`;

export const CarouselSlideImage = styled.img`
  width: 300px;
  height: 400px;
  object-fit: cover;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
`;

export const CarouselSlideTitle = styled.div`
  position: absolute;
  color: white;
  text-transform: uppercase;
  font-family: 'Raleway', sans-serif;
  font-size: 2rem;
  padding: 5px 10px;
  font-weight: 200;
`;

export const CarouselButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 20px;
`;

export const PrevSlideButton = styled.button`
  width: 25px;
  height: 25px;
  background: none;
  border: none;
  cursor: pointer;
`;

export const NextSlideButton = styled.button`
  width: 25px;
  height: 25px;
  background: none;
  border: none;
  cursor: pointer;
`;