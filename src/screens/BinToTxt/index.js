import React, { useState } from 'react';

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
  
  function buttonPress() {
    setVisibleBinKeyb(false);
  }

  return (
    <Container>
        <OnlyText>Binary:</OnlyText>
      <Pressable
        onPress={() => setVisibleBinKeyb(true)}
      >
        <Input 
          multiline={true}
          textAlignVertical="top"
          editable={false}
          value={input}
        />
      </Pressable>
        <ButtonPressContainer
          onPress={() => setVisibleBinKeyb(false)}
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
      <BinKeyboard visible={visibleBinKeyb} >
        <DigitsContainer>
          <Digit>
            <OneOrZero>1</OneOrZero>
          </Digit>
          <Digit>
            <OneOrZero>0</OneOrZero>
          </Digit>
        </DigitsContainer>
        <FuncButtonsContainer>
          <Spacebar>
            <Icon name="keyboard-space" color="#000" size={20} />
          </Spacebar>
          <Backspace>
            <Icon name="keyboard-backspace" color="#000" size={20} />
          </Backspace>
        </FuncButtonsContainer>
      </BinKeyboard>
    </Container>
  );
}

export default BinToTxt;