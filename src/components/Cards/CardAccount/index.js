import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Content,
  Card,
  CardHeader,
  CardContent,
  Title,
  Description,
  Annotation,
  CardFooter,
} from './styles';

export default function CardAccount() {
  return (
    <Content>
      <Card>
        <CardHeader>
          <Icon name="attach-money" size={28} color="#666" />
          <Icon name="visibility-off" size={28} color="#666" />
        </CardHeader>
        <CardContent>
          <Title>Saldo disponível</Title>
          <Description>R$ 197.611,65</Description>
        </CardContent>
        <CardFooter>
          <Annotation>Transferência de R$ 20,00 recebida</Annotation>
        </CardFooter>
      </Card>
    </Content>
  );
}
