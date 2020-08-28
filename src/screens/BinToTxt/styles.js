import styled, { css } from 'styled-components/native';

import { BorderlessButton } from 'react-native-gesture-handler';
import { Pressable } from 'react-native';

export const Container = styled.View`
  position: relative;
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

export const ConvertButton = styled(BorderlessButton)`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #FFF;
  border-radius: 6px;
`;

export const BinKeyboard = styled.View`
  position: absolute;
  height: 250px;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #fff;
  flex-direction: column;
  border: 2px solid #0c0c0c;
  border-radius: 6px;
  padding: 10px 5px;

`;

export const DigitsContainer = styled.View`
  flex-direction: row;
  flex: 1;
`;

export const Digit = styled(Pressable)`
  flex: 0.5;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  margin: 15px 10px;
  border: 3px solid #0c0c0c;
  border-radius: 6px;
`;

export const OneOrZero = styled.Text`
  font-size: 40px;
  font-weight: bold;
`;

export const FuncButtonsContainer = styled.View`
  flex-direction: row;
  flex: 0.25;
`;

export const Spacebar = styled(Pressable)`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  margin: 0 3px;
  border: 3px solid #0c0c0c;
  border-radius: 6px;
`;

export const Backspace = styled(Pressable)`
  flex: 0.2;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  margin: 0 3px;
  border: 3px solid #0c0c0c;
  border-radius: 6px;
`;
