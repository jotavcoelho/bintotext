import React, { useState, useCallback } from 'react';

import { Keyboard, Pressable } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { 
  Container, 
  OnlyText, 
  Input, 
  ConvertButton, 
  ButtonPressContainer, 
  BinKeyboard,
  DigitsContainer,
  Digit,
  OneOrZero,
  FuncButtonsContainer,
  Spacebar,
  Backspace,
} from './styles';

const BinToTxt = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const [visibleBinKeyb, setVisibleBinKeyb] = useState(false);

  const inputPress = useCallback(() => setVisibleBinKeyb(true));

  const convertPress = useCallback(() => {
    setVisibleBinKeyb(false);
  }, []);

  const inputOne = useCallback(() => {
    setInput(input + "1");
  }, [input]);

  const inputZero = useCallback(() => {
    setInput(input + "0");
  }, [input]);

  const inputSpacebar = useCallback(() => {
    setInput(input + " ");
  }, [input]);

  const inputBackspace = useCallback(() => {
    const backspaced = input.slice(0, -1);
    setInput(backspaced);
  }, [input]);

  return (
    <Container>
        <OnlyText>Binary:</OnlyText>
      <Pressable
        onPress={inputPress}
      >
        <Input 
          multiline={true}
          textAlignVertical="top"
          onFocus={inputPress}
          showSoftInputOnFocus={false}
          placeholder="Input the binary code here."
          value={input}
        />
      </Pressable>
        <ButtonPressContainer
          onPress={convertPress}
        >
          <ConvertButton>
            <OnlyText>CONVERT</OnlyText>
          </ConvertButton>
        </ButtonPressContainer>
      <OnlyText>Resulting Text:</OnlyText>
      <Input 
        multiline={true}
        textAlignVertical="top"
        editable={false}
        placeholder="The decoded text will appear here"
        value={output}
      />
      {visibleBinKeyb && 
        <BinKeyboard>
          <DigitsContainer>
            <Digit
              onPress={inputOne}
            >
              <OneOrZero>1</OneOrZero>
            </Digit>
            <Digit
              onPress={inputZero}
            >
              <OneOrZero>0</OneOrZero>
            </Digit>
          </DigitsContainer>
          <FuncButtonsContainer>
            <Spacebar
              onPress={inputSpacebar}
            >
              <Icon name="keyboard-space" color="#000" size={20} />
            </Spacebar>
            <Backspace
              onPress={inputBackspace}
            >
              <Icon name="keyboard-backspace" color="#000" size={20} />
            </Backspace>
          </FuncButtonsContainer>
        </BinKeyboard>
      }
    </Container>
  );
}

export default BinToTxt;