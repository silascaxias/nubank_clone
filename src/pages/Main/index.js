import React from 'react';
import Header from '~/components/Header';
import Tabs from '~/components/Tabs';
import CardAccount from '~/components/Cards/CardAccount';

import {Container, CardsContainer} from './styles';

const Main = () => (
  <Container>
    <CardsContainer>
      <Header />
      <CardAccount />
      <CardAccount />
      <CardAccount />
    </CardsContainer>
    <Tabs />
  </Container>
);

export default Main;
