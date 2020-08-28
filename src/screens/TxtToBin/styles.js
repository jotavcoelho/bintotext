import styled from 'styled-components/native';

import { RectButton } from 'react-native-gesture-handler';
import { Pressable } from 'react-native';

export const Container = styled.View`
  flex: 1;
  background-color: #efefef
  flex-direction: column;
  align-items: stretch;
  padding: 15px 5px;
`;

export const OnlyText = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;

export const Input = styled.TextInput.attrs({
  selectionColor: "#999",
  placeholderTextColor: "#666"
})`
  color: #333;
  height: 180px;
  background-color: #FFF;
  border-radius: 6px;
  margin: 10px;
  padding: 6px;
  border: 1px solid #ccc;
`;

export const ButtonPressContainer = styled(Pressable)`
  height: 60px;
  border: 3px solid #111;
  border-radius: 6px;
  margin: 10px;
`;

export const ConvertButton = styled(RectButton)`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #FFF;
  border-radius: 6px;
`;
