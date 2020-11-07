import styled from 'styled-components/native';
import {getStatusBarHeight, getBottomSpace} from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  background: #8B10AE;
  padding-top: ${getStatusBarHeight}px;
  padding-bottom: ${getBottomSpace}px;
`;

export const CardsContainer = styled.ScrollView.attrs({
  contentContainerStyle: {paddingTop: 10, paddingBottom: 10},
  showVerticalScrollIndicator: false,
})``;
