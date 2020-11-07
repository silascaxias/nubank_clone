import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 20px 10px 20px;
`;

export const Top = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const UserName = styled.Text`
  flex: 1;
  font-size: 18px;
  color: #fff;
  font-weight: bold;
  margin-left: 8px;
`;

export const Buttons = styled.View`
  flex-direction: row;
  align-items: flex-end;
`;

export const Button = styled.TouchableOpacity`
  margin-left: 5px;
  margin-right: 5px;
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background: rgba(255, 255, 255, 0.10);
  align-items: center;
  justify-content: center;
`;

export const CustomIcon = styled.Image`
  height: 28px;
  width: 28px;
  tint-color: #fff;
`;
