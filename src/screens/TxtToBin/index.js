import React, { useState, useCallback} from 'react';

import { textToBin } from '../../util/convert';

import { Keyboard, ScrollView } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { 
  Container, 
  OnlyText, 
  Input, 
  ConvertButton, 
  ButtonPressContainer, 
  ButtonText 
} from './styles';

const TxtToBin = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const convert = useCallback(() => {
    Keyboard.dismiss();

    setOutput(textToBin(input));
  }, [input, textToBin]);

  const handleChangeText = useCallback(text => {
    setInput(text);
  }, []);
  
  return (
    <Container>
      <ScrollView>
        <OnlyText>Text:</OnlyText>
        <Input 
          multiline={true}
          textAlignVertical="top"
          placeholder="Input the text here."
          value={input}
          onChangeText={handleChangeText}
        />
        <ButtonPressContainer
          onPress={convert}
        >
          <ConvertButton>
            <OnlyText>CONVERT</OnlyText>
          </ConvertButton>
        </ButtonPressContainer>
        <OnlyText>Resulting Binary:</OnlyText>
        <Input 
          multiline={true}
          textAlignVertical="top"
          showSoftInputOnFocus={false}
          placeholder="The encoded text will appear here as binary"
          value={output}
        />
      </ScrollView>
    </Container>
  );
}

export default TxtToBin;