import React from 'react';
import Header from '~/components/Header';
import Tabs from '~/components/Tabs';
import CardCreditCard from '~/components/Cards/CardCreditCard';
import CardAccount from '~/components/Cards/CardAccount';
import CardBankLoan from '~/components/Cards/CardBankLoan';
import CardRewards from '~/components/Cards/CardRewards';

import {Container, CardsContainer} from './styles';

const Main = () => (
  <Container>
    <CardsContainer>
      <Header />
      <CardCreditCard />
      <CardAccount />
      <CardBankLoan />
      <CardRewards />
    </CardsContainer>
    <Tabs />
  </Container>
);

export default Main;
