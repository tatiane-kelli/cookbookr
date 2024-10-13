import React from 'react';
import Header from '../../components/Header';
import CarouselComponent from '../../components/Carousel';

import {
  HomeContainer, 
  MainContent,
  WelcomeText,
  WelcomeSubtitle
} from './styles';

function Home() {
  return (
    <>
      <HomeContainer>
        <Header />
        <MainContent>
          <WelcomeText>Bem-vindo!</WelcomeText>
          <WelcomeSubtitle>O que vamos cozinhar hoje?</WelcomeSubtitle>
          <CarouselComponent />
        </MainContent>
      </HomeContainer>
    </>
  );
};

export default Home;
