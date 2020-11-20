import React from 'react';

import {Description, Value, CardFooter, TextFooter, ShadowView} from './styles';

import {
  Content,
  Card,
  CardHeader,
  CardContent,
  Title,
  Icon,
  CardButton,
} from '../styles';

import bankLoan from '~/assets/icons/bank-loan-icon.png';

export default function CardBankLoan({isVisible}) {
  return (
    <Content>
      <Card>
        <CardHeader>
          <Icon source={bankLoan} />
          <Title>Empréstimo</Title>
        </CardHeader>
        <CardContent>
          {isVisible ? (
            <>
              <Description>Valor disponível de até</Description>
              <Value>R$ 50.000,00</Value>
            </>
          ) : (
            <ShadowView />
          )}
        </CardContent>
        <CardFooter>
          <CardButton>
            <TextFooter>SIMULAR EMPRÉSTIMO</TextFooter>
          </CardButton>
        </CardFooter>
      </Card>
    </Content>
  );
}
