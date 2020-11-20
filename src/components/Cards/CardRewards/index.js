import React from 'react';

import {Title, Description, CardFooter, TextFooter} from './styles';

import {
  Content,
  Card,
  CardHeader,
  CardButton,
  CardContent,
  Icon,
} from '../styles';

import rewardsIcon from '~/assets/icons/rewards-icon.png';

export default function cardRewards() {
  return (
    <Content>
      <Card>
        <CardHeader>
          <Icon source={rewardsIcon} tintColor={'#8B10AE'} />
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
