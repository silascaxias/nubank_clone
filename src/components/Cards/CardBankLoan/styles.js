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
  tint-color: #666;
  height: 28px;
  width: 28px;
`;

export const Description = styled.Text`
  padding-top: 10px;
  color: #000;
`;

export const Value = styled.Text`
  padding-top: 5px;
  font-size: 13px;
  font-weight: bold;
  color: #000;
`;

export const CardFooter = styled.View`
  flex-direction: row;
  margin-left: 25px;
  padding-top: 5px;
  padding-bottom: 30px;
`;
export const TextFooter = styled.Text`
  color: #8B10AE;
  font-weight: bold;
  font-size: 13px;
`;
export const CardButton = styled.TouchableOpacity`
  margin-top: 10px;
  color: rgb(40, 40, 40);
  border-width: 1px;
  border-color: #8B10AE;
  padding: 15px;
  border-radius: 5px;
`;

export const ShadowView = styled.View`
  margin-top: 10px;
  margin-right: 25px;
  height: 38px;
  background: rgba(0, 0, 0, 0.09);
`;
