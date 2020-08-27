import React from 'react';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Container, OnlyText, Input, ConvertButton, ButtonContainer, ButtonText } from './styles';

const BinToTxt = () => {
  return (
    <Container>
      <OnlyText>Binary:</OnlyText>
      <Input 
        multiline={true}
        textAlignVertical="top"
      />
      <ButtonContainer>
        <ConvertButton>
          <OnlyText>CONVERT</OnlyText>
        </ConvertButton>
      </ButtonContainer>
      <OnlyText>Resulting Text:</OnlyText>
      <Input 
        multiline={true}
        textAlignVertical="top"
        editable={false}
        placeholder="The decoded text will appear here"
      />
    </Container>
  );
}

export default BinToTxt;