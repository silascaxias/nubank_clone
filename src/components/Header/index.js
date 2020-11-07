import React, {useState} from 'react';
import {Container, Top, UserName, Buttons, Button, CustomIcon} from './styles';

import settingsIcon from '~/assets/icons/settings-icon.png';
import visibilityOn from '~/assets/icons/visibility-on-icon.png';
import visibilityOff from '~/assets/icons/visibility-off-icon.png';

export default function Header({updateVisibility}) {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <Container>
      <Top>
        <UserName>Olá, Silas S. Caxias</UserName>
        <Buttons>
          <Button
            onPress={() => {
              setIsVisible(!isVisible);
              updateVisibility(!isVisible);
            }}>
            <CustomIcon source={isVisible ? visibilityOff : visibilityOn} />
          </Button>
          <Button>
            <CustomIcon source={settingsIcon} />
          </Button>
        </Buttons>
      </Top>
    </Container>
  );
}
