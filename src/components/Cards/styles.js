import styled from 'styled-components/native';

export const Content = styled.View`
  flex: 1;
  max-height: 400px;
  margin-bottom: 20px;
`;

export const Card = styled.View`
  background: #fff;
  border-radius: 4px;
  margin: 0 20px;
`;

export const CardHeader = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 30px;
  margin-left: 25px;
`;

export const CardContent = styled.View`
  margin-top: 15px;
  margin-left: 25px;
`;

export const Title = styled.Text`
  color: #666;
  margin-left: 15px;
`;

export const Icon = styled.Image`
  tint-color: ${(props) => props.tintColor || '#666'};
  height: 28px;
  width: 28px;
`;

export const CardButton = styled.TouchableOpacity`
  margin-top: 10px;
  color: rgb(40, 40, 40);
  border-width: 1px;
  border-color: #8B10AE;
  padding: 15px;
  border-radius: 5px;
`;
