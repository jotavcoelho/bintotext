import React, { useState, useCallback, useEffect } from 'react';

import { binToText } from '../../util/convert';

import { Keyboard, Pressable, ScrollView } from 'react-native';

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
  const [cursor, setCursor] = useState({});

  const inputPress = useCallback(() => setVisibleBinKeyb(true));

  const handleChangeText = useCallback(text => {
    setInput(text);
  }, []);

  const convert = useCallback(() => {
    setVisibleBinKeyb(false);
    Keyboard.dismiss();
    
    setOutput(binToText(input));
  }, [input, binToText]);

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
    setInput(input.slice(0, -1));
  }, [input]);

  const pressOutsideInput = useCallback(() => {
    setVisibleBinKeyb(false);
    Keyboard.dismiss();
  }, []);

  const handleSelectionChange = useCallback(selection => {
    console.tron.log("selection changed");
  }, [])

  return (
    <>
      <Container onPress={pressOutsideInput}>
        <ScrollView
          keyboardShouldPersistTaps="handled"
        >
          <OnlyText>Binary:</OnlyText>
          <Pressable
            onPress={inputPress}
          >
            <Input 
              multiline={true}
              textAlignVertical="top"
              onFocus={inputPress}
              onBlur={pressOutsideInput}
              showSoftInputOnFocus={false}
              placeholder="Input the binary code here."
              value={input}
              onChangeText={handleChangeText}
              onSelectionChange={handleSelectionChange}
            />
          </Pressable>
            <ButtonPressContainer
              onPress={convert}
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
        </ScrollView>
      </Container>
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
    </>
  );
}

export default BinToTxt;