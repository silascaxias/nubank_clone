import React from 'react';
import {
  Content,
  Card,
  CardHeader,
  CardContent,
  Title,
  Description,
  Icon,
  CardFooter,
  ValueFooter,
} from './styles';

import accountIcon from '~/assets/icons/account-icon.png';

export default function CardAccount() {
  return (
    <Content>
      <Card>
        <CardHeader>
          <Icon source={accountIcon} />
          <Title>Conta</Title>
        </CardHeader>
        <CardContent>
          <Description>Saldo disponível</Description>
        </CardContent>
        <CardFooter>
          <ValueFooter>R$ 50.000,00</ValueFooter>
        </CardFooter>
      </Card>
    </Content>
  );
}