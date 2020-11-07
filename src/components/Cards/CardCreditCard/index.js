import React from 'react';

import {
  Content,
  Card,
  CardHeader,
  CardContent,
  Title,
  Description,
  Value,
  Icon,
  CardFooter,
  TextFooter,
  ValueFooter,
  ValueFooterContainer,
  ShadowView,
} from './styles';

import creditCard from '~/assets/icons/credit-card-icon.png';

export default function CardCreditCard({isVisible}) {
  return (
    <Content>
      <Card>
        <CardHeader>
          <Icon source={creditCard} />
          <Title>Cartão de Crédito</Title>
        </CardHeader>
        <CardContent>
          <Description>Fatura atual</Description>
        </CardContent>
        <CardFooter>
          {isVisible ? (
            <>
              <Value>R$ 0,00</Value>
              <ValueFooterContainer>
                <TextFooter>Limite disponível</TextFooter>
                <ValueFooter>R$ 50.000,00</ValueFooter>
              </ValueFooterContainer>
            </>
          ) : (
            <ShadowView />
          )}
        </CardFooter>
      </Card>
    </Content>
  );
}
