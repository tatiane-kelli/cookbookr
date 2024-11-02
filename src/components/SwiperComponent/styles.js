import styled from 'styled-components';

export const SwiperImageContainer = styled.div`
  position: relative;
  width: 300px;
  height: 400px;
  overflow: hidden;

  &:hover div:nth-child(2) {
    opacity: 0;
    transition: opacity 0.3s ease;
  }
`;

export const SwiperSlideImage = styled.img`
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
  transition: opacity 0.3s ease-in-out;
`;

export const SwiperSlideTitle = styled.div`
  position: absolute;
  color: white;
  text-transform: uppercase;
  font-family: 'Raleway', sans-serif;
  font-size: 2rem;
  padding: 5px 10px;
  font-weight: 200;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
`;
