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
  color: #666;
`;

export const Value = styled.Text`
  margin-top: 15px;
  font-size: 25px;
  font-weight: bold;
  color: rgb(0, 142, 193);
`;

export const CardFooter = styled.View`
  flex-direction: column;
  margin-left: 25px;
  padding-top: 5px;
  padding-bottom: 30px;
`;

export const ValueFooterContainer = styled.View`
  flex-direction: row;
  padding-top: 5px;
`;

export const TextFooter = styled.Text`
  color: rgb(40, 40, 40);
`;

export const ValueFooter = styled.Text`
  margin-left: 5px;
  color: rgb(21, 117, 29);
  font-weight: bold;
`;

export const ShadowView = styled.View`
  margin-top: 10px;
  margin-right: 25px;
  height: 57px;
  background: rgba(0, 0, 0, 0.09);
`;
