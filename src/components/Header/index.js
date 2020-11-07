import React from 'react';
import {Container, Top, UserName, Buttons, Button, CustomIcon} from './styles';

import Icon from 'react-native-vector-icons/MaterialIcons';

import settingsIcon from '~/assets/icons/settings-icon.png';
import visibilityOn from '~/assets/icons/visibility-on-icon.png';
import visibilityOff from '~/assets/icons/visibility-off-icon.png';

export default function Header() {
  return (
    <Container>
      <Top>
        <UserName>Olá, Silas S. Caxias</UserName>
        <Buttons>
          <Button>
            <CustomIcon source={visibilityOn} />
          </Button>
          <Button>
            <CustomIcon source={settingsIcon} />
          </Button>
        </Buttons>
      </Top>
    </Container>
  );
}
