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
  const [cursor, setCursor] = useState({start: 0, end: 0});

  const inputPress = useCallback(() => setVisibleBinKeyb(true));

  const handleChangeText = useCallback(text => {
    setInput(text);
  }, []);

  const convert = useCallback(() => {
    setVisibleBinKeyb(false);
    Keyboard.dismiss();
    
    // setOutput(binToText(input));
    setOutput(input[3]);
  }, [input, binToText]);

  const inputOne = useCallback(() => {
    const beforeSelection = input.substring(0, cursor.start);
    const afterSelection = input.substring(cursor.end);

    if(cursor.start === cursor.end) {
      setInput(beforeSelection + "1" + afterSelection);
      setCursor({
        start: cursor.start + 1,
        end: cursor.end + 1,
      });
    }
    else {
      const minusSelected = input.slice(0, cursor.start);
      setInput(minusSelected + "1" + afterSelection);
      setCursor({
        start: cursor.start - 1,
        end: cursor.end - 1,
      });
    }
    // setInput(input + "1");
  }, [input, cursor]);

  const inputZero = useCallback(() => {
    const beforeSelection = input.substring(0, cursor.start);
    const afterSelection = input.substring(cursor.end);

    if(cursor.start === cursor.end) {
      setInput(beforeSelection + "0" + afterSelection);
      setCursor({
        start: cursor.start + 1,
        end: cursor.end + 1,
      });
    }
    else {
      const minusSelected = input.slice(0, cursor.start);
      setInput(minusSelected + "0" + afterSelection);
      setCursor({
        start: cursor.start - 1,
        end: cursor.end - 1,
      });
    }
    // setInput(input + "0");
  }, [input, cursor]);

  const inputSpacebar = useCallback(() => {
    const beforeSelection = input.substring(0, cursor.start);
    const afterSelection = input.substring(cursor.end);

    if(cursor.start === cursor.end) {
      setInput(beforeSelection + " " + afterSelection);
      setCursor({
        start: cursor.start + 1,
        end: cursor.end + 1,
      });
    }
    else {
      const minusSelected = input.slice(0, cursor.start);
      setInput(minusSelected + " " + afterSelection);
      setCursor({
        start: cursor.start - 1,
        end: cursor.end - 1,
      });
    }
    // setInput(input + " ");
  }, [input, cursor]);

  const inputBackspace = useCallback(() => {
    const beforeSelection = input.substring(0, cursor.start);
    const afterSelection = input.substring(cursor.end);

    if(cursor.start === cursor.end) {
      const minusChar = beforeSelection.slice(0, -1);
      setInput(minusChar + afterSelection);
      setCursor({
        start: cursor.start - 1,
        end: cursor.end - 1,
      });
    }
    else {
      const minusSelected = input.slice(0, cursor.start);
      setInput(minusSelected + afterSelection);
      setCursor({
        start: cursor.start - 1,
        end: cursor.end - 1,
      });
    }
    // setInput(input.slice(cursor.start, cursor.end));
  }, [input, cursor]);

  const pressOutsideInput = useCallback(() => {
    setVisibleBinKeyb(false);
    Keyboard.dismiss();
  }, []);

  const handleSelectionChange = useCallback(selection => {
    setCursor(selection.nativeEvent.selection);
  }, [cursor]);

  useEffect(() => {
    // console.tron.log(cursor);    
  }, [cursor])

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
              selection={cursor}
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