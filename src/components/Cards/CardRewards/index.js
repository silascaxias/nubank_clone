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
  TextFooter,
  CardButton,
} from './styles';

import rewardsIcon from '~/assets/icons/rewards-icon.png';

export default function cardRewards() {
  return (
    <Content>
      <Card>
        <CardHeader>
          <Icon source={rewardsIcon} />
          <Title>Rewards</Title>
        </CardHeader>
        <CardContent>
          <Description>Apague compras com pontos que nunca expiram.</Description>
        </CardContent>
        <CardFooter>
          <CardButton>
            <TextFooter>CONHECER</TextFooter>
          </CardButton>
        </CardFooter>
      </Card>
    </Content>
  );
}
