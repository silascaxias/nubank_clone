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
  ShadowView,
} from './styles';

import accountIcon from '~/assets/icons/account-icon.png';

export default function CardAccount({isVisible}) {
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
          {isVisible ? <ValueFooter>R$ 50.000,00</ValueFooter> : <ShadowView />}
        </CardFooter>
      </Card>
    </Content>
  );
}