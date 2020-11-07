import React, {useState} from 'react';
import Header from '~/components/Header';
import Tabs from '~/components/Tabs';
import CardCreditCard from '~/components/Cards/CardCreditCard';
import CardAccount from '~/components/Cards/CardAccount';
import CardBankLoan from '~/components/Cards/CardBankLoan';
import CardRewards from '~/components/Cards/CardRewards';

import {Container, CardsContainer} from './styles';

export default function Main() {
  const [isVisible, setIsVisible] = useState(true);

  const updateVisibility = (state) => {
    setIsVisible(state);
  };

  return (
    <Container>
      <CardsContainer>
        <Header
          updateVisibility={(state) => {
            updateVisibility(state);
          }}
        />
        <CardCreditCard isVisible={isVisible} />
        <CardAccount isVisible={isVisible} />
        <CardBankLoan isVisible={isVisible} />
        <CardRewards />
      </CardsContainer>
      <Tabs />
    </Container>
  );
}
